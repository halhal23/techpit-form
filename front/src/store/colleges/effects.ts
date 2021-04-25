import { Dispatch } from "redux";
import collegsActions from "./actions";

export const searchColleges = (name: string) => async (dispatch: Dispatch) => {
  const url = `http://localhost:18001/colleges?name=${name}`;
  console.log('start fetch');
  const result = await fetch(url).then(res => res.json());
  console.log(result);
  dispatch(collegsActions.searchCollege.done({ result: result.results.school, params: {} }));
}