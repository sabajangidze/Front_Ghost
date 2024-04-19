import React, { useState } from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";

import Home from "./screens/Home/Home";
import AdminDashboard from "./screens/AdminDashboard/AdminDashboard";
import UsersDashboard from "./screens/AdminDashboard/UsersDashboard/UsersDashboard";
import WritersDashboard from "./screens/AdminDashboard/WritersDashboard/WritersDashboard";
import UniversitiesDashboard from "./screens/AdminDashboard/UniversitiesDashboard/UniversitiesDashboard";
import LecturersDashboard from "./screens/AdminDashboard/LecturersDashboard/LecturersDashboard";
import SubjectsDashboard from "./screens/AdminDashboard/SubjectsDashboard/SubjectsDashboard";
import PostsDashboard from "./screens/AdminDashboard/PostsDashboard/PostsDashboard";
import PaymentsDashboard from "./screens/AdminDashboard/PaymentsDashboard/PaymentsDashboard";
import MyOrders from "./screens/User/MyOrders/MyOrders";
import IncomingOrders from "./screens/Writer/IncomingOrders/IncomingOrders";
import IsAuthenticatedPrivateRoute from "./components/Routing/IsAuthenticatedPrivateRoute";
import HasARolePrivateRoute from "./components/Routing/HasARolePrivateRouter";
import UserRoles from "./types/UserRoles";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Home />}></Route>
        <Route
          path="/my-orders"
          element={<HasARolePrivateRoute Roles={[UserRoles.Student]}/>}
        >
          <Route path="" element={<MyOrders />} />
        </Route>
        <Route path="/incoming-orders" element={<HasARolePrivateRoute Roles={[UserRoles.Writer,UserRoles.Admin, UserRoles.SuperAdmin]} />}>
          <Route path="" element={<IncomingOrders />} />
        </Route>
        <Route path="/admin-dashboard" element={<HasARolePrivateRoute Roles={[UserRoles.SuperAdmin, UserRoles.Student]} />}>
              <Route index path="home" element={<AdminDashboard />} />
              <Route path="users" element={<UsersDashboard />} />
              <Route path="writers" element={<WritersDashboard />} />
              <Route path="posts" element={<PostsDashboard />} />
              <Route path="subjects" element={<SubjectsDashboard />} />
              <Route path="universities" element={<UniversitiesDashboard />} />
              <Route path="lecturers" element={<LecturersDashboard />} />
              <Route path="payments" element={<PaymentsDashboard />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default AppRouter;
