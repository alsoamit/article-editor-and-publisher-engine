import { store } from ".";

// actions
export const notify = (str) => {
  // console.log("notify", str);
  store.dispatch({
    type: "NOTIFICATION",
    payload: {
      notification: str,
    },
  });
};
