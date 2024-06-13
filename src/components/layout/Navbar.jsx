import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import SocialIcons from "./SocialIcons";
import HeaderHome from "./HeaderHome";
import { ObserverContext } from "../../context/ObserverContext"

export default function Navbar() {
  const {isIntersecting} = useContext(ObserverContext);
  return (
    <header className={!isIntersecting && "sticking"}>
      <nav className="header__nav">
        <div className="header__topline">
          <HeaderHome />
          <Sidebar />
          <SocialIcons />
        </div>
      </nav>
    </header>
  );
}
