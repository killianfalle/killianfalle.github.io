import "../../assets/styles/section.scss";

function Section({children, innerRef, withBackground = false, className = ""}) {
  return (
    <div
      ref={innerRef}
      className={`section-wrapper ${withBackground ? "withBackground": ""} ${className}`}>
        {children}
    </div>
  );
}

export default Section;