import React, { Component } from 'react'
import Methodaspropschild from './methodaspropschild'
 class Methodsaspropsparent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:'shishupal'
      }
      this.greetparent=this.greetparent.bind(this)
    }
    greetparent(childName){
        alert(`hello ${this.state.parentname} from ${childName}`)
    }
  render() {
    return (
      <div><Methodaspropschild greethandler={this.greetparent}/></div>
    )   
  }
}

export default Methodsaspropsparent