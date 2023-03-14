import { CONSTANTS } from "./index";
import axios from "axios";
import { getAuth } from "firebase/auth";
import uuid from "react-uuid";

const baseURL = process.env.REACT_APP_BASE_URL;

export const addList = (title, board_id) => {
  return (dispatch) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      user.getIdToken().then((token) => {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const data = {
          title,
          board_id: board_id,
          cards: [],
        };
        axios
          .post(`${baseURL}/lists`, data, config)
          .then((res) => {
            dispatch({
              type: CONSTANTS.ADD_LIST,
              payload: { ...data, id: res.data.id },
            });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    } else {
      console.log("No user is signed in.");
    }
  };
};

export const getLists = () => {
  return (dispatch) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.log("No user is signed in.");
      return;
    }

    user.getIdToken().then((token) => {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .get(`${baseURL}/lists`, config)
        .then((r) => {
          dispatch({
            type: CONSTANTS.GET_LISTS,
            payload: r.data,
          });
        })
        .catch((e) => {
          console.log(e);
          dispatch({
            type: CONSTANTS.GET_LISTS,
            payload: [],
          });
        });
    });
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggebleId,
  type
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggebleId,
      type,
    },
  };
};
