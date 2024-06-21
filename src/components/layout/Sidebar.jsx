import React, { useContext, useRef, useEffect } from "react";
import { ObserverContext } from "../../context/ObserverContext";

export default function Sidebar() {
  const links = [
    { href: "/", text: "Home" },
    { href: "/#projectsAnchor", text: "Projects" },
    { href: "/aboutMe", text: "About" },
    { href: "/#contactMe", text: "Contact" },
  ];

  const { navIsIntersecting } = useContext(ObserverContext);
  const buttonRef = useRef(null);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  function handleClick() {
    const button = buttonRef.current;
    const sidebar = sidebarRef.current;
    const hamburger = hamburgerRef.current;
    const currentState = button.getAttribute("data-state");
    if (!currentState || currentState === "closed") {
      openSidebar(button, sidebar, hamburger);
    } else {
      closeSidebar(button, sidebar, hamburger);
    }
  }
  function closeSidebar(button, sidebar, hamburger) {
    button.setAttribute("data-state", "closed");
    button.setAttribute("aria-expanded", "false");
    sidebar.classList.remove("active-sidebar");
    hamburger.classList.remove("active-burger");
  }
  function openSidebar(button, sidebar, hamburger) {
    button.setAttribute("data-state", "opened");
    button.setAttribute("aria-expanded", "true");
    sidebar.classList.add("active-sidebar");
    hamburger.classList.add("active-burger");
  }

  return (
    <>
      <button
        className={`menu-button py-0 ${!navIsIntersecting && "whiteOnBlack"}`}
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={handleClick}
        ref={buttonRef}
      >
        <svg
          className={`hamburger ${!navIsIntersecting && "whiteOnBlack"}`}
          viewBox="0 0 100 100"
          width="40"
          ref={hamburgerRef}
        >
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
      <aside className="sidebar" ref={sidebarRef}>
        <nav>
          {links.map((link, index) => (
            <div className="sidebar__link" key={index} onClick={handleClick}>
              <a href={link.href}>{link.text}</a>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
