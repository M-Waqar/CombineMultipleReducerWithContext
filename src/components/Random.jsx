import React, { useContext } from "react";
import { AppContext } from "./logic/AppProvider";

const Random = () => {
  const { state, dispatch } = useContext(AppContext);
  const handleRandom = () => {
    dispatch({
      type: "GENERATE",
    });
  };
  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div className="m-1 p-5 shadow">
      <h6 className="text-primary mb-5">Random Number: {state.random}</h6>
      <button onClick={handleRandom} className="btn btn-primary btn-block">
        Random
      </button>
      <button onClick={handleReset} className="btn btn-primary btn-block">
        Reset
      </button>
    </div>
  );
};

export default Random;
