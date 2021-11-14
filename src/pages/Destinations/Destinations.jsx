import styles from './Destinations.module.css'
import React, {Component} from 'react'
import * as backEndService from './../../services/backendService'

class Destinations extends Component{

  state = {
    profile: {}
  }

  async componentDidMount(){
      const profile = await backEndService.getProfile();
      
      this.setState({
        profile
      })
  }

  handleDelete = async e => {
    console.log('delete', e.target.value)

    const profile = await backEndService.deleteDestination(e.target.value)

    // set state again of the response the backend gives you which is the profile
    this.setState({
      profile
    })
  }

  handleEdit = e => {
    console.log('edit', e.target.value)
  }

  render(){
    const {name, destinations} = this.state.profile;
    return (
      <main className={styles.container}>
        <h1>
          {name}
        </h1>
    
        
        <div className={styles.flexContainer}>
          {
            destinations ?

            destinations.map((profileDestination, idx) => (
              <div className={styles.destinationCard} key={idx}>
                <h4>{profileDestination.title}</h4>
                <img width="90%" height='70%' src={profileDestination.image} alt='soon'/>
                <button value={profileDestination._id} onClick={this.handleEdit}>Edit</button>
                <button value={profileDestination._id} onClick={this.handleDelete}>Delete</button>
              </div>
            ))
            :
            ''
          }
        </div>


      </main>
    )  
  }
  
}
 
export default Destinations