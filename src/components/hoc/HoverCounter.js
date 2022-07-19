import React, { Component } from 'react'
import UpdatedComponent from './hoc'
export class HoverCounter extends Component {
  render() {
    const {count,Returncount}=this.props
    return (
      <div>
        <h1 onMouseOver={Returncount}>this is hovered {count} times</h1>
      </div>
    )
  }
}

export default UpdatedComponent( HoverCounter)