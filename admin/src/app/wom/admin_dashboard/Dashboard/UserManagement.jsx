import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import UserNavbar from './UserNavbar';  // Import the new Navbar component

const UserManagement = () => {
    const [data, setData] = useState([]);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const fetchData = async () => {
        try {
            // Make a GET request to fetch the updated list of years
            const response = await axios.get('https://wom-server.onrender.com/api/v1/user/userDetails');

            // Extract the array from the response (assuming it's called addYear)
            const fetchedData = response.data.user;

            // Update the state that the table uses
            setData(fetchedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Initialize DataTable after data is loaded and cleanup before reinitialization
        if (data.length > 0) {
            const table = $('#bootstrapdatatable').DataTable({
                "pagingType": "simple_numbers",
                "aLengthMenu": [
                    [3, 5, 10, 25, -1],
                    [3, 5, 10, 25, "All"]
                ],
                "iDisplayLength": 3,
                "responsive": false,
                "autoWidth": false,
            });

            // Cleanup function to destroy DataTable on unmount or before reinitialization
            return () => {
                table.destroy();
            };
        }
    }, [data]); // Only reinitialize DataTable when data changes


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
                            {data.length > 0 ? (
                                data.map((elem, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{elem.name}</td>
                                        <td>{elem.email}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
