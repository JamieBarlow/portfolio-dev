import styles from "./Sidebar.module.css";
import SidebarLinks from "./SidebarLinks";
import SidebarToggle from "./SidebarToggle";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  closed: {
    clipPath: "circle(30px at 350px 32px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    clipPath: "circle(1200px at 350px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className={styles.sidebar} animate={open ? "open" : "closed"}>
      <motion.div className={styles.bg} variants={variants}>
        <SidebarLinks className={styles.links} />
      </motion.div>
      <SidebarToggle setOpen={setOpen} />
    </motion.div>
  );
}
