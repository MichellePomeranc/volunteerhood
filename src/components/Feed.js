import React, {Component} from 'react';
import Help from './Help'

class Feed extends Component {
    acceptReq=(id)=>{
      this.props.acceptReq(id);
    }
    render() {
       let feed=this.props.feed
      return (
      <div>{feed.map(f => <Help key={f.id} f={f} acceptReq={this.acceptReq}/>)}</div>
      )
    }
  }
  
  export default Feed;