import { IAuthState } from "./authModels";
import { IDrawerModel } from "./drawerModel";

export interface IRootState {
  auth: IAuthState;
  drawer: IDrawerModel;
}
