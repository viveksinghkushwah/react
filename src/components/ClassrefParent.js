import React, { Component } from 'react'
import ClassRef from './ClassRef'

export class ClassrefParent  extends Component {
    constructor(props) {
      super(props)
    
      this.newRef=React.createRef()
    }
    childFocus=()=>{
        this.newRef.current.reffocus()
    }
  render() {
    return (
      <div>
        <ClassRef ref={this.newRef}/>
        <button onClick={this.childFocus}>click me</button>
      </div>
    )
  }
}

export default ClassrefParent