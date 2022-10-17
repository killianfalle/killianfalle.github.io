import "../../assets/styles/section.scss";

function Section({children, innerRef, centered = false, withBackground = false}) {
  return (
    <div
      ref={innerRef}
      className={`section-wrapper ${centered ? "centered" : ""} ${withBackground ? "withBackground": ""}`}>
        {children}
    </div>
  );
}

export default Section;