import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddState = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [state, setState] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

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


    const fetchData = async () => {
        try {
            // Make a GET request to fetch the updated list of years
            const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addState');

            // Extract the array from the response (assuming it's called addYear)
            const fetchedData = response.data.addState;

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
                "columnDefs": [
                    { "width": "5%", "targets": 0 }, // Adjust width for the first column
                    { "width": "10%", "targets": 1 }, // Adjust width for the second column
                    { "width": "20%", "targets": 2 }, // Adjust width for the third column
                ]
            });

            // Cleanup function to destroy DataTable on unmount or before reinitialization
            return () => {
                table.destroy();
            };
        }
    }, [data]); // Only reinitialize DataTable when data changes

    const Submit = async (e) => {
        e.preventDefault();

        try {
            if (editMode) {
                const response = await axios.put(`https://wom-server.onrender.com/api/v1/masterManagement/addState/${selectedId}`, { state });
                if (response.status === 200) {
                    setSuccessMessage('Successfully updated!');
                }
            } else {
                const response = await axios.post("https://wom-server.onrender.com/api/v1/masterManagement/addState/new", { state });
                if (response.status === 200 || response.status === 201) {
                    setSuccessMessage('Successfully added!');
                }
            }

            setIsModalOpen(false);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (err) {
            console.error("Error submitting data:", err);
        }
    };


    const handleDelete = (id) => {
        axios.delete("https://wom-server.onrender.com/api/v1/masterManagement/addState/" + id)
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

    const openAddModal = () => {
        setState('');
        setEditMode(false);
        setIsModalOpen(true);
    };

    const openEditModal = (id, state) => {
        setState(state);
        setSelectedId(id);
        setEditMode(true);
        setIsModalOpen(true);
    };


    return (
        <div id="main" className="main" style={{ padding: '20px' }}>
            {successMessage && <div style={styles.successMessage}>{successMessage}</div>}

            <h2 style={{ textAlign: 'center', color: 'rgb(14, 42, 71)' }}>Add State</h2>
            <button type="button" className="btn btn-primary" onClick={openAddModal}>
                Add State
            </button>

            {isModalOpen && (
                <div className="modal show" tabindex="-1" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    {editMode ? 'Edit state' : 'Add state'}
                                </h5>
                                <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
                            </div>
                            <form onSubmit={Submit}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="state" className="col-form-label">State:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        {editMode ? 'Update' : 'Add'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <div className="container" style={{ overflowX: 'auto' }}>
                <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
                    <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">state</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((elem, index) => (
                                    <tr key={elem._id}>
                                        <td>{index + 1}</td>
                                        <td>{elem.state}</td>
                                        <td>
                                            <button style={styles.editButton} onClick={() => openEditModal(elem._id, elem.state)}>Edit</button>
                                            <button style={styles.deleteButton} onClick={() => handleDelete(elem._id)}>Delete</button>
                                        </td>
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
    );
};


export default AddState;

const styles = {
    editButton: {
        padding: '5px 10px',
        fontSize: '14px',
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        marginRight: '30px', // Gap between Edit and Delete
    },
    deleteButton: {
        padding: '5px 10px',
        fontSize: '14px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
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