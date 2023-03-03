import { CONSTANTS } from "../actions";
import React from "react";
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

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: uuid(),
      };
      return [...state, newList];
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
      } = action.payload;
      const newState = [...state];
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;
    default:
      return state;
  }
};

export default listsReducer;
