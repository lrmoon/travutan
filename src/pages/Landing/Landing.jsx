import styles from './Landing.module.css'

const Landing = ({user, destinations}) => {
  return (
    <main className={styles.container}>
      <h1>
        Welcome to Travutan {user ? user.name : ""}
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
 
export default Landing