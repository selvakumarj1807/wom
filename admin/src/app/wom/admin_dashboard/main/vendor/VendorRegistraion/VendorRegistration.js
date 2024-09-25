import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import VendorNavbar from '../../../Dashboard/VendorNavbar';  // Import the new Navbar component


const VendorRegistration = () => {

    const [data, setData] = useState([]);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const fetchData = async () => {
        try {
            // Make a GET request to fetch the updated list of years
            const response = await axios.get('https://wom-server.onrender.com/api/v1/vendor/vendorRegDetails');

            // Extract the array from the response (assuming it's called addYear)
            const fetchedData = response.data.vendorDetails;

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
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">Street Address</th>
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
                                {data.length > 0 ? (
                                    data.map((elem, index) => (
                                        <tr>
                                            <td style={{ wordWrap: 'break-word' }}>{index + 1}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.email}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.businessName}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.companyName}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.phoneNo}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.streetAddress}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.postalCode}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.city}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.state}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.bankName}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.brachName}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.accounterName}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.accountNumber}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.ifscCode}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.upiId}</td>
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
        </div>
    )
}

export default VendorRegistration


