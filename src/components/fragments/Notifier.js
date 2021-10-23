import { mapDispatchToProp, mapStateToProp } from "./consts";
import "../styles/Notifier.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Notifier({ posts }) {
  const [toggle, setToggle] = useState("hide");

  useEffect(() => {
    setToggle("show");

    const interval = setInterval(() => {
      setToggle("hide");
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [posts]);

  const notification = posts.notifications[posts.notifications.length - 1];

  return <div className={"notifications-wrap " + toggle}>{notification}</div>;
}

export default connect(mapStateToProp)(Notifier);
