import About from '../../sections/about/about';
import Contact from '../../sections/contact/contact';
import Expertise from '../../sections/expertise/expertise';
import Projects from '../../sections/projects/projects';

export const sectionsList = [
    {
      name: 'About me',
      component: <About />
    },
    {
      name: 'Expertise',
      component: <Expertise />
    },
    {
      name: 'Projects',
      component: <Projects />
    },
    {
      name: 'Resume',
      isStandalone: true
    },
    {
      name: 'Contact',
      withBackground: true,
      component: <Contact />
    }
  ]