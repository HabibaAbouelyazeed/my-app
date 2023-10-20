import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
    
  const incCount = () => {
    setCount(count + 1);
  }

  const decCount = () =>{
    setCount(count - 1);
  }

  return (
    <div className="container py-5 text-center">
      <h2>Counter page</h2>
      <div className="w-50 mx-auto d-flex flex-column justify-content-center align-items-center">
        <div className="my-4 fs-2">{count}</div>
        <div className="d-flex gap-5">
          <button className="btn btn-dark" onClick={decCount}>-</button>
          <button className="btn btn-dark" onClick={incCount}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
