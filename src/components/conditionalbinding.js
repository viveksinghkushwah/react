import React, { Component } from 'react'

export class Conditionalbinding extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoggedin:false
  }
}
    render() {
        if(this.state.isLoggedin){
            return<div>Welcome vivek</div>
        }else{
            return<div>welcome Guest</div>      
        }
    // return (<div>
    //   <div>Welcome user</div>
    //   <div>welcome Guest</div>
    //   </div>)
  }
}

export default Conditionalbinding