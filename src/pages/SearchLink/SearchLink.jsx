import * as roadgoatService from './../../services/roadgoatService'
import React, {Component} from 'react'

class SearchLink extends Component{

    state = {
        loginApi: process.env.REACT_APP_APIKEY,
        passwordApi: process.env.REACT_APP_SECRETKEY,
        urlId: this.props.location.state.val.id,
        cityDetails: {},
        cityImages: []
    }
    
    async componentDidMount(){

        const cityJson = await roadgoatService.getCity(this.state.urlId, this.state.loginApi, this.state.passwordApi)

        this.setState({
            cityDetails: cityJson.data.attributes,
            cityIncluded: cityJson.included
            // set state of cityimages from cityJson included.images
        })


    }

    render(){
        const {cityDetails, cityIncluded} = this.state
        // find the object thats right before the object whose attribute has user 
        console.log(cityIncluded);

        // drilling covid info
        const covidData = cityDetails.covid;
        const firstCovidLocal = cityDetails.covid ? Object.keys(covidData)[0] : ''  

        // drilling budget info
        const budgetData = cityDetails.budget;
        const firstBudgetLocal = cityDetails.budget ? Object.keys(budgetData)[0] : ''

        // drilling image info
        const photosArray = cityIncluded ? cityIncluded.filter((photo) => photo.type === 'photo'): ''
        const lastPhoto = photosArray ? photosArray[photosArray.length -1].attributes.image.full : ''

        console.log(lastPhoto);
        
        return(
            <>
                <h1>{cityDetails.long_name}</h1>
                {/* img here */}
                <p>{`Budget: ${cityDetails.budget ? cityDetails.budget[firstBudgetLocal].text : ''}`}</p>
                <a href={cityDetails.google_events_url}>Events</a><br/>
                <a href={cityDetails.airbnb_url}>Airbnb</a>
                <p>{`Covid Level: ${cityDetails.covid ? cityDetails.covid[firstCovidLocal].text : ''}`}</p>
            </>
            
        )        
    }

}

export default SearchLink