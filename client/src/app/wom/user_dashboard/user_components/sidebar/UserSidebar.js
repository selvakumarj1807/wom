import React from 'react';
import './userSidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function UserSidebar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.get('https://wom-server.onrender.com/api/v1/user/logout'); // Call backend to clear the token cookie

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
        <aside id="sidebar" className='sidebar'>
            <ul className="sidebar-nav" id='sidebar-nav'>
                <li className="nav-item">
                    <Link to="/user" className='nav-link a'>
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/user/user/required_inform" className='nav-link collapsed'>
                        <i className="bi bi-chat-left-quote"></i>
                        <span>Request a Quote</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#components-nav" data-bs-toggle="collapse">
                        <i className="bi bi-shop-window"></i>
                        <span>Place the Order</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='components-nav' className='nav-content collapse' data-bs-parent="#sidebar-nav">
                        {/*
                        <li>
                            <Link to="/user/user/get_quote" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Get the quote</span>
                            </Link>
                        </li>
                        */}
                        
                        <li>
                            <Link to="/user/user/get_enquiry" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Get the Enquiry</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/user/get_UserQuote" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Get the Quote</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/user/user/user_history" className='nav-link collapsed'>
                        <i className="bi bi-clock-history"></i>
                        <span>History</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#forms-nav" data-bs-toggle="collapse">
                        <i className="bi bi-truck"></i>
                        <span>Track the order</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='forms-nav' className='nav-content collapse' data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to="/user/user/user_order_status" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Order Status</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link onClick={handleLogout} className='nav-link collapsed'>
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default UserSidebar;
