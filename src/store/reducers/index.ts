import { combineReducers } from "redux";
import authReducer from "./authReducer";
import drawerReducer from "./drawerReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  drawer: drawerReducer,
});

export default rootReducer;
