import { createStore } from "redux";
import { CarSearchReducer } from "./searchData/searchReducers";

const store = createStore(CarSearchReducer);
export default store;
