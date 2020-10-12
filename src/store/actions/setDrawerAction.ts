import { IThunkResult } from "../models/IThunkResult";

const setDrawerAction = (open: boolean): IThunkResult<void> => (dispatch: (arg0: { type: string; open: boolean; }) => void) => {
  dispatch({ type: "SET_DRAWER", open });
};

export default setDrawerAction;
