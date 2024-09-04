import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserNavbar from './UserNavbar';  // Import the new Navbar component

const UserManagement = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Function to update state based on window size
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initialize DataTable
        $('#bootstrapdatatable').DataTable({
            pagingType: "simple_numbers",
            aLengthMenu: [
                [3, 5, 10, 25, -1],
                [3, 5, 10, 25, "All"]
            ],
            iDisplayLength: 3,
            responsive: false,
            autoWidth: false,
            columnDefs: [
                { width: "10%", targets: 0 },
                { width: "20%", targets: 1 },
                { width: "20%", targets: 2 },
            ]
        });

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="main" className="main" style={{ padding: '20px' }}>
            <UserNavbar />
            <hr />
            <h3 style={{ textAlign: 'center' }}>User</h3>
            <hr />
            <div className="container" style={{ overflowX: 'auto' }}>
                <div className="table-responsive">
                    <table id="bootstrapdatatable" className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>User Name</th>
                                <th>User Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>name1</td>
                                <td>name1@gmail.com</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>name2</td>
                                <td>name2@gmail.com</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>name3</td>
                                <td>name3@gmail.com</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>name4</td>
                                <td>name4@gmail.com</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>name5</td>
                                <td>name5@gmail.com</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>name6</td>
                                <td>name6@gmail.com</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>name7</td>
                                <td>name7@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
