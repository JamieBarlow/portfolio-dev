import { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ObserverContext } from "@/app/context/ObserverContext";
import { Variants } from "framer-motion";

const links = [
  { href: "/", text: "Home" },
  { href: "/", text: "My Work" },
  { href: "/aboutMe", text: "About" },
  { href: "/", text: "Contact" },
];

const variants = {
  open: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkVariants: Variants = {
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

interface SidebarLinksProps {
  className: string;
}

export default function SidebarLinks({ className }: SidebarLinksProps) {
  const { setClicked, location, setSidebarOpen } = useContext(ObserverContext);
  // Sets state for handling smooth scroll
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const clicked = (e.target as HTMLDivElement).innerText;
    setClicked(clicked);
    setSidebarOpen(false);
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
    </motion.div>
  );
}
