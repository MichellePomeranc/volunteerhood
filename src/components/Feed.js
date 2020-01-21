import React, {Component} from 'react';
import Help from './Help'

class Feed extends Component {
    
    render() {
        let helpRequests = this.props.helpRequests
      return (
      <div>{helpRequests.map(h => <Help h={h}/>)}</div>
      )
    }
  }
  
  export default Feed;