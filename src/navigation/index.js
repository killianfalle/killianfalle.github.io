import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RouteList from "./list";

import NavBar from "../components/navbar/navbar";
import ScrollToTop from "../components/scroll-to-top/scroll-to-top";
import CursorFollower from "../utils/listeners/cursor-follower"
import Header from "../components/header/header";

const NavigationComponent = () => {
  const renderRoutes = () => {
    const routes = RouteList.map((route, routeIndex) => {
      return (
        <Route
          exact
          key={`route-${routeIndex}`}
          path={route.path}
          element={route.component()}
        />
      );
    });

    return routes;
  };

  return (
    <React.Fragment>
      {/* <UnderMaintenance /> */}
      <Toaster toastOptions={{ duration: 3000 }} position="top-right" />
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Header />
        <Routes>
          {renderRoutes()}
        </Routes>
        <CursorFollower />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default NavigationComponent;
