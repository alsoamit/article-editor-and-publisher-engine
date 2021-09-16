import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [tab, setTab] = useState(1);
  const components = ["Dashboard", "New Post", "Preview", "Uploaded", "Draft"];

  return (
    <div className="App">
      <Nav setTab={setTab} />
      {components[tab]}
    </div>
  );
}

export default App;
