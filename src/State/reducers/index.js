import { combineReducers } from "redux";
import Reducer from "./Reducer";
import menuReducer from "./MenuReducer";

const reducers = combineReducers({
  Reducer,
  menuReducer,
});

export default reducers;
