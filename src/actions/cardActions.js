import { CONSTANTS } from "./index";
import { getAuth } from "firebase/auth";
import axios from "axios";
import uuid from "react-uuid";

const baseURL = process.env.REACT_APP_BASE_URL;

export const addCard = (text, list_id) => {
  return (dispatch) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      user.getIdToken().then((token) => {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };


        const data = {
          text,
          id: uuid(),
          list_id: list_id,
        }
        axios
          .post(
            `${baseURL}/cards`,
            data,
            config
          )
          .then((_) => {
            dispatch({
              type: CONSTANTS.ADD_CARD,
              payload: data,
            });
          })
          .catch((error) => {
            console.log(error);
            dispatch({
              type: CONSTANTS.ADD_CARD,
            });
          });
      });
    } else {
      console.log("No user is signed in.");
    }
  };
};

export const getCards = () => {
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
        .get(`${baseURL}/cards`, config)
        .then((r) => {
          dispatch({
            type: CONSTANTS.GET_CARDS,
            payload: r.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
}