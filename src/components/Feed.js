import React, { Component } from 'react';
import Help from './Help'

class Feed extends Component {

  acceptReq = (id) => {
    this.props.acceptReq(id);
  }

  render() {
    let feed = this.props.feed
    console.log(feed)
    return (
      <div>
        <div>
          <h4>Hello {this.props.user.name}, who are you going to help today?</h4>
        </div>
        <table>
            {feed.map(f => <Help key={f.id} f={f} acceptReq={this.acceptReq} />)}
        </table>
      </div>
    )
  }
}

export default Feed;