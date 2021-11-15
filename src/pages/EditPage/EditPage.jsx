import React, {Component} from 'react'
import * as backEndService from './../../services/backendService'

class EditPage extends Component{

    state = {
        destination: this.props.location.state.profileDestination,
        editTitle: this.props.location.state.profileDestination.title
    }

    handleChange = (e) => {
        this.setState({
            editTitle: e.target.value
        })
    }

    handleEdit = async e => {
        e.preventDefault()

        const {image, covid, budget, population, wikiUrl} = this.state.destination

        const formBody = {
            title: this.state.editTitle,
            image,
            covid,
            budget,
            population,
            wikiUrl
        }
        console.log(formBody)

        backEndService.updateDestination(this.state.destination, formBody)

        this.props.handleRedirect();

    }


    render() {
        const {destination, editTitle} = this.state;
        console.log(destination)
        return (
            <div className='formClass'>
                <form onSubmit={this.handleEdit}>
                    <input type='text' name='title' value={editTitle} onChange={this.handleChange}/>
                    <button type='submit'>Update Title</button>
                </form>
                <img width="70%" height='70%' src={destination.image} alt='soon'/>
            </div>
        )        
    }

}

export default EditPage
