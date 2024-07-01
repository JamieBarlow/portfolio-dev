import React, { createContext, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "framer-motion";

export const ObserverContext = createContext();

export default function ObserverProvider({ children }) {
  // Sidebar open or closed
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();
  // Handle smooth scrolling
  const projectsSectionRef = useRef(null);
  const contactMeRef = useRef(null);

  const [clicked, setClicked] = useState("Home");
  const smoothScrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Intersection Observer for navbar style changes on scroll (styles updated in HeaderHome.jsx)
  const [navIsIntersecting, setNavIsIntersecting] = useState();

  const setupNavbarIntersection = (ref) => {
    const isInView = useInView(ref, {
      amount: 1,
    });
    useEffect(() => {
      !setNavIsIntersecting(isInView);
    }, [isInView]);
  };

  // For slide-in animations
  const stagger = {
    hidden: {
      transition: {
        staggerChildren: 0.3,
        staggerDirection: -1,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const popInVariant = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };
  const slideUpVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slideRightVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slideLeftVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Check window size - if smaller than tablet, will use to make icons invisible on scroll (state passed down to SocialIcons). Also used for some dynamic styling of other elems e.g. experience icons
  const [isTablet, setIsTablet] = useState();
  const [isDesktop, setIsDesktop] = useState();
  useEffect(() => {
    const tabletMediaQuery = window.matchMedia(
      "(min-width: 600px) and (max-width: 1199px)"
    );
    const desktopMediaQuery = window.matchMedia("(min-width: 1200px");
    const handleTabletChange = (event) => {
      setIsTablet(event.matches);
    };
    const handleDesktopChange = (event) => {
      setIsDesktop(event.matches);
    };
    setIsTablet(tabletMediaQuery.matches);
    setIsDesktop(desktopMediaQuery.matches);
    tabletMediaQuery.addEventListener("change", handleTabletChange);
    desktopMediaQuery.addEventListener("change", handleDesktopChange);
    return () => {
      tabletMediaQuery.removeEventListener("change", handleTabletChange);
      desktopMediaQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  return (
    <ObserverContext.Provider
      value={{
        navIsIntersecting,
        setNavIsIntersecting,
        setupNavbarIntersection,
        isTablet,
        isDesktop,
        projectsSectionRef,
        contactMeRef,
        smoothScrollToRef,
        clicked,
        setClicked,
        location,
        popInVariant,
        slideUpVariant,
        slideRightVariant,
        slideLeftVariant,
        stagger,
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </ObserverContext.Provider>
  );
}
