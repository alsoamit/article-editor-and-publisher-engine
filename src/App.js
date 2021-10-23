import { useState } from "react";
import "./styles/App.css";
import { Nav, Dashboard, NewPost, Posts, Drafts, Help } from "./components";
import Notifier from "./components/fragments/Notifier";

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
    <>
      <Notifier />
      <div className="App">
        <Nav setTab={setTab} />
        {components[tab]}
      </div>
    </>
  );
}
