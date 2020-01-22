import React, { Component } from 'react';
import Help from './Help'

class Feed extends Component {

  render() {
    let feed = this.props.feed
    return (
      <table id='feed'>
        <tbody>
          {feed.map(f => <Help feed={f} />)}
        </tbody>
      </table>
    )
  }
}

export default Feed;