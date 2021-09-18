import { useState } from "react";
import "./styles/App.css";
import { Nav, Dashboard, NewPost, Posts, Drafts, Help } from "./components";

export default function App() {
  const [tab, setTab] = useState(1);
  const components = [
    <Dashboard />,
    <NewPost />,
    <Posts />,
    <Drafts />,
    <Help />,
  ];

  return (
    <div className="App">
      <Nav setTab={setTab} />
      {components[tab]}
    </div>
  );
}
