import React from 'react';
import { Link } from 'react-router-dom';
import './UserManagement.css';  // Import an external CSS file

const VendorNavbar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar">
                <li><Link to="/Admin/vendorManage" className="nav-link">Vendor</Link></li>
                <li><Link to="/Admin/vendor/register" className="nav-link">Registration</Link></li>
                <li><Link to="/Admin/vendor/VendorProducts" className="nav-link">Vendor Products</Link></li>
                <li><Link to="/Admin/vendor/acknow" className="nav-link">Payment History</Link></li>
            </ul>
        </div>
    );
}

export default VendorNavbar;
