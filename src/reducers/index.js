import { combineReducers } from "redux";
import listsReducer from "./listReducer";
export default combineReducers({
  lists: listsReducer,
});
