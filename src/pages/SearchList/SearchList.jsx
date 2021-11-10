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
                            // only render destination types that are cities
                            val.attributes.destination_type === 'City' ?

                            <div key={val.id} className='searchDivs'>
                                
                                <Link to={{
                                    pathname: '/searchLinks',
                                    state: {val}
                                }}>{val.attributes.name} {val.id}</Link>                    
                            </div>

                            :

                            ''
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