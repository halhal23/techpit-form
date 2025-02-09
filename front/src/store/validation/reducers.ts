import { reducerWithInitialState } from "typescript-fsa-reducers";
import { ValidationState } from "../../domain/entity/validation";
import validationActions from "./actions";

const init: ValidationState = {
  isStartValidation: false,
  message: {
    name: "",
    description: "",
    birthday: "",
    gender: "",
    address: {
      postalcode: "",
      prefecture: "",
      city: "",
      restAddress: ""
    },
    college: {
      faculty: ""
    },
    careers: []
  }
}

const validationReducer = reducerWithInitialState(init)
  .case(validationActions.setIsStartValidation, (state, payload) => ({
    ...state,
    isStartValidation: payload
  }))
  .case(validationActions.setValidation, (state, payload) => ({
    ...state,
    message: payload
  }))

export default validationReducer;