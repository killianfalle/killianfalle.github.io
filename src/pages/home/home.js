import Section from '../../components/section/section';
import Overview from '../../sections/overview/overview';
import { sectionsList } from '../../components/section/list';
import { useContext, useEffect } from 'react';
import { Context } from '../../utils/context/context';

function Home() {
  const {sectionRefs, activeSection} = useContext(Context);

  const handleAddRef = (element) => {
    if(sectionsList.length > sectionRefs.current.length)
      sectionRefs.current.push(element)
  }

  useEffect(() => {
      const hash = window.location.hash.substring(1); // Get hash without #
      if (hash) {
        const index = sectionsList.findIndex(section => 
            section.name.toLowerCase().replace(/\s+/g, '-') === hash
        );

        if (index !== -1 && sectionRefs.current[index]) {
            setTimeout(() => {
                sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
            }, 300); // Delay ensures sections are loaded before scrolling
        }
      }
  }, []);

  return (
    <div className="page-container">
      <Overview />

      {/* Sections */}
      {sectionsList
        .map((section, index) => (
          <Section
            key={index}
            className={activeSection === section.name ? "active" : ""}
            innerRef={(element) => handleAddRef(element)}
            withBackground={section.withBackground}
            isStandalone={section.isStandalone}>
            {section.component}
          </Section>
        ))
      }
    </div>
  );
}

export default Home;