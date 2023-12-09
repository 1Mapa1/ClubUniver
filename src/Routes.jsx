import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { PrivateRoute } from "components/PrivateRoute";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Page = React.lazy(() => import("pages/Page"));
const Login = React.lazy(() => import("pages/Login"));
const Login_table = React.lazy(() => import("pages/Login-table"));





const ProjectRoutes = () => {
  
  
  return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/page" element={<Page />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<PrivateRoute />}>
            <Route path='/login-table' element={<Login_table />} />
          </Route>
        </Routes>
      </React.Suspense>
  );
};
export default ProjectRoutes;
