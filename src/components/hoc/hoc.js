import React from "react";

const UpdatedComponent = Oringionalcomponent => {
    class Newcompoment extends React.Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
        }}
        Returncount=()=>{
            this.setState(prevState=>{
                return { count:prevState.count+1}
            })
        }
        render(){
            return <Oringionalcomponent count={this.state.count} Returncount={this.Returncount}/>
        }
    }
    return Newcompoment
}
export default UpdatedComponent