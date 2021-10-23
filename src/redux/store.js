import { createStore, combineReducers } from "redux";

import { postReducer, draftReducer, notificationReducer } from "./reducers";
// Create and export the Store

const rootReducer = combineReducers({
  published: postReducer,
  drafts: draftReducer,
  notifications: notificationReducer,
});

export const store = createStore(rootReducer);
