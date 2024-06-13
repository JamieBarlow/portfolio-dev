import React, {createContext, useState} from "react";

export const ObserverContext = createContext();

export default function ObserverProvider({children}) {
    const [isIntersecting, setIsIntersecting] = useState();
return (
    <ObserverContext.Provider value={{isIntersecting, setIsIntersecting}}>
        {children}
    </ObserverContext.Provider>
)
}