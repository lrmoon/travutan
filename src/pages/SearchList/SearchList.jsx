import {Link} from 'react-router-dom'

import React, {Component} from 'react';
class SearchList extends Component{

    render(){
        console.log(this.props.search.data);
        return(
            <>
            <div>
                {/* conditional rendering, data is undefined the first time render runs */}
                    {
                        this.props.search.data ?
                        this.props.search.data.map(val => (

                            <div className='searchDivs'>
                                <Link to={{
                                    pathname: '/searchLinks',
                                    state: val
                                }}>{val.attributes.name}</Link>                    
                            </div>
                        ))
                        :
                        ''
                    }                
            </div>

            </>
        )
    }
}

export default SearchList