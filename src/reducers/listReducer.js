import { CONSTANTS } from "../actions";
import React from "react";
import uuid from "react-uuid";

const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Card number one ",
      },
      {
        id: 1,
        text: "card Number two ",
      },
    ],
  },
  {
    title: "second Episode",
    id: 1,
    cards: [
      {
        id: 0,
        text: "Card number one ",
      },
      {
        id: 1,
        text: "card Number two ",
      },
      {
        id: 2,
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
    case CONSTANTS.ADD_CARD:
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
    default:
      return state;
  }
};

export default listsReducer;
