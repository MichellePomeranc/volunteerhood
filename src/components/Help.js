import React, {Component} from 'react';

class Help extends Component {
    render() {
      console.log(this.props.feed)
      let f=this.props.feed
      return (
      <tr>
        <div><span className="user">User: </span>{f.userReq}</div>     
        <div><span className="skill">Skill: </span><span>{f.skill}</span></div>
        <div><span className="description">Description: </span>{f.description}</div>
        <div className="date">{f.date}</div>
      </tr>
      )
    }
  }
  
  export default Help;