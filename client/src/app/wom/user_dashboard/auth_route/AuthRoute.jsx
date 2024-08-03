import React from 'react'
// import Dashboard from './dashboard/Dashboard'
import { BrowserRouter,    Route,    Routes } from 'react-router-dom'
import UserLogin from '../../auth/user/UserLogin'
import UserRegister from '../../auth/user/UserRegister'
// import VendorDashboard from './vendor_dashboard/VendorDashboard'
// import AdminDashboard from './admin_dashboard/AdminDashboard'
function AuthRoute() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/user_login' element={<UserLogin />} />
      <Route path='/user_register' element={<UserRegister />} />
     
    </Routes>
  </BrowserRouter>
  )
}

export default AuthRoute
