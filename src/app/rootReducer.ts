import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { IRootCounterModel } from "../counter/model";
import counterRoot from "../counter/reducers/rootCounterReducer";

export type Store = {
    counterRoot: IRootCounterModel,
};

export default combineReducers<Store>({
    counterRoot,
    routing: routerReducer,
});
