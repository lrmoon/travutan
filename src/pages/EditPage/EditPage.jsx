
function EditPage(props){
    const {profileDestination} = props.location.state
    console.log(profileDestination);

    const handleEdit = async formBody => {
        console.log(formBody)
    }

    return (
        <div className='formClass'>
            <form onSubmit={this.handleEdit}>
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default EditPage