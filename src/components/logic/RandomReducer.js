const RandomReducer = (state, action) => {
  debugger;
  switch (action.type) {
    case "GENERATE":
      return { ...state, random: Math.random(5) * 100 };
    case "RESET":
      return { ...state, random: 0 };
    default:
      return state;
  }
};

export default RandomReducer;
