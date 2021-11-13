import styles from './Landing.module.css'

const Landing = ({user, destinations}) => {
  return (
    <main className={styles.container}><br />
      <h1 className={styles.headerH1}>
        Welcome to Travutan {user ? user.name : ""}
      </h1> <br /> <br />
      <div className={styles.flexContainer}>
        {
          destinations.map((destination, idx) => (
            <div className={styles.destinationCard} key={idx}>
              <h4>{destination.title}</h4> <br />
              <img width="90%" height="70%" src={destination.image} alt='soon'/>
            </div>
          ))
        }
      </div>
    </main>
  )
}
 
export default Landing