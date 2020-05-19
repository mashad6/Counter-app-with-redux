import { createStore } from "redux";
import Rootreducer from "./reducers/countreducer";
const initialState = {};
const store = createStore(Rootreducer);
export default store;
