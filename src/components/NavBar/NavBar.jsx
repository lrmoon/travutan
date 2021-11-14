import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = ({ user, handleLogout, handleChange, handleSubmit, searchTitle, handleProfile }) => {
	return (
		<>
			{user ? (
				<nav className="navbar navbar-expand-lg navbar-white bg-white">
					<div className="container-fluid">
						<div>
							<span>
								<img src='/images/travutan_icon.png' alt="icon" style={{height:"100px", width: "100px", margin: "0px"}}></img>
							</span>
							<Link className={styles.navElement} style={{fontSize: "50px"}} to="/">TRAVUTAN</Link>
						</div>
						<li><Link className={styles.navElement} to="/users">Users</Link></li>
						<li><Link onClick={handleProfile} className={styles.navElement} to='/destinations'> My Destinations</Link></li>
						<li><Link className={styles.navElement} to='' onClick={handleLogout}>Log Out</Link></li>
						<form onSubmit={handleSubmit} className="d-flex">
							<input onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTitle} />
							<button value="Submit" className="btn btn-outline-dark" type="submit">Search</button>
						</form>
					</div>
				</nav>
			) : (
				<nav className="navbar navbar-expand-lg navbar-light bg-white">
					<div className="container-fluid removeLine">
						<div>
							<span>
								<img src='/images/travutan_icon.png' alt="icon" style={{height:"100px", width: "100px", margin: "0px"}}></img>
							</span>
							<Link className={styles.navElement} style={{fontSize: "50px", margin: "0px"}} to="/">TRAVUTAN</Link>
						</div>
						<li><Link className={styles.navElement} to={user ? '/destinations':'/login' }>My Destinations</Link></li>
						<li><Link className={styles.navElement} to="/signup">Sign Up</Link></li>
						<li><Link className={styles.navElement} to="/login">Log In</Link></li>
						<form onSubmit={handleSubmit} className="d-flex">
							<input onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTitle} />
							<button value="Submit" className="btn btn-outline-dark" type="submit">Search</button>
						</form>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar
