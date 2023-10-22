import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from '../../redux/slices/counterSlice'


const Counter = () => {
  const counter = useSelector((state) => state.counter.counter)
  const dispatch = useDispatch();
  
  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () =>{
    dispatch(decrement());
  }


  return (
    <div className="container py-5 text-center">
      <h2>Counter page</h2>
      <div className="w-50 mx-auto d-flex flex-column justify-content-center align-items-center">
        <div className="my-4 fs-2">Dontaions: $<span className="fw-bold">{counter}</span></div>
        <div className="d-flex gap-5">
          <button className="btn btn-dark" onClick={handleDecrement}>-</button>
          <button className="btn btn-dark" onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
