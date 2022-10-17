import Section from '../../components/section/section';
import Overview from '../../sections/overview/overview';
import { sectionsList } from '../../components/section/list';
import { useContext } from 'react';
import { Context } from '../../utils/context/context';

function Home() {
  const {sectionRefs} = useContext(Context);

  return (
    <div className="page-container">
      <Overview />

      {/* Sections */}
      {sectionsList.map((section, index) => (
        <Section
          key={index}
          innerRef={(element) => sectionRefs.current.push(element)}
          withBackground={section.withBackground}>
          {section.component}
        </Section>
      ))}
    </div>
  );
}

export default Home;