import * as models from "../models/IRootState";
import { createSelector } from "reselect";
import { IAuthState } from "../models/authModels";

const authSelector = (state: models.IRootState) => state.auth;
const userSelector = (state: models.IRootState) => state.auth;
const loggedUserIdSelector = (state: models.IRootState) => state.auth;

export const authUserSelector = createSelector(
  authSelector,
  (state: IAuthState) => state.isAuthUser
);

export const userNameSelector = createSelector(
  userSelector,
  (state: IAuthState) => state.userName
);

export const userIdSelector = createSelector(
  loggedUserIdSelector,
  (state: IAuthState) => state.userId
);
