import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class SearchList extends Component{

    render(){
        return(
            <div>
                <h1> Search List</h1>
                    {
                        this.props.search.data ?
                        this.props.search.data.map(val => (
                            // only render destination types that are cities
                            val.attributes.destination_type === 'City' ?
                            <div key={val.id} className='searchDivs'>
                                
                                <Link to={{
                                    pathname: '/searchShow',
                                    state: {val}
                                }}>
                                {val.attributes.name} {val.id}
                                </Link>                    
                            </div>
                            :
                            ''
                        ))
                        : 
                        ''
                    }                
            </div>
        )
    }
}

export default SearchList