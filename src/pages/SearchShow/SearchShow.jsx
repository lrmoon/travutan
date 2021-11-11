import * as roadgoatService from '../../services/roadgoatService'
import React, {Component} from 'react'
import './SearchShow.css'

class SearchShow extends Component{

    state = {
        loginApi: process.env.REACT_APP_APIKEY,
        passwordApi: process.env.REACT_APP_SECRETKEY,
        urlId: this.props.location.state.val.id,
        cityDetails: {}
    }
    
    async componentDidMount(){

        const cityJson = await roadgoatService.getCity(this.state.urlId, this.state.loginApi, this.state.passwordApi)

        this.setState({
            cityDetails: cityJson.data.attributes,
            cityIncluded: cityJson.included
            // set state of cityimages from cityJson included.images
        })


    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('handle submit')
    }

    render(){
        
        const {cityDetails, cityIncluded} = this.state

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
                <p>Population: {cityDetails.population}</p><br/>
                <a href={cityDetails.wikipedia_url}>Wiki</a>
                <p>{`Covid Level: ${cityDetails.covid ? cityDetails.covid[firstCovidLocal].text : ''}`}</p>

                <form onSubmit={this.handleSubmit}>
                    <input hidden type='text' value={cityDetails.long_name} name="title"/>
                    <input hidden type='text' value={lastPhoto} name='image'/>
                    <input hidden type='text' value={cityDetails.budget[firstBudgetLocal].text} name='budget'/>
                    <input hidden type='number' value={cityDetails.population} name='population'/>
                    <input hidden type='text' value={cityDetails.wikipedia_url} name='wikiUrl'/>
                    <input hidden type='text' value={cityDetails.covid[firstCovidLocal].text} name='covid'/>
                    <button>Add to collection</button>    
                </form>
                
            </div>
        )        
    }

}

export default SearchShow