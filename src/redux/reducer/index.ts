import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "../users/reducers/UserReducer";

export default combineReducers({
  data: UserReducer,
});
