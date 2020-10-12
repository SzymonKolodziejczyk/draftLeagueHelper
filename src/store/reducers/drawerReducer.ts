import { AnyAction } from "redux";
import { IDrawerModel } from "../../store/models/drawerModel";

const initialState = {
  isOpened: false,
};

const drawerReducer = (
  state: IDrawerModel = initialState,
  action: AnyAction
): IDrawerModel => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return { isOpened: !state.isOpened };
    case "SET_DRAWER":
      return { isOpened: action.open };
    default:
      return state;
  }
};

export default drawerReducer;
