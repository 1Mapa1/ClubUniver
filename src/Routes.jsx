import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Page = React.lazy(() => import("pages/Page"));
const Login = React.lazy(() => import("pages/Login"));
const Login_table = React.lazy(() => import("pages/Login-table"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/page" element={<Page />} />
          <Route path="/login-table" element={<Login_table />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
