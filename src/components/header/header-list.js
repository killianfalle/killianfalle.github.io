import Resume from "../../pages/resume/resume";
import Contact from "../../sections/contact/contact";
import Expertise from "../../sections/expertise/expertise";
import Projects from "../../sections/projects/projects";

export const headerItems = [
  {
    name: 'Expertise',
    component: <Expertise />
  },
  {
    name: 'Projects',
    component: <Projects />
  },
  {
    name: 'Contact',
    component: <Contact />
  },
  {
    name: 'Resume',
    component: <Resume />,
    isHighlighted: true,
    isStandalone: true
  }
]