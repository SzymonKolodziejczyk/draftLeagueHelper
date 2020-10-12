import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IRootState } from "./IRootState";

export type IThunkDispatch<T extends Action = Action> = ThunkDispatch<
  IRootState,
  undefined,
  T
>;
