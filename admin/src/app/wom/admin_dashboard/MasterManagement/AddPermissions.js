import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

import './addRole.css'



const RoleManagement = () => {

    const [role, setRole] = useState("");

    // Handle the role input change
    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Role:", role);
    };


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
                { "width": "20%", "targets": 1 }, // Adjust width for the third column
                { "width": "10%", "targets": 2 }, // Adjust width for the third column

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
                <h2 style={{ textAlign: 'center', color: 'rgb(14, 42, 71)' }}>Add Permissions For Roles</h2>
                <hr />
                <div className="roleContainer">
                    <div className="role-management-container">

                        <form onSubmit={handleSubmit}>
                            {/* Input for Role */}
                            <div className="form-groupInput">
                                <h3 htmlFor="role">Enter Permission:</h3>
                                <input
                                    type="text"
                                    id="role"
                                    name="role"
                                    value={role}
                                    onChange={handleRoleChange}
                                    placeholder="Enter Permission"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="button-container">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <br></br><br></br>
                <div className="container" style={{ overflowX: 'auto' }}>
                    <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
                        <table id="bootstrapdatatable2" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Permission</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>1</td>
                                    <td style={{ wordWrap: 'break-word' }}>Permission 06</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>2</td>
                                    <td style={{ wordWrap: 'break-word' }}>Permission 05</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>3</td>
                                    <td style={{ wordWrap: 'break-word' }}>Permission 01</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                {/* Add more rows as needed */}
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>4</td>
                                    <td style={{ wordWrap: 'break-word' }}>Permission 02</td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>5</td>
                                    <td style={{ wordWrap: 'break-word' }}>Permission 03 </td>
                                    <td style={{ wordWrap: 'break-word' }}>
                                        <button style={styles.editButton}>Edit</button>
                                        {' '}
                                        <button style={styles.deleteButton}>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ wordWrap: 'break-word' }}>6</td>
                                    <td style={{ wordWrap: 'break-word' }}>Permission 04 </td>
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

export default RoleManagement;

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
