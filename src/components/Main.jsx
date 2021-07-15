import React from "react";
import Count from "./Count";
import Counter from "./Counter";
import AppProvider from "./logic/AppProvider";
import Random from "./Random";

const Main = () => {
  return (
    <AppProvider>
      <div className="mt-5">
        <div className="row">
          <div className="col-4">
            <Counter />
          </div>
          <div className="col-4">
            <Count />
          </div>
          <div className="col-4">
            <Random />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default Main;
