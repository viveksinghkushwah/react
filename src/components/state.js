import React,{Component} from "react";
import './state.css'
class StateMessage extends Component{
    constructor(){
        super()
        this.state={
            message:'click the button below to change my state'
             }
    }
    changemessage(){
    this.setState({message:'you have clicked the button therefore the state is changed'})    
    }
    render(){
        return(  <div className="statediv">
            <h1>{this.state.message}</h1>
            <button onClick={()=>{this.changemessage()}}>click me to chnage the state</button>
        </div>
        )
    
 }}
 export default StateMessage