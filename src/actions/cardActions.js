import { CONSTANTS } from "./index";

export const addCard = (listId, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listId },
  };
};
