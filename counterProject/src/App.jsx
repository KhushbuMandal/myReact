import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//var counter = 15;

// var [counter , setCounter] = useState(15);

// const addValue = () => {
//   // console.log("value added" , Math.random());
//   console.log ("Clicked" , counter);
//   counter = counter + 1;
//   setCounter(counter);
// }

function App() {

  var [counter , setCounter] = useState(15);

  const addValue = () => {
    // console.log("value added" , Math.random());
    console.log ("Clicked" , counter);
    counter = counter + 1;
    setCounter(counter);
  }

  const removeValue = () => {
    setCounter (counter-1);
  }
  
  
  return (
    <>
      <h1>This is the Counter Project</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer : {counter}</p>

    </>
  )
}

export default App

// Thank you so much Hitesh sir
// Here is the takeaway from the video
/* 
1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9.In UI it is not necessary for every update to be applied immediately. */


