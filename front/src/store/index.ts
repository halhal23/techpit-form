import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { RootState } from "../domain/entity/rootState";
import collegesReducer from "./colleges/reducers";
import profileReducer from "./profile/reducers";
import validationReducer from "./validation/reducers";

const store = createStore(
  combineReducers<RootState>({
    profile: profileReducer,
    colleges: collegesReducer,
    validation: validationReducer
  }),
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;