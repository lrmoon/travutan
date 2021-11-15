import styles from './Destinations.module.css'
import React, {Component} from 'react'
import * as backEndService from './../../services/backendService'
import {Link} from 'react-router-dom'

class Destinations extends Component{

  state = {
    profileCollection: [],
  }

  async componentDidMount(){
      const profileCollection = await backEndService.getProfileDestinations();

      this.setState({
        profileCollection
      })

  }

  handleDelete = async e => {
    console.log('delete', e.target.value)

    backEndService.deleteDestination(e.target.value)
    .then(deletedDestination => this.setState({
      profileCollection: this.state.profileCollection.filter(collection => 
        collection._id !== deletedDestination._id)
    }))

  }

  render(){
    const {profileCollection} = this.state;
    console.log(profileCollection)
    return (
      <main className={styles.container}>
        <h1>
          Profile Collection
        </h1>
    
        <div className={styles.flexContainer}>
          {
            profileCollection ?

            profileCollection.map((profileDestination, idx) => (
              <div className={styles.destinationCard} key={idx}>
                <h4>{profileDestination.title}</h4>
                <img width="90%" height='70%' src={profileDestination.image} alt='soon'/>
                <Link className='' style={{fontFamily: 'arial', fontSize:'25px'}} to={{
                    pathname: '/editPage',
                    state: {profileDestination}
                }}>
                Edit
                </Link>     
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