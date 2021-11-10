import * as roadgoatService from './../../services/roadgoatService'
import React, {Component} from 'react'

class SearchLink extends Component{

    state = {
        urlId: this.props.location.state.val.id,
        cityDetails: {}
    }
    
    render(){
        console.log(this.props.location.state.val.id);
        const {val} = this.props.location.state
        return(
            <h1>{val.attributes.name}</h1>
        )        
    }

}

export default SearchLink