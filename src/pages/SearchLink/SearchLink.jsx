import * as roadgoatService from './../../services/roadgoatService'
import React, {Component} from 'react'

class SearchLink extends Component{
    
    render(){
        console.log(this.props.location.state.val);
        return(
            <h1>{this.props.location.state.val.attributes.name}</h1>
        )        
    }

}

export default SearchLink