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


const initialState={
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
}

class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	componentDidMount() {
		this.getFeed();
	}
	
	async getFeed() {
		let response = await axios.get('http://localhost:8080/feed');
		this.setState({ feed: response.data[0] });
	}

	 addNewUser = async (obj)=> {
		 console.log(obj);
		 
		let newUser = {
			name: obj.name,
			email: obj.email,
			password: obj.password,
			phone: obj.phone,
			radius: 0,
			ranking: 0,
			counter: 0
		}
		axios.post('http://localhost:8080/signup', newUser)
		// console.log(user)
		//  user = user.data
		// console.log(user)
		console.log(newUser);
		
		this.setState({
			user: {
				id: newUser.id,
				login: true,
				name: newUser.name,
				email: newUser.email,
				password: newUser.password,
				phone: newUser.phone,
				radius: newUser.radius,
				ranking: newUser.ranking,
				counter: newUser.counter
			}
		})
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
	logout= ()=>{
		// newstate={...this.state}
		this.state = {
			feed: [...this.state.feed],
			left: false,
			user: initialState
		};
		// document.getElementsByClassName('link').
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
	x=()=>{
		return this.state.user.login == false ? 
			<Link to="/login">Log In</Link> : 
			<Link className="link" onClick={this.logout} to="/feed">Log Out</Link>
	}	


<<<<<<< HEAD
=======
	sideList = (side) => (
		<div role="presentation" onClick={this.toggleDrawer(side, false)} onKeyDown={this.toggleDrawer(side, false)}>
			<List>
				<div>
					<div><Link className="main-links" to="/profile">Profile</Link></div>
					<Divider />
					<div><Link className="main-links" to="/feed">Feed</Link></div>
					<Divider />
					
					<div>
	                {/* <div>{this.state.user.login == false ? <Link to="/login">Log In</Link> : <Link className="link" onClick={this.logout} to="/feed">Log Out</Link>}</div> */}
					<div>{this.x()}</div>

					</div>
				</div>
			</List>
		</div>
	);

>>>>>>> e205aca26cf3952cdf45407d4903f56d093e6c9e
	render() {
		return (
			<div>
				<Router>
<<<<<<< HEAD
					<Menu />
					<Route exact path="/feed" exact render={() => <Feed feed={this.state.feed} acceptReq={this.acceptReq} user={this.state.user} />} />
					<Route exact path="/profile" exact render={() => <Profile user={this.state.user} />} />
=======
					<Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>{this.sideList('left')}</Drawer>
					{/* <Route path="/UserLog" exact render={() => (<UserLog />)}/> */}
					<Route exact path="/feed" exact render={() => <Feed login={this.state.user.login} feed={this.state.feed} acceptReq={this.acceptReq} user={this.state.user}/>} />
					<Route exact path="/profile" exact render={() => <Profile user={this.state.user}/>} />
>>>>>>> e205aca26cf3952cdf45407d4903f56d093e6c9e
					<Route exact path="/login" exact render={() => <UserLog addNewUser={this.addNewUser} user={this.state.user} login={this.login} />} />
					<Route exact path="/newRequest" exact render={() => <New_Request addNewRequest={this.addNewRequest} />} />
				</Router>
			</div>
		);
	}
}

export default App;
