import styles from "./Sidebar.module.css";
import SidebarLinks from "./SidebarLinks";
import SidebarToggle from "./SidebarToggle";
import { useContext } from "react";
import { ObserverContext } from "../../context/ObserverContext";
import { motion } from "framer-motion";

const variants = {
  closed: {
    clipPath: "circle(30px at 365px 32px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    clipPath: "circle(1200px at 365px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
};

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useContext(ObserverContext);

  return (
    <motion.div
      className={styles.sidebar}
      animate={sidebarOpen ? "open" : "closed"}
    >
      <motion.div className={styles.bg} variants={variants}>
        <SidebarLinks className={styles.links} />
      </motion.div>
      <SidebarToggle setSidebarOpen={setSidebarOpen} />
    </motion.div>
  );
}
