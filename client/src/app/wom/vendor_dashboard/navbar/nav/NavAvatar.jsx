import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function NavAvatar() {

  // Renamed email to userEmail

  const emailCookie = Cookies.get('email');

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('https://wom-server.onrender.com/api/v1/vendor/logout'); // Call backend to clear the token cookie

      // Optionally clear any client-side stored data (e.g., localStorage, cookies)
      Cookies.remove('email');
      localStorage.removeItem('token');

      // Redirect to the login page after logging out
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };


  return (
    <li className="nav-item dropdown pe-3">
      <Link to="#" className='nav-link nav-profile d-flex align-items-center pe-0' data-bs-toggle="dropdown">
        <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="Profile" className='rounded-circle' />
      </Link>
      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className="dropdown-header">
          <h6>{emailCookie}</h6> {/* Display the email */}
          <span>Web Developer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to="#" className='dropdown-item d-flex align-items-center'>
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to="#" className='dropdown-item d-flex align-items-center'>
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to="#" className='dropdown-item d-flex align-items-center'>
            <i className="bi bi-question-circle"></i>
            <span>Need Help?</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link onClick={handleLogout} className='dropdown-item d-flex align-items-center'>
            <i className="bi bi-box-arrow-right"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
