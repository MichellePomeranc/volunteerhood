import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Feed from './Feed';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class UserLog extends Component {
  constructor(){
  super()
  this.state={
    name: "",
    email:"",
    password: "",
    phone: ""
  }
}

update = (e)=>{
const name = e.target.name;
this.setState({
  [name]: e.target.value
})
}

postNewUser =()=>{
  let newUser = {...this.state}
  this.props.addNewUser(newUser)
}

login=()=>{
  let newUser = {...this.state}
  console.log(newUser);
  
  this.props.login(newUser.email, newUser.password)
}

    render() {
      if(this.props.user.login){
      return (

        <Redirect exact to="/feed"  />
      )
        } else {
        return(
          <div>
        
        <h3>sign up</h3>
        <div> Name: <input name='name' type="text" placeholder="Name" onChange={this.update}></input></div>
        <div> Email: <input name='email' type="email" placeholder="email" onChange={this.update}></input></div>
        <div> Password: <input name='password' type="password" placeholder="password" onChange={this.update}></input></div>
        <div> Phone: <input name='phone' type="text" placeholder="phone" onChange={this.update}></input></div>
        <button onClick={this.postNewUser}>send</button>
        
          <h3>log in</h3>
        <div> Email: <input name='email' type="email" placeholder="email" onChange={this.update}></input></div>
        <div> Password: <input name='password' type="password" placeholder="password" onChange={this.update}></input></div>
        <button onClick={this.login}>send</button>
      </div>
      )
    }
    }
  }
  
  export default UserLog;