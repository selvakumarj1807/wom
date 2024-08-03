
import React from 'react'
import './navbarUser.css'
import NavNotice from './NavNotice'
import NavMessage from './NavMessage'
import NavAvatar from './NavAvatar'
// import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="header-nav ms-auto">
    <br></br>
    <ul className="d-flex align-items-center">
      <div className='d-flex gap-4' >
      {/* <Link to="/user_dashboard">User_Dashboard</Link>
      <Link to="/vendor_dashboard">Vendor_Dashboard</Link>
      <Link to="/admin_dashboard">Admin_Dashboard</Link> */}
      </div>
        <NavNotice />
        <NavMessage />
        <NavAvatar />
    </ul>
</nav>
  )
}

export default Navbar