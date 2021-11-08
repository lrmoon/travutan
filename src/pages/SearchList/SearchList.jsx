
import React, {Component} from 'react';
class SearchList extends Component{

    render(){
        console.log(typeof this.props.search.data);
        return(
            <>
            <div>
                    {/* {
                        this.props.search.map(val => (
                            console.log(val.id)
                        ))
                    }                 */}
            </div>

            </>
        )
    }
}

export default SearchList