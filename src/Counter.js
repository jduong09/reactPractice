import React from 'react';

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  const decrementCounter = () => {
    setCounter(counter - 1);
  }


  return (
    <div>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={decrementCounter}>Decrement Counter</button>
      <div>{counter}</div>
    </div>
  )
}

export default Counter;