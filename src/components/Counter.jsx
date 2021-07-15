import React, { useContext } from "react";
import { AppContext } from "./logic/AppProvider";

const Counter = () => {
  const { state, dispatch } = useContext(AppContext);
  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const handleReset = () => {
    dispatch({
      type: "RESETCOUNTER",
    });
  };
  return (
    <div className="m-1 p-5 shadow">
      <h6 className="text-primary mb-5">Counter Value: {state.counter}</h6>
      <button onClick={handleIncrement} className="btn btn-primary btn-block">
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-primary btn-block">
        Decrement
      </button>
      <button onClick={handleReset} className="btn btn-primary btn-block">
        Reset
      </button>
    </div>
  );
};

export default Counter;
