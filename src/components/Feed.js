import React, { Component } from 'react';
import Help from './Help'

class Feed extends Component {
  
    acceptReq=(id)=>{
      this.props.acceptReq(id);
    }
    
    render() {
      
       let feed=this.props.feed
       console.log(feed)
      return (
              <table id='feed'>
        <tbody>
          {feed.map(f => <Help key={f.id} f={f} acceptReq={this.acceptReq} />)}
        </tbody>
      </table>
      )
    }
  }

export default Feed;