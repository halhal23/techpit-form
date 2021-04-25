import actionCreatorFactory from "typescript-fsa";
import { Profile } from "../../domain/entity/profile";

const actionCreator = actionCreatorFactory();

const profileActinos = {
  setProfile: actionCreator<Partial<Profile>>("SET_PROFILE")
}

export default profileActinos;
