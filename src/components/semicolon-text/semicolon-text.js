

import React from "react";

const SemicolonText = ({text, semicolonColor = "text-primary"}) => {
  return (
    <div className="flex flex-row">
      <div className="relative flex flex-row items-center">
        <span className={`semicolon left ${semicolonColor}`}>{"{"}</span>
          <span className="semicolon-text">{text}</span>
        <span className={`semicolon right ${semicolonColor}`}>{"}"}</span>
      </div>
    </div>
  );
};

export default SemicolonText;