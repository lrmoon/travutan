import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout, handleChange, handleSubmit }) => {
	
	return (
		<>
			{user ? (
				<nav className={styles.userNav}>
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
							  	<form onSubmit={handleSubmit}>
									<input onChange={handleChange} type='text' placeholder='Search for destination'></input>
									<button type='submit' value="Submit" >Search</button>
								</form>
							  </li>
						</ul>
				</nav>
			) : (
				<nav className={styles.nav}>
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
								<form onSubmit={handleSubmit}>
									<input onChange={handleChange} type='text' placeholder='Search for destination'></input>
									<button type='submit' value="Submit" >Search</button>
								</form>
							</li>
						</ul>
				</nav>
			)}
		</>
	)
}

export default NavBar
