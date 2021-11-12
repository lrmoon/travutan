import * as roadgoatService from '../../services/roadgoatService'
import React, {Component} from 'react'
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

        console.log('handle submit')
    }

    render(){
        
        const {cityDetails, cityIncluded} = this.state

        // if covid is defined render our page, else render loading
        if(cityDetails.covid){
            // drilling covid info
            const covidData = cityDetails.covid;
            const firstCovidLocal = cityDetails.covid ? Object.keys(covidData)[0] : null  

            // drilling budget info
            const budgetData = cityDetails.budget;
            const firstBudgetLocal = cityDetails.budget ? Object.keys(budgetData)[0] : null

            // drilling image info
            const photosArray = cityIncluded ? cityIncluded.filter((photo) => photo.type === 'photo'): null
            const lastPhoto = photosArray ? photosArray[photosArray.length -1].attributes.image.full : null
            
            return(
                <div className='show'>

                    <h1>{cityDetails.long_name}</h1>
                    <img width='200px' src={lastPhoto} alt='comingsoon'></img>
                    <p>{`Budget: ${cityDetails.budget ? cityDetails.budget[firstBudgetLocal].text : ''}`}</p>
                    <p>Population: {cityDetails.population}</p><br/>
                    <a href={cityDetails.wikipedia_url}>Wiki</a>
                    <p>{`Covid Level: ${cityDetails.covid ? cityDetails.covid[firstCovidLocal].text : ''}`}</p>

                    <form onSubmit={this.handleSubmit}>
                        <input hidden type='text' value={cityDetails.long_name} name="title" readOnly/>
                        <input hidden type='text' value={lastPhoto} name='image' readOnly/>
                        <input hidden type='text' value={cityDetails.budget ? cityDetails.budget[firstBudgetLocal].text : null} name='budget' readOnly/>
                        <input hidden type='number' value={cityDetails.population} name='population' readOnly/>
                        <input hidden type='text' value={cityDetails.wikipedia_url} name='wikiUrl' readOnly/>
                        <input hidden type='text' value={cityDetails.covid ? cityDetails.covid[firstCovidLocal].text : null} name='covid' readOnly/>
                        <button>Add to collection</button>    
                    </form>
                    
                </div>
            )          
        } else {
            return <h1>Loading...</h1>
        }
          
    }

}

export default SearchShow