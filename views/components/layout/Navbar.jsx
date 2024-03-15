import React from "react";
import Sidebar from "./Sidebar";
import SocialIcons from "./SocialIcons";
import HeaderHome from "./HeaderHome";

export default function Navbar() {
  return (
    <header>
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
