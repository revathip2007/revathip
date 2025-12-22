import React from 'react'

const UseState = () => {
    const [count,setcount]=UseState (0);
  return (
    <div>
        <h1>{value}</h1>
        <input type="text" onChange={(e)=>setValue(e.target)}>
        <h1> {count}</h1>
        <button onClick={handleDecrement}>Decrement </button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>Increment</button> 
    </div>  
  );
}

export default UseState