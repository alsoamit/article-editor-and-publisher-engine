import { store } from "./postStore";

// The action dispatcher
export const dispatcher = (type, id) => {
    // console.log("dispatcher", type, id);
    store.dispatch({
        type,
        payload: {
            id,
        },
    });
};