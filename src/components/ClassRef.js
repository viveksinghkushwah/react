import React, { Component } from 'react'

 class ClassRef extends Component {
  constructor(props) {
    super(props)
  
    this.componentref=React.createRef()
  }
  reffocus() {
    this.componentref.current.focus()

  }

    render() {
    return (
      <div>
        <input type="text" ref={this.componentref}/>

      </div>
    )
  }
}

export default ClassRef