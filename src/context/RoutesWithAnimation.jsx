import HomePage from "../pages/HomePage";
import ShowPage from "../pages/ShowPage";
import AboutPage from "../pages/AboutPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function RoutesWithAnimation() {
  const location = useLocation();
  // Framer motion variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<HomePage pageVariants={pageVariants} />} />
        <Route
          path="/aboutMe"
          element={<AboutPage pageVariants={pageVariants} />}
        />
        <Route
          path="/projects/:project"
          element={<ShowPage pageVariants={pageVariants} />}
        />
      </Routes>
    </AnimatePresence>
  );
}
