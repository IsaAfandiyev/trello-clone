import {CONSTANTS, getLists} from "./index";
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

        axios.get(`${baseURL}/lists/${list_id}`, config).then((r) => {
          const data = r.data;

          // if data.cards is undefined, set it to an empty array
          if (!data.cards) {
            data.cards = [];
          }
          // Add card to list
          data.cards.push({
            id: uuid(),
            text,
          });

          axios
            .put(`${baseURL}/lists/${list_id}`, data, config)
            .then((_) => {
              dispatch({
                type: CONSTANTS.ADD_CARD,
                payload: data,
              });
              dispatch(getLists(data.board_id));
            })
            .catch((error) => {
              console.log(error);
              dispatch({
                type: CONSTANTS.ADD_CARD,
              });
            });
        });
      });
    } else {
      console.log("No user is signed in.");
    }
  };
};
