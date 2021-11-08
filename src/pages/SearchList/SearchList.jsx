
import React, {Component} from 'react';
import * as fetchService from './../../services/roadgoatService'

class SearchList extends Component{
    state = {
        data: [],
        url: this.props.search
    }

    render(){
        console.log(this.state.url);
        return(
            <>
                <h1>hi</h1>
            </>
        )
    }
}

export default SearchList