import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';

const ProductTable = () => {
    const [isMobile, setIsMobile] = useState(false);
    const emailCookie = Cookies.get('email');
    const [data, setData] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    const fetchData = async () => {
        try {
            // Make a GET request to fetch the updated list of years
            const response = await axios.get(`https://wom-server.onrender.com/api/v1/vendor/products/${emailCookie}`);

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

    const handleDelete = (id) => {
        axios.delete(`https://wom-server.onrender.com/api/v1/vendor/product/${id}`)
            .then(res => {
                console.log(res)

                // Set the success message
                setSuccessMessage('Successfully deleted...!');

                // Optionally reload the page or refresh data after a delay
                setTimeout(() => {
                    window.location.reload();  // Reload after showing the message
                }, 2000);  // Show the message for 2 seconds before reload
            })
            .catch(err => console.log(err))
    };

    return (
        <main id='main' className='main'>
            {successMessage && <div style={styles.successMessage}>{successMessage}</div>}

            <div className="pagetitle">
                <h1>Product List</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to=" " className="a">
                                <i className="bi bi-card-checklist"></i>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">Product List</li>
                    </ol>
                </nav>
            </div>
            <div className="container" style={{ overflowX: 'auto' }}>
                <div className="table-responsive" style={{ width: isMobile ? '100%' : '180%', height: 'auto' }}>
                    <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Categories</th>
                                <th scope="col">Description</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((elem, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{elem.productName}</td>
                                        <td>{elem.category}</td>
                                        <td>{elem.description}</td>
                                        <td>{elem.quantity}</td>
                                        <td>{elem.status}</td>
                                        <td style={{ display: 'flex', alignItems: 'center', padding: '15px' }}>
                                            <Link to={`/vendor/product/edit?id=${elem._id}`} style={styles.editButton}>
                                                Edit
                                            </Link>                                            
                                            <button style={styles.deleteButton} onClick={() => handleDelete(elem._id)}>Delete</button>
                                        </td>
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

        </main>
    );
};

export default ProductTable;

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
    },
    successMessage: {
        height: '30px',
        backgroundColor: 'lightgreen',
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        paddingLeft: '30px',
        position: 'fixed',   // Fix the element to the top
        top: '60px',         // Offset from the top by 30px
        width: '100%',       // Optionally set the width to 100% to stretch across the screen
        zIndex: 1000         // Ensure it's above other content if needed
    }
};