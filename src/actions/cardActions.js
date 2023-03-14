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

        axios
          .post(
            `${baseURL}/cards`,
            {
              text,
              id: uuid(),
              list_id: list_id,
            },
            config
          )
          .then((payload) => {
            dispatch({
              type: CONSTANTS.ADD_CARD,
              payload,
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
