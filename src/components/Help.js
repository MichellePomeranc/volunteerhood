import React, {Component} from 'react';

class Help extends Component {
    render() {
      console.log(this.props.feed)
      let f=this.props.feed
      return (
      <div>
        <div>{f.description}</div>
        <div>{f.userReq}</div>
        <div>{f.skill}</div>
        <div>{f.date}</div>
      </div>
      )
    }
  }
  
  export default Help;