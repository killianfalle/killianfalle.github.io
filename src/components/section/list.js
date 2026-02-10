import About from '../../sections/about/about';
import Contact from '../../sections/contact/contact';
import Expertise from '../../sections/expertise/expertise';
import Firebase from '../../sections/firebase/firebase';
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
      name: 'Firebase',
      component: <Firebase />
    },
    {
      name: 'Projects',
      component: <Projects />
    },
    {
      name: 'Contact',
      withBackground: true,
      component: <Contact />
    }
  ]