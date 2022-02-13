import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div data-test="component-app">
      <h1 data-test="component-counter-display">{counter}</h1>
      <button onClick={handleClick} data-test="component-increment">
        increment
      </button>
    </div>
  );
}

export default App;
