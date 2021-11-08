import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout, handleChange }) => {
	
	return (
		<>
			{user ? (
				<nav className={styles.userNav}>
					<div>
						<ul>
							<li>Welcome, {user.name}</li>
							<li>
								<Link to="/users">Users</Link>
							</li>
			  				<li>
								  <Link to='' onClick={handleLogout}>Log Out</Link>
							  </li>	
							  <li>
								  <Link to='/destinations'>Destinations</Link>
							  </li>
							  <li>
								  <input>Search for destination</input>
							  </li>
						</ul>
					</div>
				</nav>
			) : (
				<nav className={styles.nav}>
					<div>
						<ul>
							<li>
								<Link to="/login">Log In</Link>
							</li>
							<li>
								<Link to="/users">Users</Link>
							</li>
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
							<li>
							    <Link to='/destinations'>Destinations</Link>
							</li>
							<li>
								<form>
									<input onChange={handleChange} type='text' placeholder='Search for destination'></input>
									<input type='submit' value="Submit"></input>
								</form>
							</li>

						</ul>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar
