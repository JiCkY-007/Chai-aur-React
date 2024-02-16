import { useState } from 'react'

import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5)

  // let counter = 5;
  const addValue = ()=>{
    
    counter= counter + 1 // problem aari hai ui updation m 
    console.log("clicked"+ counter);
  setCounter(counter)
 
};
const removeValue = ()=>{
  if (counter >0 ) {
    counter= counter - 1
    setCounter(counter) 
  }else if (counter <= 0 ) {
    counter = 0;
    setCounter(counter);
    
     
    
  } else {
    
 pass
  }
  
} 

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>counter Value : {counter}</h2>

      <button onClick={addValue}>Add value</button>

     
      <br />
      <button onClick={removeValue} >Remove value </button>
    </>
  )
}

export default App
