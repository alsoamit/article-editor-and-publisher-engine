import { useState } from "react";
import "./App.css";
import { Nav, NewPost } from "./components";

export default function App() {
  const [tab, setTab] = useState(1);
  const components = ["Dashboard", <NewPost />, "Preview", "Uploaded", "Draft"];

  return (
    <div className="App">
      <Nav setTab={setTab} />
      {components[tab]}
    </div>
  );
}
