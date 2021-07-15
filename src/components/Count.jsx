import React, { useContext } from "react";
import { AppContext } from "./logic/AppProvider";

const Count = () => {
  const { state, dispatch } = useContext(AppContext);
  const handleCountInc = () => {
    dispatch({
      type: "COUNTINC",
    });
  };
  const handleCountDec = () => {
    dispatch({
      type: "COUNTDEC",
    });
  };
  const handleReset = () => {
    dispatch({
      type: "RESETCOUNT",
    });
  };
  return (
    <div className="m-1 p-5 shadow">
      <h6 className="text-primary mb-5">Count Value: {state.count}</h6>
      <button onClick={handleCountInc} className="btn btn-primary btn-block">
        Count + 10
      </button>
      <button onClick={handleCountDec} className="btn btn-primary btn-block">
        Count - 10
      </button>
      <button onClick={handleReset} className="btn btn-primary btn-block">
        Reset
      </button>
    </div>
  );
};

export default Count;
