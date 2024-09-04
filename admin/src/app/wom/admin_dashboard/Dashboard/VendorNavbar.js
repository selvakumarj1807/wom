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
                <li><Link to="/Admin/vendor/acknow" className="nav-link">Acknowledgement</Link></li>
                <li><Link to="/Admin/vendor/status" className="nav-link">Status</Link></li>
                <li><Link to="/Admin/vendor/history" className="nav-link">History</Link></li>
                <li><Link to="/Admin/vendor/invoice" className="nav-link">Invoice</Link></li>
                <li><Link to="/Admin/vendor/payment" className="nav-link">Payment</Link></li>
            </ul>
        </div>
    );
}

export default VendorNavbar;
