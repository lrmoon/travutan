import React, {Component} from 'react'


class EditPage extends Component{

    state = {
        destination: this.props.location.state.profileDestination,
        form: {},
        editTitle: 'a'
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

        console.log(formBody);
    }


    render() {
        const {destination, editTitle} = this.state;
        console.log(destination)
        return (
            <div className='formClass'>
                <form onSubmit={this.handleEdit}>
                    <input type='text' name='title' value={editTitle} onChange={this.handleChange}/>
                    <button type='submit'>Update</button>
                </form>
            </div>
        )        
    }

}

export default EditPage