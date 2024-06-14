import React, { createContext, useState, useEffect, useRef } from "react";

export const ObserverContext = createContext();

export default function ObserverProvider({ children }) {
    // Intersection Observer for navbar style changes on scroll (updated in HeaderHome.jsx)
    const [navIsIntersecting, setNavIsIntersecting] = useState();
    const observedElem = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setNavIsIntersecting(entry.isIntersecting)
        }, { root: null, rootMargin: "-40px", threshold: 1.0 })
        observer.observe(observedElem.current)
    }, [])

    // Observer for slide in animations

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
        })
        return () => {
            slideElems.current.forEach((elem) => {
                if (elem) {
                    slideObserver.unobserve(elem);
                }
            });
        };
    }, [])

    // Check window size - if smaller than tablet, will use to make icons invisible on scroll (state passed down to SocialIcons)
    const [isTablet, setIsTablet] = useState();
    useEffect(() => {
        const tabletMediaQuery = window.matchMedia("(min-width: 600px)");
        const handleMediaChange = (event) => {
            setIsTablet(event.matches)
        }
        setIsTablet(tabletMediaQuery.matches);
        tabletMediaQuery.addEventListener('change', handleMediaChange);
        return () => {
            tabletMediaQuery.removeEventListener('change', handleMediaChange)
        }
    }, [])

    return (
        <ObserverContext.Provider value={{ navIsIntersecting, setNavIsIntersecting, isTablet, observedElem, slideElems }}>
            {children}
        </ObserverContext.Provider>
    )
}