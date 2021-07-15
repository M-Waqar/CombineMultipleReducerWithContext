const CounterReducer = (state, action) => {
  debugger;
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "RESETCOUNTER":
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default CounterReducer;
