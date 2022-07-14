
import React, { Component } from 'react'


class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       Comment:''
    }
  }
  handelusernamechange=(event)=>{
    this.setState({
      username:event.target.value
    })
  }
  handlecomment=(event)=>{
    this.setState({
      Comment:event.target.value
    
    })
  }
  formsunmit=(event)=>{
    alert(`${this.state.username}`)
    event.preventDefault(   )
  }
  render() {
    return (
      <form onSubmit={this.formsunmit}>    
      <div>
        <label>username</label>
        <input type="text" value={this.state.username} onChange={this.handelusernamechange}/>
      </div>
      <div>
        <lable>comment</lable>
        <textarea value={this.state.Comment} onChange={this.handlecomment}></textarea>
      </div>
      <button>submit</button>
      </form>
 
    )
  }
}

export default Form