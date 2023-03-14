import { combineReducers } from "redux";
import listsReducer from "./listReducer";
import boardReducer from "./boardReducer";
export default combineReducers({
  lists: listsReducer,
  boards: boardReducer,
});
