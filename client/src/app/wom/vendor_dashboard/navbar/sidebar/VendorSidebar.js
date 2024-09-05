import React from 'react'
import './vendorSidebar.css'
import { Link } from 'react-router-dom'
function UserSidebar() {
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
                    <Link to="/" className='nav-link collapsed'>

                        <span>Logout</span>
                    </Link>
                </li>
                {/* <li className="nav-item">
            <Link to=" " className='nav-link collapsed a' data-bs-target="#tables-nav" data-bs-toggle="collapse" >
                <i className="bi bi-layout-text-window-reverse"></i>
                    <span>Tables</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id='tables-nav'
                className='nav-content collapse'
                data-bs-parent="#sidebar-nav"
            >
                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>General Tables</span>
                    </Link>
                </li>

                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>Data Tables</span>
                    </Link>
                </li>             
            </ul>
        </li>
        <li className="nav-item">
            <Link to=" " className='nav-link collapsed a' data-bs-target="#charts-nav" data-bs-toggle="collapse" >
                <i className="bi bi-bar-chart"></i>
                    <span>Charts</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id='charts-nav'
                className='nav-content collapse'
                data-bs-parent="#sidebar-nav"
            >
                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>Chart.js</span>
                    </Link>
                </li>

                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>ApexCharts</span>
                    </Link>
                </li>             
                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>ECharts</span>
                    </Link>
                </li>             
            </ul>
        </li>

        <li className="nav-item">
            <Link to=" " className='nav-link collapsed a' data-bs-target="#icons-nav" data-bs-toggle="collapse" >
                <i className="bi bi-gem"></i>
                    <span>Icons</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id='icons-nav'
                className='nav-content collapse'
                data-bs-parent="#sidebar-nav"
            >
                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>Bootstrap Icons</span>
                    </Link>
                </li>

                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>Remix Icons</span>
                    </Link>
                </li>             
                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>BoxIcons</span>
                    </Link>
                </li>             
            </ul>
        </li>
        <li className='nav-heading'> Pages</li>
        {
            navList.map(nav => (
                <li className="nav-item" key={nav._id}>
                    <Link className='nav-link collapsed' to=" ">
                        <i className={nav.icon}></i>
                        <span>{nav.name}</span>
                    </Link>
                </li>
            ))
        } */}
            </ul>
        </aside>
    )
}

export default UserSidebar