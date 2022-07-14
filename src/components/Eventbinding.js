import React, { Component } from 'react'
 class Eventbinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'vivek'
      }
    }
    changestate(){
        this.setState({
            message:'singh'
        })
    }
  render() {
    return (
  <div> <h1>{this.state.message}</h1>
    <button onClick={this.changestate.bind(this)}>click me</button></div>
    )
  }
}

export default Eventbinding