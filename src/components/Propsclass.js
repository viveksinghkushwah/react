import React,{Component} from "react";
class PropsClass extends Component{
    render(){
        return <div> <h1>Greetings using props in class</h1> <h1>heyya {this.props.name}</h1><h2>{this.props.children}</h2></div>
    }
}
export default PropsClass