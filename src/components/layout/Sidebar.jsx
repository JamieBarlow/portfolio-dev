import React from "react";

export default function Sidebar() {
  return (
    <>
      <button
        className="menu-button py-0"
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <svg className="hamburger" viewBox="0 0 100 100" width="40">
          <rect
            className="line top"
            width="80"
            height="10"
            x="10"
            y="25"
            rx="5"
          ></rect>
          <rect
            className="line middle"
            width="60"
            height="10"
            x="10"
            y="45"
            rx="5"
          ></rect>
          <rect
            className="line bottom"
            width="80"
            height="10"
            x="10"
            y="65"
            rx="5"
          ></rect>
        </svg>
      </button>
      <aside className="sidebar">
        <nav>
          <div className="sidebar__link">
            <a href="/">Home</a>
          </div>
          <div className="sidebar__link">
            <a href="/#projectsAnchor">Projects</a>
          </div>
          <div className="sidebar__link">
            <a href="/aboutMe">About</a>
          </div>
          <div className="sidebar__link">
            <a href="/#contactMe">Contact</a>
          </div>
        </nav>
      </aside>
    </>
  );
}
