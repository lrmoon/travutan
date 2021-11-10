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

        const cityDetails = await roadgoatService.getCity(this.state.urlId, this.state.loginApi, this.state.passwordApi)

        this.setState({
            cityDetails: cityDetails.data.attributes
        })


    }

    render(){
        console.log(this.state.cityDetails.name);
        return(
            <>
                <h1>{this.state.cityDetails.long_name}</h1>
            </>
            
        )        
    }

}

export default SearchLink