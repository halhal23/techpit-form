import actionCreatorFactory from "typescript-fsa";
import { CollegeResult } from "../../domain/entity/college";

const actionCreator = actionCreatorFactory();

const collegsActions = {
  setSearchWord: actionCreator<string>("SET_SEARCH_WORD"),
  searchCollege: actionCreator.async<{}, CollegeResult[], {}>("SEARCH_COLLEGE")
}

export default collegsActions;