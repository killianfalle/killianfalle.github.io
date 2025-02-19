import { Container } from "@mui/material";
import "../assets/styles/container.scss"

// pages
import Home from "../pages/home/home";
import NotFound from "../pages/not-found/not-found";
import Maintenance from "../pages/maintenance/maintenance";
import Resume from "../pages/resume/resume";

const routes = [
  {
    path: "/",
    component: () => (
      <Container disableGutters maxWidth="3xl" className="page-wrapper">
        <Home />
      </Container>
    )
  },
  {
    path: "/maintenance",
    component: () => (
      <Container disableGutters maxWidth="3xl" className="page-wrapper">
        <Maintenance />
      </Container>
    )
  },
  {
    path: "/resume",
    component: () => (
      <Container disableGutters maxWidth="3xl" className="page-wrapper">
        <Resume />
      </Container>
    )
  },
  {
    path: "*",
    exact: true,
    component: () => (
      <Container disableGutters maxWidth="3xl" className="page-wrapper">
        <NotFound />
      </Container>
    )
  },
];

export default routes;
