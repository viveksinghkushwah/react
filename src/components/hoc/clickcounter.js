import React, { Component } from 'react'
import Updatedcomponent from './hoc'
import UpdatedComponent from './hoc'
export class Clickcounter extends Component {
  render() {
    
            const {count,Returncount}=this.props
    return (
      <div>
        <button onClick={Returncount}>clicked {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent( Clickcounter)