import React from 'react';
import { Link } from 'react-router-dom';
import './UserManagement.css';  // Import an external CSS file

const UserNavbar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar">
                <li><Link to="/Admin/userManage" className="nav-link">User</Link></li>
                <li><Link to="/Admin/user/acknow" className="nav-link">Enquiry</Link></li>
                <li><Link to="/Admin/user/status" className="nav-link">Status</Link></li>
                <li><Link to="/Admin/user/history" className="nav-link">History</Link></li>
                <li><Link to="/Admin/user/invoice" className="nav-link">Invoice</Link></li>
                <li><Link to="/Admin/user/payment" className="nav-link">Payment</Link></li>
            </ul>
        </div>
    );
}

export default UserNavbar;
