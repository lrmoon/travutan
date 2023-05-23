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
import Destinations from '../Destinations/Destinations'
import EditPage from '../EditPage/EditPage'

import SearchShow from '../SearchShow/SearchShow'

// Services imports
import * as authService from '../../services/authService'
import * as roadgoatService from './../../services/roadgoatService'
import * as backEndService from './../../services/backendService'


class App extends Component {

	state = {
		user: authService.getUser(),
		loginAPI: process.env.REACT_APP_APIKEY,
		passAPI: process.env.REACT_APP_SECRETKEY,
		baseURL: process.env.REACT_APP_BASEURL,
		query: "q=",
		searchTitle: "",
		searchURL: "",
		search: [],
		// destinations will be an array of destinations collection, 
		destinations: []
	}

	async componentDidMount(){
		const allDestinations =  await backEndService.getAll()

		this.setState({
			destinations: allDestinations
		})

	}

	handleAddDestination = async formBody => {
		const newDestination = await backEndService.create(formBody)
		
		this.setState({
			destinations: [...this.state.destinations, newDestination]
		}, () => {
			console.log( this.state.destinations)	
		})
		
		this.props.history.push('/')
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

	handleRedirect = () => {
		this.props.history.push('/destinations')
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
					searchTitle={this.state.searchTitle}
					handleProfile={this.handleProfile}
				/>
				<Route exact path='/'>
          			<Landing user={user} destinations={this.state.destinations}/>
        		</Route>
				<Route exact path='/signup'>
					<Signup 
						history={this.props.history}
						handleSignupOrLogin={this.handleSignupOrLogin}
					/>
				</Route>
				<Route exact path='/destinations'>
					<Destinations />
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
				
				<Route exact path='/searchShow'
					render={({location}) => 
					<SearchShow user={user} location={location} handleAddDestination={this.handleAddDestination}/>
				}/>

				<Route exact path='/editPage'
					render={({location}) => 
					<EditPage location={location} handleRedirect={this.handleRedirect}/>
				}/>

			</>
		)
	}
}

export default App
