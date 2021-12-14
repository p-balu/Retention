import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Admin from "./console/Admin/Admin";
import Table from "./console/Admin/Table";
import User from "./console/User/User";
import "./App.css";
import Graph from "./console/Admin/Graph";
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
    { path: "/dashboard", element: <Table /> },
    { path: "/graphs", element: <Graph /> },
  ]);
  return routes;
};

export default App;
