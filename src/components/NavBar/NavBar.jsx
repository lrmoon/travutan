// import React from 'react'
// import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
	// top = { user, handleLogout, handleChange, handleSubmit }
	return (
		<>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Destination</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SignUp</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
      {/* </ul> */}
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    {/* </div> */}
  </div>
</nav>

			{/* {user ? (
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
			)} */}
		</>
	)
}

export default NavBar
