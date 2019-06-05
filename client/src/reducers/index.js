import {
  combinedReducers
} from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";

export default combinedReducers({
  auth: authReducer,
  errors: errorReducer
});