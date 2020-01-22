import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Feed from './components/Feed';
import axios from 'axios';
// import UserLog from './components/Login-Signup'
// import Help from './components/Help';
import UserLog from './components/Login-Signup'
import Menu from './components/Menu';
import Profile from './components/Profile';
import 'font-awesome/css/font-awesome.min.css';
import New_Request from './components/New_Request';

class App extends Component {
	constructor() {
		super();
		this.state = {
			feed: [],
			left: false,
			user: {
				id: Number,
				login: false,
				name: 'guest',
				email: '',
				password: '',
				phone: '',
				radius: Number,
				ranking: Number,
				counter: Number
			}
		};
	}

	componentDidMount() {
		this.getFeed();
	}
	
	async getFeed() {
		let response = await axios.get('http://localhost:8080/feed');
		this.setState({ feed: response.data[0] });
	}

	addNewUser(obj) {
		let newUser = {
			name: obj.name,
			email: obj.email,
			password: obj.password,
			phone: obj.phone,
			radius: 0,
			ranking: 0,
			counter: 0
		}
		axios.post('http://localhost:8080/signup', newUser);

	}

	acceptReq = (reqId) => {
		let helperId = this.state.user.id
		console.log(helperId)
		axios.put(`http://localhost:8080/feed/${reqId}/${helperId}`)
	}

	login = async (email, password) => {
		let user = await axios.post('http://localhost:8080/login', {
			auth: {
				email: email,
				password: password
			}
		})
		console.log(user.data[0])
		user = user.data[0]
		this.setState({
			user: {
				id: user.id,
				login: true,
				name: user.name,
				email: user.email,
				password: user.password,
				phone: user.phone,
				radius: user.radius,
				ranking: user.ranking,
				counter: user.counter
			}
		})
	}

	addNewRequest = (obj) => {
		console.log(obj)
		let newRequest = {
			userReq: this.state.user.id,
			description: obj.text,
			skill: obj.skill,
			date: obj.date
		}
		axios.post(`http://localhost:8080/feed`, newRequest)
		this.getFeed()
	}
	// requestHelp = async (newHelp) => {
	//   await axios.post('http://localhost:8080/help', newHelp)
	//   let data = await this.getFeed()
	//   this.setState({
	//     Feed: data.data
	//   })
	// }

	// helpStatus = async (help) => {
	//   await axios.put('http://localhost:8080/help', { data: { id: help._id } })
	//   let response = await this.getFeed()
	//   this.setState({ Feed: response.data })
	// }

	render() {
		return (
			<div>
				<Router>
					<Menu />
					<Route exact path="/feed" exact render={() => <Feed feed={this.state.feed} acceptReq={this.acceptReq} user={this.state.user} />} />
					<Route exact path="/profile" exact render={() => <Profile user={this.state.user} />} />
					<Route exact path="/login" exact render={() => <UserLog addNewUser={this.addNewUser} user={this.state.user} login={this.login} />} />
					<Route exact path="/newRequest" exact render={() => <New_Request addNewRequest={this.addNewRequest} />} />

				</Router>
			</div>
		);
	}
}

export default App;
