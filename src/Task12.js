import React, { useState } from "react"; 
 
function App() { 
  const [message, setMessage] = useState(""); 
 
  function showDate() { 
    setMessage(new Date().toLocaleString()); 
  } 
 
  function showBye(){ 
    setMessage("Good Bye"); 
  }; 
 
  return ( 
    <div> 
      <h1>Event Handling</h1> 
 
      <button onClick={showDate}>Show Date and Time</button> 
 
      <button onClick={showBye}>Good Bye</button> 
 
      <h2>{message}</h2> 
    </div> 
  ); 
} 
 
export default App;