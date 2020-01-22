import React, {Component} from 'react';

class Help extends Component {

  acceptReq =()=> {
    // console.log(this.props.f);
    this.props.acceptReq(this.props.f.id)
    
  } 
    render() {
      // console.log(this.props.f)
      let f=this.props.f
      return (
      <tr>
        <div><span className="user">User: </span>{f.userReq}</div>     
        <div><span className="skill">Skill: </span><span>{f.skill}</span></div>
        <div><span className="description">Description: </span>{f.description}</div>
        <div className="date">{f.date}</div>
        <div><button onClick={this.acceptReq()}>accept</button></div>
      </tr>
      )
    }
  }
  
  export default Help;