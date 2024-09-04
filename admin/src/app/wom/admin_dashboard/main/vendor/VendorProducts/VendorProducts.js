import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';


import VendorNavbar from '../../../Dashboard/VendorNavbar';  // Import the new Navbar component


const VendorProducts = () => {

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
                <h3 style={{ textAlign: 'center' }}>Vendor - Products</h3>
                <hr />

                <div className="container" style={{ overflowX: 'auto' }}>
                    <div className="table-responsive" style={{ width: isMobile ? '100%' : '180%', height: 'auto' }}>
                        <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Vendor Name</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Categories</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>1</td>
                                    <td style={{ wordWrap: 'break-word' }}>name1</td>
                                    <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed AC60 automatic</td>
                                    <td style={{ wordWrap: 'break-word' }}>Petrol</td>
                                    <td style={{ wordWrap: 'break-word' }}>15</td>
                                    <td style={{ wordWrap: 'break-word' }}>₹ 2500</td>
                                    <td style={{ wordWrap: 'break-word' }}>In Stock</td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>2</td>
                                    <td style={{ wordWrap: 'break-word' }}>name2</td>
                                    <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed AC60 automatic</td>
                                    <td style={{ wordWrap: 'break-word' }}>Diesel</td>
                                    <td style={{ wordWrap: 'break-word' }}>15</td>
                                    <td style={{ wordWrap: 'break-word' }}>₹ 2500</td>
                                    <td style={{ wordWrap: 'break-word' }}>In Stock</td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>3</td>
                                    <td style={{ wordWrap: 'break-word' }}>name3</td>
                                    <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed AC60 automatic</td>
                                    <td style={{ wordWrap: 'break-word' }}>Petrol</td>
                                    <td style={{ wordWrap: 'break-word' }}>15</td>
                                    <td style={{ wordWrap: 'break-word' }}>₹ 2500</td>
                                    <td style={{ wordWrap: 'break-word' }}>In Stock</td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>4</td>
                                    <td style={{ wordWrap: 'break-word' }}>name4</td>
                                    <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed AC60 automatic</td>
                                    <td style={{ wordWrap: 'break-word' }}>Gas</td>
                                    <td style={{ wordWrap: 'break-word' }}>15</td>
                                    <td style={{ wordWrap: 'break-word' }}>₹ 2500</td>
                                    <td style={{ wordWrap: 'break-word' }}>In Stock</td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>5</td>
                                    <td style={{ wordWrap: 'break-word' }}>name5</td>
                                    <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed AC60 automatic</td>
                                    <td style={{ wordWrap: 'break-word' }}>Gas</td>
                                    <td style={{ wordWrap: 'break-word' }}>15</td>
                                    <td style={{ wordWrap: 'break-word' }}>₹ 2500</td>
                                    <td style={{ wordWrap: 'break-word' }}>In Stock</td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>6</td>
                                    <td style={{ wordWrap: 'break-word' }}>name6</td>
                                    <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed AC60 automatic</td>
                                    <td style={{ wordWrap: 'break-word' }}>Petrol</td>
                                    <td style={{ wordWrap: 'break-word' }}>15</td>
                                    <td style={{ wordWrap: 'break-word' }}>₹ 2500</td>
                                    <td style={{ wordWrap: 'break-word' }}>In Stock</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VendorProducts;

const styles = {
    editButton: {
        padding: '5px 10px',
        fontSize: '14px',
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        width: '80px',
        marginRight: '10px', // Default gap
    },
    deleteButton: {
        padding: '5px 10px',
        fontSize: '14px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        width: '80px',
    }
};