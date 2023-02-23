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
      {
        id: 2,
        text: "card Number three ",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
