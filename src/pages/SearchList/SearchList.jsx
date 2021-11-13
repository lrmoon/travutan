import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import styles from '../Landing/Landing.module.css'

class SearchList extends Component{

    render(){
        return(
            <div className={styles.searchList}>
                <h1> Search List</h1>
                {
                    this.props.search.data ?
                    this.props.search.data.map(val => (
                        // only render destination types that are cities
                        val.attributes.destination_type === 'City' ?
                        <div key={val.id} className='searchDivs'>   
                            <Link style={{fontFamily: 'arial', fontSize:'25px'}} to={{
                                pathname: '/searchShow',
                                state: {val}
                            }}>
                            {val.attributes.name}
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