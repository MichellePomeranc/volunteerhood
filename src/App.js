import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Feed from './components/Feed';
import Help from './components/Help';
import axios from 'axios';
// import UserLog from './components/Login-Signup'
import Menu from './components/Menu';
import Profile from './components/Profile';
import 'font-awesome/css/font-awesome.min.css';

// import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';

class App extends Component {
	constructor() {
		super();
		this.state = {
			feed: [],
			left: false
		};
	}

	toggleDrawer = (side, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		this.setState({ ...this.state, [side]: open });
	};

	async componentDidMount() {
		const response = await this.getFeed();
		this.setState({ feed: response.data[0] });
	}

	async getFeed() {
		return axios.get('http://localhost:8080/feed');
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

	sideList = (side) => (
		<div role="presentation" onClick={this.toggleDrawer(side, false)} onKeyDown={this.toggleDrawer(side, false)}>
			<List>
				<div>
					<div>
						<Link className="main-links" to="/feed">
							Feed
						</Link>
					</div>
					<div>
						<Link className="main-links" to="/profile">
							Profile
						</Link>
					</div>
					{/* <Link className="main-links" to="/UserLog">UserLog</Link> */}
				</div>
			</List>
		</div>
	);

	render() {
		return (
			<div>
				<MenuIcon onClick={this.toggleDrawer('left', true)} />
				<Router>
					<Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
						{this.sideList('left')}
					</Drawer>
					<Route path="/feed" exact render={() => <Feed feed={this.state.feed} />} />
					<Route path="/profile" exact render={() => <Profile />} />
				</Router>
				{/* <Route path="/UserLog" exact render={() => (<UserLog />)}/> */}
			</div>
		);
	}
}

export default App;
