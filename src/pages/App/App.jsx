// React / React Router imports
import React, { Component } from 'react'
import { Route, Redirect} from 'react-router-dom'

// Components imports
import NavBar from '../../components/NavBar/NavBar'

// Page imports
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import SearchList from '../SearchList/SearchList'
import SearchLink from './../SearchLink/SearchLink'

// Services imports
import * as authService from '../../services/authService'
import * as roadgoatService from './../../services/roadgoatService'


class App extends Component {
	state = {
		user: authService.getUser(),
		loginAPI: process.env.REACT_APP_APIKEY,
		passAPI: process.env.REACT_APP_SECRETKEY,
		baseURL: process.env.REACT_APP_BASEURL,
		query: "q=",
		searchTitle: "",
		searchURL: "",
		search: []
	}

	handleLogout = () => {
		authService.logout();
		this.setState({user: null})
		this.props.history.push('/')
	}

	handleSignupOrLogin = () => {
		this.setState({ user: authService.getUser() })
	}
	
	handleChange = (e) => {
		this.setState({searchTitle: e.target.value})
		console.log("stuff")
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.setState({
			searchURL: this.state.baseURL + this.state.query + this.state.searchTitle, 
			searchTitle: ''
		}, () => {
			roadgoatService.getSearch(this.state.searchURL, this.state.loginAPI, this.state.passAPI)
			.then(json => this.setState({
				search: json
			}))
		})

		this.props.history.push('/search')
	}

	render() {
		const {user} = this.state
		return (
			<>
				<NavBar 
					user={user} 
					handleLogout={this.handleLogout}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit} 
				/>
				<Route exact path='/'>
          			<Landing user={user} />
        		</Route>
				<Route exact path='/signup'>
					<Signup 
						history={this.props.history}
						handleSignupOrLogin={this.handleSignupOrLogin}
					/>
				</Route>
				<Route exact path='/destinations'>

				</Route>
				<Route exact path='/login'>
					<Login 
						history={this.props.history}
						handleSignupOrLogin={this.handleSignupOrLogin}
					/>
				</Route>
				<Route
					exact
					path="/users"
					render={() =>
						user ? <Users /> : <Redirect to="/login" />
  					}
				/>

				<Route exact path='/search'>
					<SearchList search={this.state.search}/>	

				</Route>
				
				<Route exact path='/searchLinks'>
					  <SearchLink />
				</Route>

			</>
		)
	}
}

export default App
