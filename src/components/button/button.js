

import React from "react";
import "../../assets/styles/button.scss";

const Button = ({
    children,
    position = "left",
    buttonClass = "",
    containerClass = ""
}) => {
  return (
    <div className={`button-cta-container ${position} ${containerClass}`}>
        <button className={`button-cta ${buttonClass}`}>{children}</button>
    </div>
  );
};

export default Button;