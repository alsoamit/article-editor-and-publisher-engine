import { useState } from "react";
import "./App.css";
import { Nav, Dashboard, NewPost, Posts, Drafts } from "./components";

export default function App() {
  const [tab, setTab] = useState(1);
  const components = [
    <Dashboard />,
    <NewPost />,
    <Posts />,
    <Drafts />,
    "Draft",
  ];

  return (
    <div className="App">
      <Nav setTab={setTab} />
      {components[tab]}
    </div>
  );
}
