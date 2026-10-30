import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Component 1: Counter</h2>
      
      <div className="counter-display">
        Current count: <span className="count-number">{count}</span>
      </div>
      
      <div className="button-group">
        <button className="btn-primary" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="btn-secondary" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className="btn-danger" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;