import React, { useState } from 'react'; 
function App() { 
  const [v, setV] = useState(''); 
  return (<> 
      <style>{` 
        .calc { width: 250px; 
         margin: 50px auto;  
        text-align: center; } 
        button { padding: 10px;  
        margin: 3px; } 
      `}</style> 
 
      <div className="calc"> 
        <h2>Calculator</h2> 
        <input value={v} readOnly /> 
        <br /> 
        <button onClick={() => setV(v + '7')}>7</button> 
        <button onClick={() => setV(v + '8')}>8</button> 
        <button onClick={() => setV(v + '9')}>9</button> 
        <button onClick={() => setV(v + '/')}>/</button> 
        <br /> 
 
        <button onClick={() => setV(v + '4')}>4</button> 
        <button onClick={() => setV(v + '5')}>5</button> 
        <button onClick={() => setV(v + '6')}>6</button> 
        <button onClick={() => setV(v + '*')}>*</button> 
        <br /> 
 
        <button onClick={() => setV(v + '1')}>1</button> 
        <button onClick={() => setV(v + '2')}>2</button> 
        <button onClick={() => setV(v + '3')}>3</button> 
        <button onClick={() => setV(v + '-')}>-</button> 
        <br /> 
        <button onClick={() => setV(v + '0')}>0</button> 
        <button onClick={() => setV(v + '+')}>+</button> 
        <button onClick={() => setV(String(eval(v)))}>=</button> 
        <button onClick={() => setV('')}>C</button> 
      </div> 
    </> 
  ); 
} 
 
export default App;