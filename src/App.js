import './App.css';
import React ,{ Component } from 'react';
import Functionalcomp from './components/Functionalcomp'
import Classcomp from './components/Classcomp'
import PropsFunc from './components/props';
import PropsClass from './components/Propsclass';
import StateMessage from './components/state';
import Count from './components/counter';
import Methodsaspropsparent from './components/methodsaspropsparent';
import Eventbinding from './components/Eventbinding';
import Conditionalbinding from './components/conditionalbinding';
import Listrendering from './components/listrendering';
import Form from './components/Form';
import Refs from './components/Refs';
import ClassrefParent from './components/ClassrefParent';
import ForwardRefParent from './components/ForwardRefParent';

class App extends Component {
  render(){
  return (
    <div className="App">
      
      {/* <Functionalcomp/> */}
      {/* <Classcomp/> */}
     {/* <PropsFunc name="vivek"/> */}
     {/* <PropsClass name="vivek">this is the child class of Propsclass</PropsClass> */}
     {/* <StateMessage/> */}
     {/* <Count/> */}
     {/* <Methodsaspropsparent/> */}
     {/* <Eventbinding/> */}
     {/* <Conditionalbinding/> */}
     {/* <Listrendering/> */}
     {/* <Form/> */}
     {/* <Refs/> */}
     {/* <ClassrefParent/> */}
     <ForwardRefParent/>
    </div>
  );
} 
}
export default App;
