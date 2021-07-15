const CountReducer = (state, action) => {
  debugger;
  switch (action.type) {
    case "COUNTINC":
      return { ...state, count: state.count + 10 };
    case "COUNTDEC":
      return { ...state, count: state.count - 10 };
    case "RESETCOUNT":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default CountReducer;
