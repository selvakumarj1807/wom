import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

import VendorNavbar from './VendorNavbar';  // Import the new Navbar component


const VendorManage = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check the initial window size
        setIsMobile(window.innerWidth <= 768);

        // Function to update state based on window size
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initialize DataTable
        $('#bootstrapdatatable').DataTable({
            "pagingType": "simple_numbers",
            "aLengthMenu": [
                [3, 5, 10, 25, -1],
                [3, 5, 10, 25, "All"]
            ],
            "iDisplayLength": 3,
            "responsive": false,
            "autoWidth": false,
            "columnDefs": [
                { "width": "10%", "targets": 0 }, // Adjust width for the first column
                { "width": "20%", "targets": 1 }, // Adjust width for the second column
                { "width": "20%", "targets": 2 }, // Adjust width for the third column

            ]
        });

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (

        <div id="main" className="main" style={{ padding: '20px' }}>
            <div>

                <VendorNavbar /> {/* Replace with the new Navbar component */}

                <hr />
                <h3 style={{ textAlign: 'center' }}>Vendor</h3>
                <hr />

                <div className="container" style={{ overflowX: 'auto' }}>
                    <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
                        <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">User Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>1</td>
                                    <td style={{ wordWrap: 'break-word' }}>name1</td>
                                    <td style={{ wordWrap: 'break-word' }}>name1@gmail.com</td>
                                </tr>

                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>2</td>
                                    <td style={{ wordWrap: 'break-word' }}>name2</td>
                                    <td style={{ wordWrap: 'break-word' }}>name2@gmail.com</td>
                                </tr>

                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>3</td>
                                    <td style={{ wordWrap: 'break-word' }}>name3</td>
                                    <td style={{ wordWrap: 'break-word' }}>name3@gmail.com</td>
                                </tr>

                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>4</td>
                                    <td style={{ wordWrap: 'break-word' }}>name4</td>
                                    <td style={{ wordWrap: 'break-word' }}>name4@gmail.com</td>
                                </tr>

                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>5</td>
                                    <td style={{ wordWrap: 'break-word' }}>name5</td>
                                    <td style={{ wordWrap: 'break-word' }}>name5@gmail.com</td>
                                </tr>

                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>6</td>
                                    <td style={{ wordWrap: 'break-word' }}>name6</td>
                                    <td style={{ wordWrap: 'break-word' }}>name6@gmail.com</td>
                                </tr>

                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>7</td>
                                    <td style={{ wordWrap: 'break-word' }}>name7</td>
                                    <td style={{ wordWrap: 'break-word' }}>name7@gmail.com</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VendorManage


