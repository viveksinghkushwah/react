import React, { Component } from 'react'
import Forwardref from './Forwardref'

export class ForwardRefParent extends Component {
  constructor(props) {
    super(props)
  
    this.inputref=React.createRef()
  }
  clickhandler=()=>{
    this.inputref.current.focus()
  }
    render() {
    return (
      <div>
        <Forwardref ref={this.inputref}/>
        <button onClick={this.clickhandler}>click me</button>
      </div>
    )
  }
}

export default ForwardRefParent