import CounterReducer from "./CounterReducer";
import CountReducer from "./CountReducer";
import RandomReducer from "./RandomReducer";
import { combineReducers } from "./Reducer";

const AppReducer = combineReducers({
  counter: CounterReducer,
  count: CountReducer,
  random: RandomReducer,
});

export default AppReducer;
