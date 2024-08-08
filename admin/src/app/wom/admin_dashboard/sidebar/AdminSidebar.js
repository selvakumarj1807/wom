import React from 'react'
import './adminSidebar.css'
import { Link } from 'react-router-dom'
function AdminSidebar() {
    return (
        <aside id="sidebar" className='sidebar'>
            <ul className="sidebar-nav" id='sidebar-nav'>
                <li className="nav-item">
                    <Link to="/Admin" className='nav-link a'>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Admin/userManage" className='nav-link collapsed'>
                        <span>User Management</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Admin/vendorManage" className='nav-link collapsed'>
                        <span>Vendor Management</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#components-nav" data-bs-toggle="collapse" >
                        <span>Access Management</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='components-nav'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/Admin/access/roles" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Roles</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Admin/access/permission" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Permission</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#components-nav1" data-bs-toggle="collapse" >
                        <span>Enquiry Management</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='components-nav1'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/Admin/user/enquiry/recived" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>User</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Admin/vendor/enquiry/recived" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Vendor</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/Admin/PushNotification" className='nav-link collapsed'>
                        <span>Push Notification</span>
                    </Link>
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
                            <Link to="/Admin/vendor/recivedQuote" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Vendor-Quote(Received)</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Admin/vendor/editQuote" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Edit Quote (Admin)</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Admin/user/forwardQuote" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>User Quote (Forward)</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/Admin/user/orderVerified" className='nav-link collapsed'>
                        <span>Order Management</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#forms-nav1" data-bs-toggle="collapse" >
                        <span>Delivery Management</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='forms-nav1'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/Admin/user/delivery" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>User</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Admin/vendor/delivery" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Vendor</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link to="/Admin/report" className='nav-link collapsed'>
                        <span>Reports & Analytics</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="" className='nav-link collapsed a' data-bs-target="#forms-nav2" data-bs-toggle="collapse" >
                        <span>Configuration Settings</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id='forms-nav2'
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/Admin/setting/business" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Business Setup</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Admin/setting/payment" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Payment Method</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Admin/setting/social" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Social Media</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Admin/setting/mail" className='a'>
                                <i className="bi bi-circle"></i>
                                <span>Mail configuration</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link to="/" className='nav-link collapsed'>
                        <span>Logout</span>
                    </Link>
                </li>

            </ul>
        </aside>
    )
}

export default AdminSidebar