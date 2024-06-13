import React, {createContext, useState, useEffect, useRef} from "react";

export const ObserverContext = createContext();

export default function ObserverProvider({children}) {
    // Intersection Observer
    const [isIntersecting, setIsIntersecting] = useState();
    const observedElem = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting)
        }, { root: null, rootMargin: "-40px", threshold: 1.0 })
        observer.observe(observedElem.current)
    }, [])

    // Check window size
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
    <ObserverContext.Provider value={{isIntersecting, setIsIntersecting, isTablet, observedElem}}>
        {children}
    </ObserverContext.Provider>
)
}