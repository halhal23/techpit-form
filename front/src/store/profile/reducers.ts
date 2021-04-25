import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Profile } from "../../domain/entity/profile";
import profileActinos from "./actions";

const init: Profile = {
  name: '',
  description: '',
  birthday: '',
  gender: ''
}

const profileReducer = reducerWithInitialState(init).case(
  profileActinos.setProfile,
  (state, payload) => ({
    ...state,
    ...payload
  }) 
)

export default profileReducer;