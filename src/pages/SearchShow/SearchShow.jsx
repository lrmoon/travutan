
import * as roadgoatService from '../../services/roadgoatService'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './SearchShow.css'

class SearchShow extends Component{

    state = {
        loginApi: process.env.REACT_APP_APIKEY,
        passwordApi: process.env.REACT_APP_SECRETKEY,
        urlId: this.props.location.state.val.id,
        cityDetails: {},
        // form body to be used when handling submit and setting state
        formBody: {}
    }
    
    async componentDidMount(){

        const cityJson = await roadgoatService.getCity(this.state.urlId, this.state.loginApi, this.state.passwordApi)

        this.setState({
            cityDetails: cityJson.data.attributes,
            cityIncluded: cityJson.included
        })

    }

    handleSubmit = e => {
        e.preventDefault();
        
        const formBody = {
            title: e.target[0].value,
            image: e.target[1].value,
            budget: e.target[2].value,
            population: e.target[3].value ? parseInt(e.target[3].value) : 0,
            wikiUrl: e.target[4].value ? e.target[4].value : 'https://en.wikipedia.org/wiki/Main_Page',
            covid: e.target[5].value
        }
        console.log(formBody)
        this.props.handleAddDestination(formBody)
    }

    render(){
        
        const {cityDetails, cityIncluded} = this.state

        // if covid is defined render our page, else render loading
        if(cityDetails.covid){
            // drilling covid info
            const covidData = cityDetails.covid;
            const firstCovidLocal = cityDetails.covid ? Object.keys(covidData)[0] : ''  

            // drilling budget info
            const budgetData = cityDetails.budget;
            const firstBudgetLocal = cityDetails.budget ? Object.keys(budgetData)[0] : ''

            // drilling image info
            const photosArray = cityIncluded ? cityIncluded.filter((photo) => photo.type === 'photo'): ''
            const lastPhoto = photosArray ? photosArray[photosArray.length -1].attributes.image.full : ''
            
            return(
                <div className='show'>

                    <h1>{cityDetails.long_name}</h1>
                    <img width='200px' src={lastPhoto} alt='comingsoon'></img>
                    <p>{`Budget: ${cityDetails.budget ? cityDetails.budget[firstBudgetLocal].text : ''}`}</p>
                    <p>Population: {cityDetails.population ? cityDetails.population : 'N/A'}</p><br/>
                    <a href={cityDetails.wikipedia_url ? cityDetails.wikipedia_url : 'https://en.wikipedia.org/wiki/Main_Page'}>Wiki</a>
                    <p>{`Covid Level: ${cityDetails.covid ? cityDetails.covid[firstCovidLocal].text : ''}`}</p>

                    {/* people who are not logged in should not be able to handle a submit */}
                    {/* possibly make a condition on submit checking to see if there is a token */}
                    <form onSubmit={this.handleSubmit}>
                        <input hidden type='text' value={cityDetails.long_name ? cityDetails.long_name : ''} name="title" readOnly/>
                        <input hidden type='text' value={lastPhoto ? lastPhoto : ''} name='image' readOnly/>
                        <input hidden type='text' value={cityDetails.budget ? cityDetails.budget[firstBudgetLocal].text : ''} name='budget' readOnly/>
                        <input hidden type='number' value={cityDetails.population ? cityDetails.population : ''} name='population' readOnly/>
                        <input hidden type='text' value={cityDetails.wikipedia_url ? cityDetails.wikipedia_url : ''} name='wikiUrl' readOnly/>
                        <input hidden type='text' value={cityDetails.covid ? cityDetails.covid[firstCovidLocal].text : ''} name='covid' readOnly/>
                        {this.props.user? <button type='submit'>Add to collection</button> : <Link to="/signup">Add to collection</Link>}
                        
                    </form>
                    
                </div>
            )          
        } else {
            return <h1>Loading...</h1>
        }
          
    }
}
export default SearchShow;
