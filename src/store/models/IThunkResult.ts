import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { IRootState } from "./IRootState";

export type IThunkResult<Result, T extends Action = Action> = ThunkAction<
  Result,
  IRootState,
  undefined,
  Action
>;