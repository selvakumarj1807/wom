import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";


import AdminDashboard from "./wom/admin_dashboard/adminDashboard";


// SESSION PAGES
const NotFound = Loadable(lazy(() =>
    import ("app/views/sessions/NotFound")));

const JwtAdminLogin = Loadable(lazy(() =>
    import ("app/views/sessions/jwtAdminLogin")));
const AdminForgotPassword = Loadable(lazy(() =>
    import ("app/views/sessions/adminForgotPassword")));

const HomeRedirect = () => {
    window.location.href = "https://wom-omega.vercel.app/home";
    return null;
};

const routes = [
    { path: "/", element: < Navigate to = "adminLogin" / > },
    { path: "*", element: < NotFound / > },

    { path: "/Admin/*", element: < AdminDashboard / > },

    // Home redirect route
    { path: "/home", element: < HomeRedirect / > },


    // session pages route
    { path: "/session/404", element: < NotFound / > },

    { path: "/adminLogin", element: < JwtAdminLogin / > },
    { path: "/adminForgot-password", element: < AdminForgotPassword / > },


];

export default routes;