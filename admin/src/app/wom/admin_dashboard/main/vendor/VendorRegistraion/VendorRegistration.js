import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

import VendorNavbar from '../../../Dashboard/VendorNavbar';  // Import the new Navbar component


const VendorRegistration = () => {

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
                <h3 style={{ textAlign: 'center' }}>Vendor Registration</h3>
                <hr />

                <div className="container" style={{ overflowX: 'auto' }}>
                    <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
                        <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Vendor Email</th>
                                    <th scope="col">Business Name</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Street Address</th>
                                    <th scope="col">Street Address Line 2</th>
                                    <th scope="col">Postal (Zip) Code</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Bank Name</th>
                                    <th scope="col">Branch Name</th>
                                    <th scope="col">Account Holder Name</th>
                                    <th scope="col">Account Number</th>
                                    <th scope="col">IFSC Code</th>
                                    <th scope="col">UPI ID</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>1</td>
                                    <td style={{ wordWrap: 'break-word' }}>name1@gmail.com</td>
                                    <td style={{ wordWrap: 'break-word' }}>Recycle Engine</td>
                                    <td style={{ wordWrap: 'break-word' }}>Recycle Engine Pvt</td>
                                    <td style={{ wordWrap: 'break-word' }}>Coimbatore South</td>
                                    <td style={{ wordWrap: 'break-word' }}>Coimbatore South 2</td>
                                    <td style={{ wordWrap: 'break-word' }}>641004</td>
                                    <td style={{ wordWrap: 'break-word' }}>Coimbatore</td>
                                    <td style={{ wordWrap: 'break-word' }}>Tamil Nadu </td>
                                    <td style={{ wordWrap: 'break-word' }}>BOB</td>
                                    <td style={{ wordWrap: 'break-word' }}>CBE</td>
                                    <td style={{ wordWrap: 'break-word' }}>CBE Main Branch</td>
                                    <td style={{ wordWrap: 'break-word' }}>12345677654321</td>
                                    <td style={{ wordWrap: 'break-word' }}>BARB0VJAGRO</td>
                                    <td style={{ wordWrap: 'break-word' }}>bob@1232</td>
                                </tr>

                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>2</td>
                                    <td style={{ wordWrap: 'break-word' }}>name2@gmail.com</td>
                                    <td style={{ wordWrap: 'break-word' }}>Recycle Engine</td>
                                    <td style={{ wordWrap: 'break-word' }}>Recycle Engine Pvt</td>
                                    <td style={{ wordWrap: 'break-word' }}>Coimbatore South</td>
                                    <td style={{ wordWrap: 'break-word' }}>Coimbatore South 2</td>
                                    <td style={{ wordWrap: 'break-word' }}>641004</td>
                                    <td style={{ wordWrap: 'break-word' }}>Coimbatore</td>
                                    <td style={{ wordWrap: 'break-word' }}>Tamil Nadu </td>
                                    <td style={{ wordWrap: 'break-word' }}>BOB</td>
                                    <td style={{ wordWrap: 'break-word' }}>CBE</td>
                                    <td style={{ wordWrap: 'break-word' }}>CBE Main Branch</td>
                                    <td style={{ wordWrap: 'break-word' }}>12345677654321</td>
                                    <td style={{ wordWrap: 'break-word' }}>BARB0VJAGRO</td>
                                    <td style={{ wordWrap: 'break-word' }}>bob@1232</td>
                                </tr>

                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>3</td>
                                    <td style={{ wordWrap: 'break-word' }}>name3@gmail.com</td>
                                    <td style={{ wordWrap: 'break-word' }}>Recycle Engine</td>
                                    <td style={{ wordWrap: 'break-word' }}>Recycle Engine Pvt</td>
                                    <td style={{ wordWrap: 'break-word' }}>Coimbatore South</td>
                                    <td style={{ wordWrap: 'break-word' }}>Coimbatore South 2</td>
                                    <td style={{ wordWrap: 'break-word' }}>641004</td>
                                    <td style={{ wordWrap: 'break-word' }}>Trichy</td>
                                    <td style={{ wordWrap: 'break-word' }}>Tamil Nadu </td>
                                    <td style={{ wordWrap: 'break-word' }}>BOB</td>
                                    <td style={{ wordWrap: 'break-word' }}>CBE</td>
                                    <td style={{ wordWrap: 'break-word' }}>CBE Main Branch</td>
                                    <td style={{ wordWrap: 'break-word' }}>12345677654321</td>
                                    <td style={{ wordWrap: 'break-word' }}>BARB0VJAGRO</td>
                                    <td style={{ wordWrap: 'break-word' }}>bob@1232</td>
                                </tr>

                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>4</td>
                                    <td style={{ wordWrap: 'break-word' }}>name4@gmail.com</td>
                                    <td style={{ wordWrap: 'break-word' }}>Recycle Engine</td>
                                    <td style={{ wordWrap: 'break-word' }}>Recycle Engine Pvt</td>
                                    <td style={{ wordWrap: 'break-word' }}>Coimbatore South</td>
                                    <td style={{ wordWrap: 'break-word' }}>Coimbatore South 2</td>
                                    <td style={{ wordWrap: 'break-word' }}>641004</td>
                                    <td style={{ wordWrap: 'break-word' }}>Chennai</td>
                                    <td style={{ wordWrap: 'break-word' }}>Tamil Nadu </td>
                                    <td style={{ wordWrap: 'break-word' }}>BOB</td>
                                    <td style={{ wordWrap: 'break-word' }}>CBE</td>
                                    <td style={{ wordWrap: 'break-word' }}>CBE Main Branch</td>
                                    <td style={{ wordWrap: 'break-word' }}>12345677654321</td>
                                    <td style={{ wordWrap: 'break-word' }}>BARB0VJAGRO</td>
                                    <td style={{ wordWrap: 'break-word' }}>bob@1232</td>
                                </tr>

                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>5</td>
                                    <td style={{ wordWrap: 'break-word' }}>name5@gmail.com</td>
                                    <td style={{ wordWrap: 'break-word' }}>Recycle Engine</td>
                                    <td style={{ wordWrap: 'break-word' }}>Recycle Engine Pvt</td>
                                    <td style={{ wordWrap: 'break-word' }}>Coimbatore South</td>
                                    <td style={{ wordWrap: 'break-word' }}>Coimbatore South 2</td>
                                    <td style={{ wordWrap: 'break-word' }}>641004</td>
                                    <td style={{ wordWrap: 'break-word' }}>Chennai</td>
                                    <td style={{ wordWrap: 'break-word' }}>Tamil Nadu </td>
                                    <td style={{ wordWrap: 'break-word' }}>BOB</td>
                                    <td style={{ wordWrap: 'break-word' }}>CBE</td>
                                    <td style={{ wordWrap: 'break-word' }}>CBE Main Branch</td>
                                    <td style={{ wordWrap: 'break-word' }}>12345677654321</td>
                                    <td style={{ wordWrap: 'break-word' }}>BARB0VJAGRO</td>
                                    <td style={{ wordWrap: 'break-word' }}>bob@1232</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VendorRegistration


