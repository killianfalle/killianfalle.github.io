import React from "react";
import "../../assets/styles/button.scss";

const Button = ({
    children,
    position = "left",
    buttonClass = "",
    containerClass = "",
    onClick = () => {}
}) => {
  return (
    <div className={`button-cta-container ${position} ${containerClass}`} onClick={onClick}>
        <button className={`button-cta ${buttonClass}`}>{children}</button>
    </div>
  );
};

export default Button;