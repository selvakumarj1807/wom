import React from 'react';
import './navbarUser.css';
import NavNotice from './NavNotice';
import NavMessage from './NavMessage';
import NavAvatar from './NavAvatar';

function Navbar() {

  return (
    <nav className="header-nav ms-auto">
      <br></br>
      <ul className="d-flex align-items-center">
        <NavNotice />
        <NavMessage />
        <NavAvatar /> {/* Pass email to NavAvatar */}
      </ul>
    </nav>
  );
}

export default Navbar;
