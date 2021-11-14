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

  render(){
    const {name, destinations} = this.state.profile;
    console.log(name, destinations)
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