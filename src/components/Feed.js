import React, {Component} from 'react';
import Help from './Help'

class Feed extends Component {
    
    render() {
       let feed=this.props.feed
      return (
      <div>{feed.map(f => <Help feed={f} />)}</div>
      )
    }
  }
  
  export default Feed;