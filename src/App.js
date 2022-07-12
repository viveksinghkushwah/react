import './App.css';
import React ,{ Component } from 'react';
import Functionalcomp from './components/Functionalcomp'
import Classcomp from './components/Classcomp'
import PropsFunc from './components/props';
import PropsClass from './components/Propsclass';
import StateMessage from './components/state';
import Count from './components/counter';
class App extends Component {
  render(){
  return (
    <div className="App">
      
      <Functionalcomp/>
      <Classcomp/>
     <PropsFunc name="vivek"/>
     <PropsClass name="vivek">this is the child class of Propsclass</PropsClass>
     <StateMessage/>
     <Count/>
    </div>
  );
} 
}
export default App;
