import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddYear = () => {

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
                <hr />
                <h2 style={{ textAlign: 'center', color: 'rgb(14, 42, 71)' }}>Make Recycle Engine Market</h2>
                <hr />
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">Add Year</button>
                </div>

                <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add Year </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form>
                                <div class="modal-body">

                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Year:</label>
                                        <input type="text" class="form-control" id="recipient-name" placeholder='Enter a Year' />
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


                <br></br><br></br>
                <div className="container" style={{ overflowX: 'auto' }}>
                    <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
                        <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>1</td>
                                    <td style={{ wordWrap: 'break-word' }}>2015</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>2</td>
                                    <td style={{ wordWrap: 'break-word' }}>2016</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>3</td>
                                    <td style={{ wordWrap: 'break-word' }}>2017</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                {/* Add more rows as needed */}
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>4</td>
                                    <td style={{ wordWrap: 'break-word' }}>2018</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>5</td>
                                    <td style={{ wordWrap: 'break-word' }}>2019</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>6</td>
                                    <td style={{ wordWrap: 'break-word' }}>2020</td>
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
    );
};

const styles = {
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '20px'
    },
    inputField: {
        flex: '1',
        maxWidth: '500px',
        padding: '10px',
        fontSize: '16px'
    },
    submitButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'rgb(14, 42, 71)',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
    },
    editButton: {
        padding: '5px 10px',
        fontSize: '14px',
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        marginRight: '30px',// Gap between Edit and Delete
        //marginLeft: '30px'
    },
    deleteButton: {
        padding: '5px 10px',
        fontSize: '14px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    }
};

export default AddYear;
