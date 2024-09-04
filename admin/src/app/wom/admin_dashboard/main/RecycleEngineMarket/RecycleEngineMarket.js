import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecycleEngineMarket = () => {

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
                <hr />
                <h2 style={{ textAlign: 'center', color: 'rgb(14, 42, 71)' }}>Make Recycle Engine Market</h2>
                <hr />

                <h4>Year</h4>

                <div style={styles.formContainer}>
                    <input
                        type="text"
                        placeholder="Enter your Year"
                        style={styles.inputField}
                    />
                    <button type="submit" style={styles.submitButton}>
                        Submit
                    </button>
                </div>

                <h4>Make</h4>

                <div style={styles.formContainer}>
                    <input
                        type="text"
                        placeholder="Enter your Make"
                        style={styles.inputField}
                    />
                    <button type="submit" style={styles.submitButton}>
                        Submit
                    </button>
                </div>

                <h4>Model</h4>

                <div style={styles.formContainer}>
                    <input
                        type="text"
                        placeholder="Enter your Model"
                        style={styles.inputField}
                    />
                    <button type="submit" style={styles.submitButton}>
                        Submit
                    </button>
                </div>

                <hr />

                <h3 style={{ textAlign: 'center', color: 'black' }}>Year</h3>

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

                <hr></hr>

                <h3 style={{ textAlign: 'center', color: 'black' }}>Make</h3>

                <br></br><br></br>
                <div className="container" style={{ overflowX: 'auto' }}>
                    <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
                        <table id="bootstrapdatatable1" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Make</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>1</td>
                                    <td style={{ wordWrap: 'break-word' }}>AMC</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>2</td>
                                    <td style={{ wordWrap: 'break-word' }}>Acura</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>3</td>
                                    <td style={{ wordWrap: 'break-word' }}>Alfa</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                {/* Add more rows as needed */}
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>4</td>
                                    <td style={{ wordWrap: 'break-word' }}>Audi</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>5</td>
                                    <td style={{ wordWrap: 'break-word' }}>BMW</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>6</td>
                                    <td style={{ wordWrap: 'break-word' }}>Buick</td>
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

                <h3 style={{ textAlign: 'center', color: 'black' }}>Model</h3>

                <br></br><br></br>
                <div className="container" style={{ overflowX: 'auto' }}>
                    <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
                        <table id="bootstrapdatatable2" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>1</td>
                                    <td style={{ wordWrap: 'break-word' }}>Ambassador</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>2</td>
                                    <td style={{ wordWrap: 'break-word' }}>American</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>3</td>
                                    <td style={{ wordWrap: 'break-word' }}>Amx</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                {/* Add more rows as needed */}
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>4</td>
                                    <td style={{ wordWrap: 'break-word' }}>Classic</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>5</td>
                                    <td style={{ wordWrap: 'break-word' }}>RDX</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>6</td>
                                    <td style={{ wordWrap: 'break-word' }}>RL</td>
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
        marginRight: '30px' ,// Gap between Edit and Delete
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

export default RecycleEngineMarket;
