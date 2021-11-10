import * as roadgoatService from './../../services/roadgoatService'
import {useLocation} from 'react-router-dom'

function SearchLink(){
    let location = useLocation().state.val;
    console.log(location)
    return(
        <h1>{location.attributes.name}</h1>
    )
}

export default SearchLink