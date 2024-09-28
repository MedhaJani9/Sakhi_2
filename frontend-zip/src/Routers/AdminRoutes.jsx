import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminPannel from "../Admin/AdminPannel";
import DemoAdmin from "../Admin/Views/DemoAdmin";
import ProtectedRoute from "./ProtectedRoute";
import { Login } from "mdi-material-ui";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/admin" element={<ProtectedRoute><Login /></ProtectedRoute>}></Route>
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminPannel /></ProtectedRoute>}></Route>
        {/* <Route path="/demo" element={<DemoAdmin />}></Route> */}
        
      </Routes>
    </div>
  );
};

export default AdminRoutes;
