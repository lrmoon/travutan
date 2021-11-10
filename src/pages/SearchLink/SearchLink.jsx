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
        return(
            <>
                <h1>{cityDetails.long_name}</h1>
                <p>Events: {cityDetails.google_events_url}</p>
                <p>Airbnb: {cityDetails.airbnb_url}</p>
                <p>Guides: {cityDetails.getyourguide_url}</p>
                <p></p>
            </>
            
        )        
    }

}

export default SearchLink