import * as models from "../models/IRootState";
import { createSelector } from "reselect";
import { IDrawerModel } from "../models/drawerModel";

const drawerIsOpenedSelectorModel = (state: models.IRootState) => state.drawer;

export const drawerIsOpenedSelector = createSelector(
  drawerIsOpenedSelectorModel,
  (state: IDrawerModel) => state.isOpened
);
