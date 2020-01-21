import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Feed from './components/Feed'
import Help from './components/Help'
import UserLog from './components/Login-Signup'
import Menu from './components/Menu'
import Profile from './components/Profile'

class App extends Component {
  constructor() {
    super()
    this.state = {
      helpRequests: ['helphelp',' help',' asd']
    }
  }

  // async componentDidMount() {
  //   const response = await this.getFeed()
  //   this.setState({ Feed: response.data })
  // }

  // async getFeed() {
  //   return axios.get('http://localhost:8080/feed')
  // }

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
      <Router>
        <div>
          <Link className="main-links" to="/Feed">Feed</Link>
          <Link className="main-links" to="/Profile">Profile</Link>
          <Link className="main-links" to="/UserLog">UserLog</Link>
        </div>
            
        <Route path="/Feed" exact render={() => (<Feed helpRequests={this.state.helpRequests}/>)}/>
        <Route path="/Profile" exact render={() => (<Profile />)}/>
        <Route path="/UserLog" exact render={() => (<UserLog />)}/>
  </Router>
  )
}
}

export default App;
