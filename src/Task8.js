import React from 'react';
function App(){
    const curDate= new Date();
    return(
        <div>
            <h1> Current Date & Time </h1>
            <p> {curDate.toLocaleString()}</p>
        </div> 
    );
}
export default App;