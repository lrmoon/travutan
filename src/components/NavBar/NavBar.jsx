import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = ({ user, handleLogout, handleChange, handleSubmit }) => {
	return (
		<>
			{user ? (

				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
						<li className={styles.navElement}>TRAVUTAN</li>
						<li><Link className={styles.navElement} to="/users">Users</Link></li>
						<li><Link className={styles.navElement} to='/destinations'>Destinations</Link></li>
						<li><Link className={styles.navElement} to='' onClick={handleLogout}>Log Out</Link></li>
						<form onSubmit={handleSubmit} className="d-flex">
							<input onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button value="Submit" className="btn btn-outline-dark" type="submit">Search</button>
						</form>
					</div>
				</nav>
			) : (

				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
							<li><Link className={styles.navElement} to="/">TRAVUTAN</Link></li>
							<li><Link className={styles.navElement} to='/destinations'>Destinations</Link></li>
							<li><Link className={styles.navElement} to="/signup">Sign Up</Link></li>
							<li><Link className={styles.navElement} to="/login">Log In</Link></li>
							<form onSubmit={handleSubmit} className="d-flex">
								<input onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
								<button value="Submit" className="btn btn-outline-dark" type="submit">Search</button>
							</form>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar
