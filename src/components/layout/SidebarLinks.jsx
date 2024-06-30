import { useContext } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ObserverContext } from "../../context/ObserverContext";

const links = [
  { href: "/", text: "Home" },
  { href: "/", text: "Projects" },
  { href: "/aboutMe", text: "About" },
  { href: "/", text: "Contact" },
];

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
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

export default function SidebarLinks({ className }) {
  const { setClicked, location } = useContext(ObserverContext);
  // Sets state for handling smooth scroll
  function handleClick(event) {
    const clicked = event.target.innerText;
    setClicked(clicked);
  }
  return (
    <motion.div className={className} variants={variants}>
      {links.map((link, index) => (
        <motion.div
          className="sidebar__link"
          onClick={handleClick}
          key={index}
          variants={linkVariants}
          whileHover={{
            x: 10,
            transition: {
              type: "spring",
              mass: 0.4,
              damping: 8,
              stiffness: 300,
            },
          }}
          whileTap={{ scale: 0.95 }}
        >
          {(location.pathname === "/" &&
            (link.text === "Home" ||
              link.text === "Projects" ||
              link.text === "Contact")) ||
          (location.pathname === "/aboutMe" && link.text === "About") ? (
            <a href={link.href} onClick={(e) => e.preventDefault()}>
              {link.text}
            </a>
          ) : (
            <Link to={link.href}>{link.text}</Link>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
