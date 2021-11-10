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
						<li>TRAVUTAN</li>
						<li><Link to="/users">Users</Link></li>
						<li><Link to='' onClick={handleLogout}>Log Out</Link></li>
						<li><Link to='/destinations'>Destinations</Link></li>
						<li className="navElement"><Link to="/login">Log In</Link></li>
						<form onSubmit={handleSubmit} className="d-flex">
							<input onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button value="Submit" className="btn btn-outline-dark" type="submit">Search</button>
						</form>
					</div>
				</nav>

				/* <nav className={styles.userNav}>
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
				</nav> */
			) : (

				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
							<li className="navElement">
								<Link to="/">Home</Link>
							</li>
							<li className="navElement">
								<Link to='/destinations'>Destinations</Link>
							</li>
							<li className="navElement">
								<Link to="/signup">Sign Up</Link>
							</li>
							<li className="navElement">
								<Link to="/login">Log In</Link>
							</li>
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
