import React, {Component} from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      // name:"this.props",
      // Email:"anything",
      // Ranking:8,
      // Skills:"everything",
      
    };
  }
    render() {
      return (
    <div>
      <div>name: {this.props.user.name}</div>
      <div>Email: {this.props.user.email}</div>
      <div>Ranking: {this.props.user.ranking}</div>
      {/* <div>Skills: {this.props.user.name}</div> */}
    </div>
      


      )
    }
  }
  
  export default Profile;