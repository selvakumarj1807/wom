import React from 'react'
import { Link } from 'react-router-dom'

function NavNotice() {
  return (
    <li className="nav-item dropdown">
    <Link to="#" className="nav-link nav-icon a" data-bs-toggle="dropdown">
      <i className="bi bi-bell"></i>
      <span className="badge bg-primary badge-number">4</span>
    </Link>

    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
      <li className="dropdown-header">
        You have 4 new notifications
        <Link to="#" className='a'>
          <span className="badge rounded-pill bg-primary p-2 ms-2">
            View all
          </span>
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li className="notification-item">
        <i className="bi bi-exclamation-circle text-warning"></i>
        <div>
          <h4>Lorem Ipsum
          </h4>
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, suscipit? </p>
          <p>30 min.ago</p>
        </div>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li className="notification-item">
        <i className="bi bi-x-circle text-danger"></i>
        <div>
          <h4>Car cargo</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, adipisci?</p>
          <p>1 hr.ago</p>
        </div>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li className="notification-item">
        <i className="bi bi-check-circle text-success"></i>
        <div>
          <h4>Atque rerum nesciunt</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, dolor.</p>
          <p>1 hr.ago</p>
        </div>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li className="notification-item">
        <i className="bi bi-info-circle text-primary"></i>
        <div>
          <h4>Dicta reprehenderit</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>4 hrs.ago</p>
        </div>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
     
     
      <li className="dropdown-footer">
        <Link to="#" className='a'>Show all notifications</Link>  
      </li>         
      
    </ul>

  </li>
  )
}

export default NavNotice