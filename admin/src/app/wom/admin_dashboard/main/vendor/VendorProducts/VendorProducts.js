import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import VendorNavbar from '../../../Dashboard/VendorNavbar';  // Import the new Navbar component


const VendorProducts = () => {

    const [isMobile, setIsMobile] = useState(false);

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            // Make a GET request to fetch the updated list of years
            const response = await axios.get('https://wom-server.onrender.com/api/v1/vendor/products');

            // Extract the array from the response (assuming it's called addYear)
            const fetchedData = response.data.products;

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
        // Check the initial window size
        setIsMobile(window.innerWidth <= 768);

        // Function to update state based on window size
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
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
                <h3 style={{ textAlign: 'center' }}>Vendor - Products</h3>
                <hr />

                <div className="container" style={{ overflowX: 'auto' }}>
                    <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
                        <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Vendor Email</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Categories</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.length > 0 ? (
                                data.map((elem, index) => (
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>{index + 1}</td>
                                    <td style={{ wordWrap: 'break-word' }}>{elem.email}</td>
                                    <td style={{ wordWrap: 'break-word' }}>{elem.productName}</td>
                                    <td style={{ wordWrap: 'break-word' }}>{elem.category}</td>
                                    <td style={{ wordWrap: 'break-word' }}>{elem.description}</td>
                                    <td style={{ wordWrap: 'break-word' }}>{elem.quantity}</td>
                                    <td style={{ wordWrap: 'break-word' }}>{elem.status}</td>
                                </tr>

                            ))
                            ) : (
                                <tr>
                                    <td colSpan="7">No data available</td>
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

export default VendorProducts;
