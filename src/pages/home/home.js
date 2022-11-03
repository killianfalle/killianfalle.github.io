import Section from '../../components/section/section';
import Overview from '../../sections/overview/overview';
import { sectionsList } from '../../components/section/list';
import { useContext } from 'react';
import { Context } from '../../utils/context/context';

function Home() {
  const {sectionRefs, activeSection} = useContext(Context);

  const handleAddRef = (element) => {
    if(sectionsList.length > sectionRefs.current.length)
      sectionRefs.current.push(element)
  }

  return (
    <div className="page-container">
      <Overview />

      {/* Sections */}
      {sectionsList.map((section, index) => (
        <Section
          key={index}
          className={activeSection === section.name ? "active" : ""}
          innerRef={(element) => handleAddRef(element)}
          withBackground={section.withBackground}>
          {section.component}
        </Section>
      ))}
    </div>
  );
}

export default Home;