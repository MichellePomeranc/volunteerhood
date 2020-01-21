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
      <div>
        <div>{f.description}</div>
        <div>{f.userReq}</div>
        <div>{f.skill}</div>
        <div>{f.date}</div>
        <div><button onClick={this.acceptReq()}>accept</button></div>
      </div>
      )
    }
  }
  
  export default Help;