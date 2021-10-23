const dataFromLS = JSON.parse(localStorage.getItem("state"));
// getting the data from localhost for posts and drafts only. Notifications are not stored.
const initialPostState = dataFromLS ? dataFromLS.published : [];
const initialDraftState = dataFromLS ? dataFromLS.drafts : [];

// reducer to handle notifications
const notificationReducer = (state = ["Welcome"], action) => {
  switch (action.type) {
    case "NOTIFICATION":
      if (state.length < 5) {
        return [...state, action.payload.notification];
      } else {
        const cpState = [...state];
        cpState.shift();
        return [...cpState, action.payload.notification];
      }
    default:
      return state;
  }
};

// reducer to handle posts
const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case "publish":
      return [...state, action.payload];
    case "deletePost":
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
};

// reducer to handle drafts
const draftReducer = (state = initialDraftState, action) => {
  switch (action.type) {
    case "draft":
      return [...state, action.payload];
    case "deleteDraft":
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
};

export { notificationReducer, postReducer, draftReducer };
