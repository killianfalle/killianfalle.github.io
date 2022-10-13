import "../../assets/styles/section.scss";

function Section({children, innerRef}) {
  return (
    <div ref={innerRef} className="section-wrapper">
        {children}
    </div>
  );
}

export default Section;