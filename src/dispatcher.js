import { store } from "./stateMangement";

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