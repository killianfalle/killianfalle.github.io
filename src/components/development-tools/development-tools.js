import React from "react";
import "../../assets/styles/section-substyles/development-tools.scss";

const DevelopmentTools = ({
    tools
}) => {
  return (
    <div className="devtools-container">
        {tools.map((item, index) => (
            <div key={index} className="devtools-item">
                <p>{item}</p>
            </div>
        ))}
    </div>
  );
};

export default DevelopmentTools;