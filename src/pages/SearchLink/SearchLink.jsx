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
            cityDetails: cityJson.data.attributes
            // set state of cityimages from cityJson included.images
        })


    }

    render(){
        console.log(this.state.cityDetails.name);
        const {cityDetails} = this.state

        const covidData = cityDetails.covid;
       
        const firstPlace = cityDetails.covid ? Object.keys(covidData)[0] : ''  

        console.log(firstPlace);
        
        return(
            <>
                <h1>{cityDetails.long_name}</h1>
                <a href={cityDetails.google_events_url}>Events</a><br/>
                <a href={cityDetails.airbnb_url}>Airbnb</a>
                <p>{`Covid Level: ${cityDetails.covid ? cityDetails.covid[firstPlace].text : ''}`}</p>
            </>
            
        )        
    }

}

export default SearchLink