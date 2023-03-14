import { CONSTANTS } from "./index";
import axios from "axios";
import { getAuth } from "firebase/auth";
import uuid from "react-uuid";

const baseURL = process.env.REACT_APP_BASE_URL;

export const getBoards = () => {
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
        .get(`${baseURL}/boards`, config)
        .then((r) => {
          dispatch({
            type: CONSTANTS.GET_BOARDS,
            payload: r.data,
          });
        })
        .catch((e) => {
          console.log(e);
          dispatch({
            type: CONSTANTS.GET_BOARDS,
            payload: [],
          });
        });
    });
  };
};

export const createBoard = (title) => {
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

      const data = {
        title,
      };

      axios
        .post(`${baseURL}/boards`, data, config)
        .then((r) => {
          dispatch({
            type: CONSTANTS.ADD_BOARD,
            payload: { ...data, id: r.data.id },
          });
          dispatch(getBoards());
        })
        .catch((e) => {
          console.log(e);
        });
    });
  };
}