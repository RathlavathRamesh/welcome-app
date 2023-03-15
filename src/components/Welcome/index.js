// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {subscribed: false}

  subscribe = () => {
    this.setState(prev => ({subscribed: true}))
  }

  subscribed = () => {
    this.setState(prev => ({subscribed: false}))
  }

  render() {
    const {subscribed} = this.state

    let butt
    if (!subscribed) {
      butt = (
        <div className="butcont">
          <button className="but" type="button" onClick={this.subscribe}>
            Subscribe
          </button>
        </div>
      )
    } else {
      butt = (
        <div className="butcont">
          <button className="but" type="button" onClick={this.subscribed}>
            Subscribed
          </button>
        </div>
      )
    }
    return (
      <div className="card-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank You! Happy Learning</p>
        {butt}
      </div>
    )
  }
}

export default Welcome
