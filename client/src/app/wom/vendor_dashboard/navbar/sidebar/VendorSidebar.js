import React from 'react'
import './vendorSidebar.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function UserSidebar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.get('https://wom-server.onrender.com/api/v1/vendor/logout'); // Call backend to clear the token cookie

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
                    <Link to="/vendor" className='nav-link a'>

                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/vendor/Enquiry" className='nav-link collapsed'>

                        <span>Enquiry</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/vendor/register" className='nav-link collapsed'>

                        <span>Vendor Registration</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#components-nav" data-bs-toggle="collapse" >

                        <span>Product Registration</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='components-nav'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/vendor/product/add" className='a'>

                                <span>Add Product</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/vendor/product/list" className='a'>

                                <span>Product List</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#forms-nav" data-bs-toggle="collapse" >

                        <span>Quote Management</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='forms-nav'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/vendor/quote/generator" className='a'>

                                <span>Quote Generator</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/vendor/quote/success" className='a'>

                                <span>Quote Success</span>
                            </Link>
                        </li>

                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/vendor/payment" className='nav-link collapsed'>

                        <span>Payment Response</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link onClick={handleLogout} className='nav-link collapsed'>
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default UserSidebar