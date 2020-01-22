import React, { Component } from 'react';
import Help from './Help'
import { Router, Link } from 'react-router-dom';

class Feed extends Component {

  acceptReq = (id) => {
    this.props.acceptReq(id);
  }

  render(){
    
    // console.log(feed)
    if(this.props.login){
      let feed = this.props.feed
      return (
        <div>
<<<<<<< HEAD
          <h4>Hello {this.props.user.name}, who are you going to help today?</h4>
          <Link to="/newRequest"><button role="button" className="requestHelpBtn">Ask for Help</button></Link>
        </div>
        <table>
          {feed.map(f => <Help key={f.id} f={f} acceptReq={this.acceptReq} />)}
        </table>
      </div>

    )
=======
          <div>
            <h4>Hello {this.props.user.name}, who are you going to help today?</h4> 
           <Link to="/newRequest">Link</Link>
          </div>
          <table>
              {feed.map(f => <Help key={f.id} f={f} acceptReq={this.acceptReq} />)}
          </table>
        </div>
        
      )
    } else{
      return <h4>Please login first!</h4>
    }
>>>>>>> e205aca26cf3952cdf45407d4903f56d093e6c9e
  }
}

export default Feed;