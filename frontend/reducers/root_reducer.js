import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import benchesReducer from './bench_reducer';
const rootReducer = combineReducers({
  session: sessionReducer,
  benches: benchesReducer
});

export default rootReducer;
