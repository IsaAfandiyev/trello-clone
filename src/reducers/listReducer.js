import { CONSTANTS } from "../actions";
import uuid from "react-uuid";

const initialState = [
  {
    title: "Last Episode",
    id: uuid(),
    cards: [
      {
        id: uuid(),
        text: "Card number one ",
      },
      {
        id: uuid(),
        text: "card Number two ",
      },
    ],
  },
  {
    title: "second Episode",
    id: uuid(),
    cards: [
      {
        id: uuid(),
        text: "Card number one ",
      },
      {
        id: uuid(),
        text: "card Number two ",
      },
      {
        id: uuid(),
        text: "card Number three ",
      },
    ],
  },
];

const listsReducer = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      return [...state, action.payload];
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: uuid(),
      };
      const newState = state.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggebleId,
        type,
      } = action.payload;
      const newState = [...state];

      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find((list) => droppableIdStart === list.id);

        const card = listStart.cards.splice(droppableIndexStart, 1);

        const listEnd = state.find((list) => droppableIdEnd === list.id);

        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;
    case CONSTANTS.GET_LISTS:
      return [
        ...state,
        ...action.payload.map((el) => {
          return {
            title: el.title,
            cards: [],
            id: el.id ? el.id : uuid(),
          };
        }),
      ];
    default:
      return state;
  }
};

export default listsReducer;
