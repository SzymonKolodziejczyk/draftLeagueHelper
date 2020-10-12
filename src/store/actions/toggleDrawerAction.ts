import { IThunkResult } from "../models/IThunkResult";

const toggleDrawerAction = (): IThunkResult<void> => (dispatch) => {
  dispatch({ type: "TOGGLE_DRAWER" });
};

export default toggleDrawerAction;
