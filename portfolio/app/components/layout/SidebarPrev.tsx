"use client";

import { useContext, useRef } from "react";
import { ObserverContext } from "@/app/context/ObserverContext";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface SidebarProps {
  button: HTMLButtonElement;
  sidebar: HTMLDivElement | null;
  hamburger: SVGSVGElement | null;
}

export default function SidebarPrev() {
  const links = [
    { href: "/", text: "Home" },
    { href: "/", text: "My Work" },
    { href: "/aboutMe", text: "About" },
    { href: "/", text: "Contact" },
  ];
  const { navIsIntersecting, setClicked, location } =
    useContext(ObserverContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<SVGSVGElement>(null);

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) {
    const button = buttonRef.current;
    const sidebar = sidebarRef.current;
    const hamburger = hamburgerRef.current;
    if (!button) return;
    const currentState = button.getAttribute("data-state");
    if (!currentState || currentState === "closed") {
      openSidebar({ button, sidebar, hamburger });
    } else {
      closeSidebar({ button, sidebar, hamburger });
    }
    const clicked = (event.target as HTMLDivElement).innerText;
    setClicked(clicked);
  }
  const closeSidebar = ({ button, sidebar, hamburger }: SidebarProps) => {
    button.setAttribute("data-state", "closed");
    button.setAttribute("aria-expanded", "false");
    if (!sidebar || !hamburger) return;
    sidebar.classList.remove("active-sidebar");
    hamburger.classList.remove("active-burger");
  };
  function openSidebar({ button, sidebar, hamburger }: SidebarProps) {
    button.setAttribute("data-state", "opened");
    button.setAttribute("aria-expanded", "true");
    if (!sidebar || !hamburger) return;
    sidebar.classList.add("active-sidebar");
    hamburger.classList.add("active-burger");
  }

  const linkVariants: Variants = {
    hover: {
      x: 10,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        stiffness: 300,
      },
    },
  };

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
            <motion.div
              className="sidebar__link"
              key={index}
              onClick={handleClick}
              variants={linkVariants}
              whileHover="hover"
            >
              {/* Renders either an internal or external link depending on
              current location */}
              {(location.pathname === "/" &&
                (link.text === "Home" ||
                  link.text === "My Work" ||
                  link.text === "Contact")) ||
              (location.pathname === "/aboutMe" && link.text === "About") ? (
                <a href={link.href} onClick={(e) => e.preventDefault()}>
                  {link.text}
                </a>
              ) : (
                <Link href={link.href}>{link.text}</Link>
              )}
            </motion.div>
          ))}
        </nav>
      </aside>
    </>
  );
}
