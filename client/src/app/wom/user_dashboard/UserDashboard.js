import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './userDashboard.css';
import Header from './user_components/Header';
import UserSidebar from './user_components/sidebar/UserSidebar';
import Footer from './user_components/user_dash/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import UserMain from './user_components/user_main/UserMain';
import RequiredInformation from './user_components/user_manage/req_quote/req_inform/RequiredInformation.jsx';
import GetTheUserQuote from './user_components/user_manage/placeTheOrder/GetTheUserQuote.jsx';
import GetTheEnquiry from './user_components/user_manage/placeTheOrder/GetTheEnquiry.jsx';
import GetUserInvoice from './user_components/user_manage/placeTheOrder/GetUserInvoice.jsx';
import UserOrderStatus from './user_components/user_manage/user_order_status/UserOrderStatus.js';
import UserHistory from './user_components/user_manage/user_history/UserHistory.js';
import UserViewProducts from './user_components/user_manage/user_history/UserViewProducts.js';

import UserRegister from '../auth/user/UserRegister';
import UserLogin from '../auth/user/UserLogin.js';

import useAuthRedirect from '../../../hooks/useAuthRedirect';

function UserDashboard() {

  useAuthRedirect(); // Check for the token and redirect if not present

  return (
    <div>
      <Header />
      <UserSidebar />
      <Routes>
        <Route path='/' element={<UserMain />} />
        <Route path='/user/required_inform' element={<RequiredInformation />} />
        <Route path='/user/get_Userinvoice' element={<GetUserInvoice />} />
        <Route path='/user/get_UserQuote' element={<GetTheUserQuote />} />
        <Route path='/user/get_enquiry' element={<GetTheEnquiry />} />
        <Route path='/user/user_order_status' element={<UserOrderStatus />} />
        <Route path='/user/user_history' element={<UserHistory />} />
        <Route path='user/order/viewProducts/:id' element={<UserViewProducts />} />

        <Route path='/user_login' element={<UserLogin />} />
        <Route path='/user_register' element={<UserRegister />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default UserDashboard;
