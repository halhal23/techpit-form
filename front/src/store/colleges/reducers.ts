import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Colleges } from "../../domain/entity/college";
import collegsActions from "./actions";

const init: Colleges = {
  search: '',
  result: []
}

const collegesReducer = reducerWithInitialState(init)
  .case(collegsActions.setSearchWord, (state, payload) => ({
    ...state,
    search: payload
  }))
  .case(collegsActions.searchCollege.done, (state, payload) => ({
    ...state,
    result: payload.result
  }))

export default collegesReducer;