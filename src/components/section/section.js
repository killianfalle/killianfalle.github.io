import "../../assets/styles/section.scss";

function Section({children, innerRef, withBackground = false}) {
  return (
    <div
      ref={innerRef}
      className={`section-wrapper ${withBackground ? "withBackground": ""}`}>
        {children}
    </div>
  );
}

export default Section;