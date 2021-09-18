import { useState } from "react";
import { tabs } from "./consts";
import "./styles/Nav.css";
export default function Nav({ setTab }) {
  const [active, setActive] = useState(1);
  const [hamb, setHamb] = useState(false);

  // Tab toggler
  const handleTabClick = (e, tab) => {
    setTab(tab.id);
    setActive(tab.id);
    console.log(e.target, e.target.classList);
  };

  const handleMenuClick = (e, tab) => {
    setTab(tab.id);
    setActive(tab.id);
    handleHambClick();
  };
  // Hamburger menu toggler
  const handleHambClick = () => {
    setHamb((hamb) => !hamb);
    // console.log(hamb);
  };

  // Nav Elements Builder
  const menuElements = tabs.map((tab) => {
    return (
      <li key={tab.id} id={tab.name} onClick={(e) => handleMenuClick(e, tab)}>
        {tab.name}
      </li>
    );
  });

  // menu elements
  const tabElements = tabs.map((tab) => {
    return (
      <li
        key={tab.id}
        id={tab.name}
        className={tab.id === active ? "active" : ""}
        onClick={(e) => handleTabClick(e, tab)}
      >
        {tab.name}
      </li>
    );
  });

  return (
    <header>
      <nav>
        <div className="active__menu">{tabs[active].name}</div>
        <ul className={hamb ? "menu__items" : "menu__items hide"}>
          {menuElements}
        </ul>
        <ul className="nav__items">{tabElements}</ul>
        <div className="hamb" onClick={handleHambClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
