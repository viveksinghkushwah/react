import './App.css';
import React ,{ Component } from 'react';
import Functionalcomp from './components/Functionalcomp'
import Classcomp from './components/Classcomp'
class App extends Component {
  render(){
  return (
    <div className="App">
      <Functionalcomp/>
      <Classcomp/>
    </div>
  );
} 
}
export default App;
 