import React, { createContext, useRef, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ initials, children }) => {
  const sectionRefs = useRef(new Array());
  const [revealScrollTop, setRevealScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('Overview');

  return (
    <Context.Provider
      value={{
        sectionRefs,
        activeSection,
        setActiveSection,
        revealScrollTop,
        setRevealScrollTop
      }}>
      {children}
    </Context.Provider>
  );
};