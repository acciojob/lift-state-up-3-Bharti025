
import React,{useState} from "react";
import './../styles/App.css';
import ChildComponent1 from './ChildComponent1.js';
import ChildComponent2 from "./ChildComponent2.js";
const App = () => {

  const [selectedOption,setselectedOption]=useState(0);
  const handleClick=(index)=>{
    setselectedOption(index);
    console.log(index);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent1 handleClick={handleClick}/>
      <ChildComponent2 handleClick={handleClick}/>
      Selected Option : {selectedOption> 0 && <span>Option {selectedOption}</span>}
    </div>
  )
}

export default App
