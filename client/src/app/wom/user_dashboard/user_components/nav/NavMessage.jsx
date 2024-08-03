import React from 'react'
import { Link } from 'react-router-dom'

function NavMessage() {
  return (
    <li className="nav-item dropdown">
    <Link to=" " className='nav-link nav-icon' data-bs-toggle="dropdown">
      <i className="bi bi-chat-left-text"></i>
      <span className="badge bg-success badge-number">3</span>
    </Link>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
      <li className="dropdown-header">
        You have 3 new messages
        <Link to=" " >
          <span className="badge rounded-pill bg-primary p-2 ms-2">
            View all
          </span>
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li className="message-item">
        <Link to=" ">
          <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjc5MS10YW5nLTM1LnBuZw.png" alt="" className='rounded-circle'  />
          <div>
            <h4>Mathav</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, expedita...</p>
            <p>4 hurs. ago</p>
          </div>
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li className="message-item">
        <Link to=" ">
          <img src="https://img.lovepik.com/element/45016/4170.png_860.png" alt="" className='rounded-circle' />
          <div>
            <h4>Sanu</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nemo...</p>
            <p>6 hrs. ago</p>
          </div>
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li className="message-item">
        <Link to=" ">
          <img src="https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png" alt="" className='rounded-circle' />
          <div>
            <h4>Muthu</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, deserunt!</p>
            <p>4 hrs. ago</p>
          </div>
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
    </ul>
  </li>
  )
}

export default NavMessage