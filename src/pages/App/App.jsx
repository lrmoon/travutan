import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'

class App extends Component {
	state = {}

	render() {
		return (
			<>
				<NavBar user={this.state.user} />
				<Route exact path='/'>
          <Landing user={this.state.user} />
        </Route>
				<Route exact path='/signup'>
          <Signup />
        </Route>
				<Route exact path='/login'>
          <Login />
        </Route>
			</>
		)
	}
}

export default App
