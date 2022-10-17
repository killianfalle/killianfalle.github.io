

import React from "react";

const PrimaryText = ({children, className}) => {
  return (
    <span className={`text-secondary ${className}`}>{children}</span>
  );
};

export default PrimaryText;