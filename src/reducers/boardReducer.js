import { CONSTANTS } from "../actions";

const boardReducer = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.GET_BOARDS:
      return action.payload;
    case CONSTANTS.ADD_BOARD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default boardReducer;
