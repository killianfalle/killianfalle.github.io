import "../../assets/styles/section.scss";

function Section({children, innerRef, centered = false}) {
  return (
    <div ref={innerRef} className={`section-wrapper ${centered ? "centered" : ""}`}>
        {children}
    </div>
  );
}

export default Section;