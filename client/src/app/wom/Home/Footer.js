import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center'
  };

  const footerMenuStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const h1Style = {
    margin: '0 0 10px 0'
  };

  const footerInnerNavStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center'
  };

  const liStyle = {
    margin: isMobile ? '10px 0' : '0 15px'
  };

  const hrStyle = {
    width: '80%',
    margin: '20px auto',
    borderColor: '#fff'
  };

  const pStyle = {
    margin: '10px 0'
  };

  return (
    <div className='footer' style={footerStyle}>
      <div className='footer-menu' style={footerMenuStyle}>
        <h1 style={h1Style}>TXN</h1>
        <ul className='footer-inner-nav' style={footerInnerNavStyle}>
          <li style={liStyle}>
            <NavLink to=" ">
              <img
                style={{ width: '200px' }}
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Google Play Store Badge"
              />
            </NavLink>
          </li>
          <li style={liStyle}>
            <NavLink to=" ">
              <img
                style={{ width: '180px', height: '52px' }}
                src="https://www.incometax.gov.in/iec/foportal/sites/default/files/2020-02/app-store.png"
                alt="App Store Badge"
              />
            </NavLink>
          </li>
        </ul>
      </div>
      <hr style={hrStyle} />
      <div>
        <p className='text-center' style={pStyle}>
          &#169; Copyright 2024 | All Right Reserved |
        </p>
      </div>
    </div>
  );
}
