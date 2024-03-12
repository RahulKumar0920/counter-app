import React, { useState } from "react";

function App() {
  const [count, counter] = useState(0);

  function decrease() {
    counter(count - 1);
  }

  function increase() {
    counter(count + 1);
  }

  function reset() {
    counter(0);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
