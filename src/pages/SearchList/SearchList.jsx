
import React, {Component} from 'react';
class SearchList extends Component{

    render(){
        console.log(this.props.search.data);
        return(
            <>
            <div>
                    {
                        this.props.search.data ?
                        this.props.search.data.map(val => (
                            console.log(val.id)
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