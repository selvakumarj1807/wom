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
import RequestQuote from './user_components/user_manage/req_quote/RequestQuote.jsx';
import RequiredInformation from './user_components/user_manage/req_quote/req_inform/RequiredInformation.jsx';
import GetTheQuote from './user_components/user_manage/placeTheOrder/GetTheQuote.jsx';
import GetTheInvoice from './user_components/user_manage/placeTheOrder/GetTheInvoice.jsx';
import UserOrderStatus from './user_components/user_manage/user_order_status/UserOrderStatus.js';
import UserHistory from './user_components/user_manage/user_history/UserHistory.js';
import UserPayment from './user_components/user_manage/placeTheOrder/payment/UserPayment.jsx';
import UserRegister from '../auth/user/UserRegister';
import UserLogin from '../auth/user/UserLogin.js';

function UserDashboard() {
  return (
    <div>
      <Header />
      <UserSidebar />
      <Routes>
        <Route path='/' element={<UserMain />} />
        <Route path='/user/user_enquiry' element={<RequestQuote />} />
        <Route path='/user/required_inform' element={<RequiredInformation />} />
        <Route path='/user/get_quote' element={<GetTheQuote />} />
        <Route path='/user/user_invoice' element={<GetTheInvoice />} />
        <Route path='/user/user_order_status' element={<UserOrderStatus />} />
        <Route path='/user/user_history' element={<UserHistory />} />
        <Route path='/user/invoice/payment' element={<UserPayment />} />
        <Route path='/user_login' element={<UserLogin />} />
        <Route path='/user_register' element={<UserRegister />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default UserDashboard;
