import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  const buttonStyle = {
    padding: '10px 20px',
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#0e2a47',
    borderRadius: '5px',
    margin: '5px 10px',
    border: 'none',  // To remove default button border
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand" href="/">
          <img
            src="https://i-cdn.apsgo.com/cdn/ixIr4Z6kjFikqy9QhPW73k3UW79bxY0sqbhUJikM.webp"
            alt="Logo"
            width="50"
            height="44"
          />
        </a>
        <button
          className="navbar-toggler ms-auto"  // Added ms-auto to push it to the right
          type="button"
          onClick={handleToggle}
          aria-controls="navbarSupportedContent"
          aria-expanded={showNav}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <br></br>
        <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`} id="navbarSupportedContent">
          <div className="d-grid gap-2 d-md-flex ms-auto">
            <button
              className="btn"
              style={buttonStyle}
              type="button"
              onClick={() => window.location.href = '/session/VendorSignup'}
            >
              Joining as a Vendor?
            </button>
            <button
              className="btn"
              style={buttonStyle}
              type="button"
              onClick={() => window.location.href = '/session/UserSignup'}
            >
              Joining as a User?
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
