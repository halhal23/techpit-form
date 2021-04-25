import { Profile } from "../../domain/entity/profile";
import { Colleges } from "./college";
import { ValidationState } from "./validation";

export type RootState = {
  profile: Profile;
  colleges: Colleges;
  validation: ValidationState;
}