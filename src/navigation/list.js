import { Container } from "@mui/material";
import "../assets/styles/container.scss"

// pages
import Home from "../pages/home/home";
import NotFound from "../pages/not-found/not-found";
import Maintenance from "../pages/maintenance/maintenance";

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
