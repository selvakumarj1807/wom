import React from 'react'
import { Link } from 'react-router-dom'

function NavAvatar() {
  return (
    <li className="nav-item dropdown pe-3">
      <Link to=" " className='nav-link nav-profile d-flex align-items-center pe-0 a' data-bs-toggle="dropdown">
        <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="Profile" className='rounded-circle' />
        <span className="d-none d-md-block dropdown-toggle ps-2">Sannasi</span>
      </Link>
      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className="dropdown-header">
          <h6>Sannasi</h6>
          <span>Web Developer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to=" " className='dropdown-item d-flex align-items-center a' >
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to=" " className='dropdown-item d-flex align-items-center a' >
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to=" " className='dropdown-item d-flex align-items-center a' >
            <i className="bi bi-question-circle"></i>
            <span>Need Help?</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to=" " className='dropdown-item d-flex align-items-center a' >
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </Link>
        </li>
      </ul>
    </li>
  )
}

export default NavAvatar