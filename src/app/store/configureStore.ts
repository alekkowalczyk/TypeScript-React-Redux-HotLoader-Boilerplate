import {
  createStore,
  applyMiddleware,
} from "redux";
import { browserHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import { Store } from "../rootReducer";
import rootReducer from "../rootReducer";


const configureStore = (initialState: Store) => {
  const store = createStore(
                    rootReducer,
                    initialState,
                    applyMiddleware(routerMiddleware(browserHistory)));
  (<any>window).store = store;
  return store;
};

export default configureStore;
