import { dispatcher } from "../../redux/dispatcher";

export const mapStateToProp = (state) => {
  return {
    posts: state,
  };
};

export const mapDispatchToProp = () => {
  return {
    dispatcher,
  };
};

export const tabs = [
  {
    id: 0,
    name: "Dashboard",
  },
  {
    id: 1,
    name: "New Post",
  },
  {
    id: 2,
    name: "Uploaded",
  },
  {
    id: 3,
    name: "Drafts",
  },
  {
    id: 4,
    name: "Help",
  },
];
