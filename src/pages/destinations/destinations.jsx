import styles from './Landing.module.css'

const Destinations = ({user, destinations}) => {
  return (
    <main className={styles.container}>
      <h1>
         {user ? user.name : ""}'s Favorite Destinations
      </h1>
      <div className={styles.flexContainer}>
        {
          destinations.map((destination, idx) => (
            <div className={styles.destinationCard} key={idx}>
              <h4>{destination.title}</h4>
              <img width="90%" src={destination.image} alt='soon'/>
            </div>
          ))
        }
      </div>
    </main>
  )
}
 
export default Destinations