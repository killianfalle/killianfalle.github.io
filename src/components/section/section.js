import "../../assets/styles/section.scss";

function Section({children, innerRef, withBackground = false, className = "", isStandalone = false}) {
  return (
    <div
      ref={innerRef}
      className={`section-wrapper ${withBackground ? "withBackground": ""} ${className} ${isStandalone && "hidden !h-0"}`}>
        {children}
    </div>
  );
}

export default Section;