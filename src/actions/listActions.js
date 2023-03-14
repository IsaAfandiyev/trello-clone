import { CONSTANTS } from "./index";
import axios from "axios";
import { getAuth } from "firebase/auth";

const baseURL = process.env.REACT_APP_BASE_URL;

const postListReq = async (title) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const token = await user.getIdToken();

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios.post(
      `${baseURL}/lists`,
      {
        title,
      },
      config
    );
  } else {
    console.log("No user is signed in.");
  }
};

export const addList = (title) => {
  const res = postListReq(title);
  return {
    type: CONSTANTS.ADD_LIST,
    res,
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
