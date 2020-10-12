import * as models from "../models/authModels";
import { IAction } from "../actions/interfaceAction";

const initialState = { isAuthUser: false, userId: 0, userName: "" };

export default function authReducer(
  state: models.IAuthState = initialState,
  action: IAction
): models.IAuthState {
  switch (action.type) {
    case "LOGOUT_ACTION":
      localStorage.clear();
      return initialState;
    case "LOGIN_ACTION":
      return {
        ...state,
        isAuthUser: true,
        userId: action.userId,
        userName: action.userName,
      };

    default:
      return state;
  }
}
