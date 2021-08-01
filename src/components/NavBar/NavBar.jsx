import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<nav>
					<div>
						<ul>
							<li>Welcome, {user.name}</li>
							{/* <li>
                <NavLink to="/users">Users</NavLink>
              </li> */}
						</ul>
					</div>
				</nav>
			) : (
				<nav>
					<div>
						<ul>
							<li>
								<NavLink to="/login">Log In</NavLink>
							</li>
							{/* <li>
                <NavLink to="/users">Users</NavLink>
              </li> */}
							<li>
								<NavLink to="/signup">Sign Up</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar
