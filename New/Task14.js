import React, { useState } from "react"; 
 
function App() { 
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
 
  function register(e) { 
    e.preventDefault(); 
    alert("Registration Successful!"); 
  } 
 
  return ( 
    <div> 
      <h1>Student Registration</h1> 
 
      <form onSubmit={register}> 
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
        /> 
 
        <br /><br /> 
 
        <input 
          type="email" 
          placeholder="Enter Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        /> 
 
        <br /><br /> 
 
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password} 
onChange={e => setPassword(e.target.value)} 
required 
minLength={6} 
/> 
<br /><br /> 
<button type="submit">Register</button> 
</form> 
</div> 
); 
} 
export default App;