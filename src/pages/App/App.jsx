import React, { Component } from 'react'
import { Route, Redirect} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import SearchList from '../SearchList/SearchList'
import Landing from '../Landing/Landing'
import * as authService from '../../services/authService'
import * as roadgoatService from './../../services/roadgoatService'
import Users from '../Users/Users';

class App extends Component {
	state = {
		user: authService.getUser(),
		loginAPI: process.env.REACT_APP_APIKEY,
		passAPI: process.env.REACT_APP_SECRETKEY,
		baseURL: process.env.REACT_APP_BASEURL,
		query: "q=",
		searchTitle: "",
		searchURL: ""
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
		console.log(this.state.searchTitle)
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.setState({
			searchURL: this.state.baseURL + this.state.query + this.state.searchTitle, 
			searchTitle: ''
		}, () => {
			roadgoatService.getSearch(this.state.searchURL, this.state.loginAPI, this.state.passAPI)
			.then(json => this.setState({
				data: json
			}))
		})
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
					<SearchList search={this.state.searchURL}/>	
				</Route>
				

			</>
		)
	}
}

export default App
