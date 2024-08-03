import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";

import Home from "./wom/Home/Home";
import UserDashboard from "./wom/user_dashboard/UserDashboard";
import VendorDashboard from "./wom/vendor_dashboard/vendorDashboard";

import DoYou from "./wom/Home/popup/DoYou";
import PartInformation from "./wom/Home/PartInformation";

// SESSION PAGES
const NotFound = Loadable(lazy(() =>
    import ("app/views/sessions/NotFound")));
const JwtUserLogin = Loadable(lazy(() =>
    import ("app/views/sessions/JwtUserLogin")));
const JwtUserRegister = Loadable(lazy(() =>
    import ("app/views/sessions/JwtUserRegister")));
const UserForgotPassword = Loadable(lazy(() =>
    import ("app/views/sessions/UserForgotPassword")));
const JwtVendorLogin = Loadable(lazy(() =>
    import ("app/views/sessions/JwtVendorLogin")));
const JwtVendorRegister = Loadable(lazy(() =>
    import ("app/views/sessions/JwtVendorRegister")));
const VendorForgotPassword = Loadable(lazy(() =>
    import ("app/views/sessions/VendorForgotPassword")));

const routes = [
    { path: "/", element: < Navigate to = "home" / > },
    { path: "*", element: < NotFound / > },
    { path: "/home", element: < Home / > },
    { path: "/partinformation", element: < PartInformation / > },
    { path: "/home/doYou", element: < DoYou / > },
    { path: "/UserDashboard/*", element: < UserDashboard / > },
    { path: "/VendorDashboard/*", element: < VendorDashboard / > },

    // session pages route
    { path: "/session/404", element: < NotFound / > },
    { path: "/session/UserSignin", element: < JwtUserLogin / > },
    { path: "/session/UserSignup", element: < JwtUserRegister / > },
    { path: "/session/UserForgot-password", element: < UserForgotPassword / > },
    { path: "/session/VendorSignin", element: < JwtVendorLogin / > },
    { path: "/session/VendorSignup", element: < JwtVendorRegister / > },
    { path: "/session/VendorForgot-password", element: < VendorForgotPassword / > },
];

export default routes;