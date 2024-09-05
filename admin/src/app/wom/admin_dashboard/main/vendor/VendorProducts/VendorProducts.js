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

        // Initialize DataTable
        $('#bootstrapdatatable1').DataTable({
            "pagingType": "simple_numbers",
            "aLengthMenu": [
                [3, 5, 10, 25, -1],
                [3, 5, 10, 25, "All"]
            ],
            "iDisplayLength": 3,
            "responsive": false,
            "autoWidth": false,
            "columnDefs": [
                { "width": "5%", "targets": 0 }, // Adjust width for the first column
                { "width": "10%", "targets": 1 }, // Adjust width for the second column
                { "width": "20%", "targets": 2 }, // Adjust width for the third column
            ]
        });

        // Initialize DataTable
        $('#bootstrapdatatable2').DataTable({
            "pagingType": "simple_numbers",
            "aLengthMenu": [
                [3, 5, 10, 25, -1],
                [3, 5, 10, 25, "All"]
            ],
            "iDisplayLength": 3,
            "responsive": false,
            "autoWidth": false,
            "columnDefs": [
                { "width": "5%", "targets": 0 }, // Adjust width for the first column
                { "width": "10%", "targets": 1 }, // Adjust width for the second column
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
                <h3 style={{ textAlign: 'center' }}>Vendor - Products</h3>
                <hr />

                <div className="container" style={{ overflowX: 'auto' }}>
                    <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
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
                <hr></hr>
                <br></br><br></br>

                <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add Status for Vendor Product</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form>
                                <div class="modal-body">

                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Status:</label>
                                        <input type="text" class="form-control" id="recipient-name" />
                                    </div>


                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add Category for Vendor Product</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form>
                                <div class="modal-body">

                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Category:</label>
                                        <input type="text" class="form-control" id="recipient-name" />
                                    </div>


                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">Add Status</button>
                </div>

                <br></br><br></br>
                <div className="container" style={{ overflowX: 'auto' }}>
                    <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
                        <table id="bootstrapdatatable1" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>1</td>
                                    <td style={{ wordWrap: 'break-word' }}>In Stack</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>2</td>
                                    <td style={{ wordWrap: 'break-word' }}>Out of Stack</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>3</td>
                                    <td style={{ wordWrap: 'break-word' }}>Status Method1</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                {/* Add more rows as needed */}
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>4</td>
                                    <td style={{ wordWrap: 'break-word' }}>Status Method2</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>5</td>
                                    <td style={{ wordWrap: 'break-word' }}>Status Method3</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>6</td>
                                    <td style={{ wordWrap: 'break-word' }}>Status Method3</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr></hr>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@fat">Add Category</button>
                </div>
                <br></br><br></br>
                <div className="container" style={{ overflowX: 'auto' }}>
                    <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
                        <table id="bootstrapdatatable2" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Catogories</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>1</td>
                                    <td style={{ wordWrap: 'break-word' }}>Type 1</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>2</td>
                                    <td style={{ wordWrap: 'break-word' }}>Type 2</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>3</td>
                                    <td style={{ wordWrap: 'break-word' }}>Type 3</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                {/* Add more rows as needed */}
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>4</td>
                                    <td style={{ wordWrap: 'break-word' }}>Type 4</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>5</td>
                                    <td style={{ wordWrap: 'break-word' }}>Type 5</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>6</td>
                                    <td style={{ wordWrap: 'break-word' }}>Type 6</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
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