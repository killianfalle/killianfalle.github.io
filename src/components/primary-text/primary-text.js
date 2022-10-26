

import React from "react";

const PrimaryText = ({children, className}) => {
  return (
    <span className={`text-primary ${className}`}>{children}</span>
  );
};

export default PrimaryText;