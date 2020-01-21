import React, {Component} from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name:"mimi",
      Email:"anything",
      Ranking:8,
      Skills:"everything",
      
    };
  }
    render() {
      return (
    <div>
      <div>name: {this.state.name}</div>
      <div>Email: {this.state.Email}</div>
      <div>Ranking: {this.state.Ranking} from 10</div>
      <div>Skills: {this.state.Skills}</div>



    </div>
      


      )
    }
  }
  
  export default Profile;