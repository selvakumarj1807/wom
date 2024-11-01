import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './adminDashboard.css';
import { Route, Routes, useNavigate } from "react-router-dom";


import Header from './Header';
import AdminSidebar from './sidebar/AdminSidebar';
import Footer from './footer/Footer';

import Dashboard from "./Dashboard/Dashboard";

import RecycleEngineMarket from "./main/RecycleEngineMarket/RecycleEngineMarket";

import UserManagement from "./Dashboard/UserManagement";
import UserAcknowledge from "./main/user/Acknowledgement/UserAcknowledge";

import VendorManagement from "./Dashboard/VendorManage";
import VendorRegistration from "./main/vendor/VendorRegistraion/VendorRegistration";
import VendorProducts from "./main/vendor/VendorProducts/VendorProducts";
import VendorAcknowledge from "./main/vendor/Acknoledgement/VendorAcknowledge";

import AdminRoles from "./Dashboard/Access Manage/AdminRoles";
import AdminPermission from "./Dashboard/Access Manage/AdminPermission";

import PushNotification from "./Dashboard/PushNotification";
import ViewPushNotification from "./Dashboard/ViewPushNotifications";

import RecivedVendorQuote from "./main/vendor/Quote/RecivedVendorQuote";
import EditQuote from "./main/vendor/Quote/EditQuote";
import ForwardUserQuote from "./main/user/Quote/ForwardUserQuote";

import RecivedOrderUser from "./main/user/OrderVerification/RecivedOrderUser";
import ORderedViewProducts from "./main/user/OrderVerification/ORderedViewProducts";
import ORderedViewProductsVendor from "./main/user/OrderVerification/ORderedViewProductsVendor";

import Reports from "./Dashboard/Reports";

import Business from "./Dashboard/Settings/Business";
import Payment from "./Dashboard/Settings/Payment";
import SocialMedia from "./Dashboard/Settings/SocialMedia";
import MailConfig from "./Dashboard/Settings/MailConfig";

import AddYear from "./MasterManagement/AddYear";
import AddMake from "./MasterManagement/AddMake";
import AddModel from "./MasterManagement/AddModel";
import AddShippingMethod from "./MasterManagement/AddShippingMethod";
import AddStatus from "./MasterManagement/AddStatus";
import AddCategories from "./MasterManagement/AddCategories";
import AddState from "./MasterManagement/AddState";
import AddRole from "./MasterManagement/AddRole";
import AddPermissions from "./MasterManagement/AddPermissions";




function UserDashboard() {
  return (
    <div>
      <Header />
      <AdminSidebar />
      <br></br><br></br><br></br>
      <Routes>

        <Route path='/' element={<Dashboard />} />

        <Route path='/recycleEngineMarket' element={<RecycleEngineMarket />} />

        <Route path='/userManage' element={<UserManagement />} />
        <Route path='/user/acknow' element={<UserAcknowledge />} />

        <Route path='/vendorManage' element={<VendorManagement />} />
        <Route path='/vendor/acknow' element={<VendorAcknowledge />} />
        <Route path='/vendor/VendorProducts' element={<VendorProducts />} />
        <Route path='/vendor/register' element={<VendorRegistration />} />

        <Route path='/access/roles' element={<AdminRoles />} />
        <Route path='/access/permission' element={<AdminPermission />} />

        <Route path='/PushNotification' element={<PushNotification />} />
        <Route path='/viewPushNotification' element={<ViewPushNotification />} />

        <Route path='/vendor/recivedQuote' element={<RecivedVendorQuote />} />
        <Route path='/vendor/editQuote' element={<EditQuote />} />
        <Route path='/user/forwardQuote' element={<ForwardUserQuote />} />

        <Route path='/user/orderVerified' element={<RecivedOrderUser />} />
        <Route path='/user/order/viewProducts/:id' element={<ORderedViewProducts />} />
        <Route path='/vendor/order/viewProductsVendor/:id' element={<ORderedViewProductsVendor />} />

        <Route path='/report' element={<Reports />} />

        <Route path='/setting/business' element={<Business />} />
        <Route path='/setting/payment' element={<Payment />} />
        <Route path='/setting/social' element={<SocialMedia />} />
        <Route path='/setting/mail' element={<MailConfig />} />


        <Route path='/masterManagement/AddYear' element={<AddYear />} />
        <Route path='/masterManagement/AddMake' element={<AddMake />} />
        <Route path='/masterManagement/AddModel' element={<AddModel />} />
        <Route path='/masterManagement/AddShippingMethod' element={<AddShippingMethod />} />
        <Route path='/masterManagement/AddStatus' element={<AddStatus />} />
        <Route path='/masterManagement/AddCategories' element={<AddCategories />} />
        <Route path='/masterManagement/AddState' element={<AddState />} />
        <Route path='/masterManagement/AddRole' element={<AddRole />} />
        <Route path='/masterManagement/AddPermissions' element={<AddPermissions />} />


      </Routes>
      <br></br><br></br>
      <Footer />
    </div>
  );
}

export default UserDashboard;
