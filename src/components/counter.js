import React, { Component } from 'react'

 class Count extends Component {
    constructor() {
        super()
      
        this.state = {
           count:0
        }
      }
      
    incrementfunction() {
        this.setState({
            count:this.state.count+1
        })
        }
    resetcounter(){
      this.setState({count:0})
    }
    render() {
    return (
      <div>
        <h1>count :{this.state.count}</h1>
        <button onClick={()=>this.incrementfunction()}>Incremenet</button>
        <button onClick={()=>{this.resetcounter()}}>Reset counter</button>
      </div>
    )
  }
}

export default Count