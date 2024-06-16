import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import SocialIcons from "./SocialIcons";
import HeaderHome from "./HeaderHome";
import { ObserverContext } from "../../context/ObserverContext";

export default function Navbar() {
  const { navIsIntersecting } = useContext(ObserverContext);
  return (
    <header className={!navIsIntersecting ? "sticking" : ""}>
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
