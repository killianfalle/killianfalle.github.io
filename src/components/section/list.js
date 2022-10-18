import About from '../../sections/about/about';
import Contact from '../../sections/contact/contact';
import Expertise from '../../sections/expertise/expertise';

export const sectionsList = [
    {
      name: 'About',
      component: <About />
    },
    {
      name: 'Expertise',
      component: <Expertise />
    },
    {
      name: 'Contact',
      withBackground: true,
      component: <Contact />
    }
  ]