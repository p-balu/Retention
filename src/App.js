import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Admin from "./console/Admin";
import User from "./console/User";

const App = () => {
  return (
    <Router>
      <RoutesApp />
    </Router>
  );
};

const RoutesApp = () => {
  let routes = useRoutes([
    { path: "/", element: <User /> },
    { path: "/admin", element: <Admin /> },
  ]);
  return routes;
};

export default App;
