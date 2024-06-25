import React, { createContext, useState, useEffect, useRef } from "react";

export const ObserverContext = createContext();

export default function ObserverProvider({ children }) {
  // Handle smooth scrolling
  const projectsSectionRef = useRef(null);
  const contactMeRef = useRef(null);
  const [clicked, setClicked] = useState("");
  const smoothScrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Intersection Observer for navbar style changes on scroll (updated in HeaderHome.jsx)
  const [navIsIntersecting, setNavIsIntersecting] = useState();
  const observedElem = useRef();
  useEffect(() => {
    const callback = (entries, observer) => {
      const entry = entries[0];
      setNavIsIntersecting(entry.isIntersecting);
    };
    const options = { root: null, rootMargin: "-20px", threshold: 1.0 };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(observedElem.current);
  }, []);

  // Observer for slide in animations
  const [elemsIntersecting, setElemsIntersecting] = useState({});
  const slideElems = useRef([]);
  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };
    const slideObserver = new IntersectionObserver(callback, options);
    slideElems.current.forEach((elem) => {
      if (elem) {
        slideObserver.observe(elem);
      }
    });
    return () => {
      slideElems.current.forEach((elem) => {
        if (elem) {
          slideObserver.unobserve(elem);
        }
      });
    };
  }, []);

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
        isTablet,
        isDesktop,
        observedElem,
        slideElems,
        projectsSectionRef,
        contactMeRef,
        smoothScrollToRef,
        clicked,
        setClicked,
      }}
    >
      {children}
    </ObserverContext.Provider>
  );
}
