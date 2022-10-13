import React, { createContext, useRef } from "react";

export const Context = createContext();
export const ContextProvider = ({ initials, children }) => {
  const sectionRefs = useRef(new Array());

  return (
    <Context.Provider
      value={{
        sectionRefs
      }}>
      {children}
    </Context.Provider>
  );
};