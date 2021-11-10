import * as roadgoatService from './../../services/roadgoatService'
import React, {Component} from 'react'

class SearchLink extends Component{

    state = {
        loginApi: process.env.REACT_APP_APIKEY,
        passwordApi: process.env.REACT_APP_SECRETKEY,
        urlId: this.props.location.state.val.id,
        cityDetails: {}
    }
    
    componentDidMount(){

        roadgoatService.getCity(this.state.urlId, this.state.loginApi, this.state.passwordApi)
        .then(json => console.log(json))
    }

    render(){
        const {val} = this.props.location.state

        return(
            // remove this, we want the fetched value from city details
            <h1>{val.attributes.name}</h1>
        )        
    }

}

export default SearchLink