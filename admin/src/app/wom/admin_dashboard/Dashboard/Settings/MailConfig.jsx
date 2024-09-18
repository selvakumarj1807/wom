import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const MailConfig = () => {
  const [data, setData] = useState([]);
  const [selectedGmail, setSelectedGmail] = useState('');  // To store the selected Gmail
  const [selectedSubject, setSelectedSubject] = useState('');  // To store the selected Subject
  const [selectedId, setSelectedId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const fetchData = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/adminGmail');
      const fetchedData = response.data.adminGmail;
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle the edit button click and populate the modal inputs
  const openEditModal = (gmail, subject, id) => {
    setIsModalOpen(true);
    setSelectedGmail(gmail);
    setSelectedSubject(subject);
    setSelectedId(id);
  };

  const Submit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Payload to be sent to the backend
      const updatedData = {
        adminGmail: selectedGmail,      // Make sure the keys match your backend model
        gmailSubject: selectedSubject,
      };

      const response = await axios.put(`https://wom-server.onrender.com/api/v1/masterManagement/adminGmail/${selectedId}`, updatedData);

      if (response.status === 200) {
        setSuccessMessage('Successfully updated!');

        // Fetch the updated data after submission
        fetchData();
      }
      setIsModalOpen(false);
      // Automatically close modal and clear the success message after a short delay
      setTimeout(() => {
        setSuccessMessage('');
        window.location.reload(); // Reload the page to reflect changes
      }, 2000);

    } catch (err) {
      console.error("Error submitting data:", err);
    }
  };

  return (
    <div id="main" className="container">

      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}

      <br />
      <h2 style={{ textAlign: 'center', color: 'rgb(14, 42, 71)' }}>Mail Configuration</h2>
      <br />

      {/* Responsive table container */}
      <div className="table-responsive d-flex justify-content-center">
        <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '70%' }}>
          <thead>
            <tr>
              <th scope="col">Mail</th>
              <th scope="col">Subject</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((elem, index) => (
                <tr key={elem._id}>
                  <td>{elem.adminGmail}</td>
                  <td>{elem.gmailSubject}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => openEditModal(elem.adminGmail, elem.gmailSubject, elem._id)}
                    >
                      Edit
                    </button>
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

      <br />

      {/* Modal for Editing */}
      {isModalOpen && (
        <div className="modal show" tabindex="-1" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit admin Gmail</h5>
                <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
              </div>
              <form onSubmit={Submit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Gmail:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={selectedGmail}
                      onChange={(e) => setSelectedGmail(e.target.value)} // Update state when input changes
                      placeholder="Enter a Gmail"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-subject" className="col-form-label">Subject:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-subject"
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)} // Update state when input changes
                      placeholder="Enter a Subject"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
                  {/* Set the type to "submit" to trigger the form submission */}
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MailConfig;

const styles = {
  successMessage: {
    height: '30px',
    backgroundColor: 'lightgreen',
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    paddingLeft: '30px',
    position: 'fixed',   // Fix the element to the top
    top: '70px',         // Offset from the top by 30px
    width: '100%',       // Optionally set the width to 100% to stretch across the screen
    zIndex: 1000         // Ensure it's above other content if needed
  }
};
