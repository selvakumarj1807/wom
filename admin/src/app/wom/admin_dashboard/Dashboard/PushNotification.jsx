import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";
import $ from "jquery";
import "datatables.net";
import "datatables.net-responsive";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { TextField } from '@mui/material'; // Assuming you're using Material-UI

const PushNotification = () => {
  const location = useLocation();  // Move useLocation outside of useEffect
  const [selectedRows, setSelectedRows] = useState([]);
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');
  const [notes, setNotes] = useState('');
  const [enquiryNo, setEnquiryNo] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const storedYear = queryParams.get('year');
    const storedMake = queryParams.get('make');
    const storedModel = queryParams.get('model');
    const storedNotes = queryParams.get('notes');
    const storedEnquiryNo = queryParams.get('enquiryNo');


    // Set the retrieved values to state
    setYear(storedYear);
    setMake(storedMake);
    setModel(storedModel);
    setNotes(storedNotes);
    setEnquiryNo(storedEnquiryNo);
  }, [location.search]);  // Re-run when location.search changes

  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const handleChange1 = (event) => {
    setModel(event.target.value);
  };
  const handleChange2 = (event) => {
    setMake(event.target.value);
  };

  const handleChangeNotes = (event) => {
    setNotes(event.target.value);
  };


  const [dataYear, setDataYear] = useState([]);

  const fetchDataYear = async () => {
    try {
      // Make a GET request to fetch the updated list of years
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addYear');
      const fetchedData = response.data.addYear;
      setDataYear(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataYear();
  }, []);

  const [dataMake, setDataMake] = useState([]);

  const fetchDataMake = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addMake');
      const fetchedDataMake = response.data.addMake;
      setDataMake(fetchedDataMake);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataMake();
  }, []);

  const [dataModel, setDataModel] = useState([]);

  const fetchDataModel = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addModel');
      const fetchedDataModel = response.data.addModel;
      setDataModel(fetchedDataModel);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataModel();
  }, []);


  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    const checkboxes = document.querySelectorAll('.rowSelect');
    checkboxes.forEach(checkbox => checkbox.checked = isChecked);
    setSelectedRows(isChecked ? Array.from(checkboxes).map(cb => cb.value) : []);
  };
  const [selectedVProductRows, setSelectedVProductRows] = useState([]); // For second table

  const handleVProductSelectAll = (event) => {
    const isChecked = event.target.checked;
    const checkboxes = document.querySelectorAll('.rowVProductSelect');
    checkboxes.forEach(checkbox => checkbox.checked = isChecked);
    setSelectedVProductRows(isChecked ? Array.from(checkboxes).map(cb => cb.value) : []);
  };

  const handleRowSelect = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    setSelectedRows(prevState => {
      if (isChecked) {
        return [...prevState, value];
      } else {
        return prevState.filter(row => row !== value);
      }
    });
  };


  const handleVProductRowSelect = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    setSelectedVProductRows(prevState => {
      if (isChecked) {
        return [...prevState, value];
      } else {
        return prevState.filter(row => row !== value);
      }
    });
  };



  const [successMessage, setSuccessMessage] = useState('');

  const [pushData, setPushData] = useState([]);


  const fetchPushData = async () => {
    try {
      // Make a GET request to fetch the updated list of years
      const response = await axios.get('https://wom-server.onrender.com/api/v1/vendor/vendorRegDetails');

      // Extract the array from the response (assuming it's called addYear)
      const fetchedData = response.data.vendorDetails;

      // Update the state that the table uses
      setPushData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchPushData();
  }, []);

  useEffect(() => {
    // Initialize DataTable after data is loaded and cleanup before reinitialization
    if (pushData.length > 0) {
      const table = $('#bootstrapdatatable').DataTable({
        responsive: false,
        autoWidth: false,
        lengthMenu: [
          [3, 5, 10, 25, -1],
          [3, 5, 10, 25, "All"]
        ],
        displayLength: 3,
        columnDefs: [
          { orderable: false, targets: 0 }
        ]
      });

      return () => {
        table.destroy();
      };
    }
  }, [pushData]); // Only reinitialize DataTable when data changes

  const [pushVendorProduct, setPushVendorProduct] = useState([]);

  const fetchPushVendorProduct = async () => {
    try {
      // Make a GET request to fetch the updated list of years
      const response = await axios.get('https://wom-server.onrender.com/api/v1/vendor/products');

      // Extract the array from the response (assuming it's called addYear)
      const fetchedData = response.data.products;

      // Update the state that the table uses
      setPushVendorProduct(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchPushVendorProduct();
  }, []);


  useEffect(() => {
    // Initialize DataTable after data is loaded and cleanup before reinitialization
    if (pushVendorProduct.length > 0) {
      const table = $('#bootstrapdatatable1').DataTable({
        responsive: false,
        autoWidth: false,
        lengthMenu: [
          [3, 5, 10, 25, -1],
          [3, 5, 10, 25, "All"]
        ],
        displayLength: 3,
        columnDefs: [
          { orderable: false, targets: 0 }
        ]
      });

      return () => {
        table.destroy();
      };
    }
  }, [pushVendorProduct]); // Only reinitialize DataTable when data changes


  const handleSubmit = async (event) => {
    const formatDate = (date) => {
      const d = new Date(date);
      const day = d.getDate().toString().padStart(2, '0');
      const month = (d.getMonth() + 1).toString().padStart(2, '0');
      const year = d.getFullYear();
      const hours = d.getHours().toString().padStart(2, '0');
      const minutes = d.getMinutes().toString().padStart(2, '0');
      const period = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
      return `${day}/${month}/${year} - ${formattedHours}:${minutes} ${period}`;
    };

    event.preventDefault();

    if (selectedRows.length > 0 || selectedVProductRows.length > 0) {
      // 1. Filter vendors' emails from the first table (vendor details)
      const vendorEmails = pushData
        .filter((vendor) => selectedRows.includes(vendor._id)) // Filter by selected rows in first table
        .map((vendor) => ({
          email: vendor.email,
          readStatus: false
        }));

      // 2. Filter vendors' emails from the second table (vendor product details)
      const productEmails = pushVendorProduct
        .filter((product) => selectedVProductRows.includes(product._id)) // Filter by selected rows in second table
        .map((product) => ({
          email: product.email,
          readStatus: false
        }));

      // 3. Combine both email arrays
      const combinedEmails = [...vendorEmails, ...productEmails];

      // 4. Remove duplicates using a Set based on the email property
      const uniqueEmails = Array.from(
        new Set(combinedEmails.map((item) => item.email))
      ).map((email) => {
        return {
          email: email,
          readStatus: false // Add readStatus back for each unique email
        };
      });

      const dataToSend = {
        year: year,
        make: make,
        model: model,
        additionalNotes: notes,
        email: uniqueEmails,
        enquiryDate: formatDate(new Date()), // Use the formatted date
        enquiryNumber: enquiryNo
      };

      console.log('Data to send:', dataToSend);

      try {
        const response = await axios.post(
          "https://wom-server.onrender.com/api/v1/admin/pushNotification/new",
          dataToSend
        );
        if (response.status === 200 || response.status === 201) {
          setSuccessMessage("Push Notification sent Successfully!");
        }

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (err) {
        console.error("Error submitting data:", err);
      }
    } else {
      alert("Please select at least one Vendor or Vendor Product.");
    }
  };



  return (
    <div id="main" className="main" style={{ padding: '20px' }}>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
      <div>
        <hr />
        <h3 style={{ textAlign: 'center' }}>Push Notification</h3>
        <hr />
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap">
            <div className="col-12 col-md-4 mb-3">
              <select
                className="form-select"
                id="preferenceSelect1"
                value={year}
                onChange={handleChange}>
                <option>Select Year</option>
                {dataYear.length > 0 ? (
                  dataYear.map((elem, index) => (
                    <option key={index} value={elem.year}>{elem.year}</option>
                  ))
                ) : (
                  <option value="">No Year</option>
                )}
              </select>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <select
                className="form-select"
                id="preferenceSelect2"
                value={make}
                onChange={handleChange2}>
                <option>Select Make</option>
                {dataMake.length > 0 ? (
                  dataMake.map((elem, index) => (
                    <option key={index} value={elem.make}>{elem.make}</option>
                  ))
                ) : (
                  <option value="">No Make</option>
                )}
              </select>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <select
                className="form-select"
                id="preferenceSelect3"
                value={model}
                onChange={handleChange1}>
                <option>Select Model</option>
                {dataModel.length > 0 ? (
                  dataModel.map((elem, index) => (
                    <option key={index} value={elem.model}>{elem.model}</option>
                  ))
                ) : (
                  <option value="">No Model</option>
                )}
              </select>
            </div>

            <div className="col-12">
              <TextField
                id="notes"
                label="Additional Notes and Comments..."
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                value={notes}  // Bind the state value to TextField
                onChange={handleChangeNotes}  // Attach the handler to update state
              />
            </div>
          </div>

          <hr />
          <center><h4>Select Vendors</h4></center>

          <div className="table-responsive">
            <form id="tableForm" onSubmit={handleSubmit}>
              <table id="bootstrapdatatable" className="table table-striped table-bordered dt-responsive nowrap" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" id="selectAll" onChange={handleSelectAll} /> Select All
                    </th>
                    <th>Vendor Email</th>
                    <th>Business Name</th>
                    <th>Company Name</th>
                    <th>City</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  {pushData.length > 0 ? (
                    pushData.map((elem, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="checkbox"
                            className="rowSelect"
                            name="rowSelect[]"
                            value={elem._id}
                            onChange={handleRowSelect}
                          />
                        </td>
                        <td>{elem.email}</td>
                        <td>{elem.businessName}</td>
                        <td>{elem.companyName}</td>
                        <td>{elem.city}</td>
                        <td>{elem.state}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <br /><br />
              <hr />
              <center><h4>Select Vendors based on Vendor's Product</h4></center>
              <table id="bootstrapdatatable1" className="table table-striped table-bordered dt-responsive nowrap" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" id="selectAll" onChange={handleVProductSelectAll} /> Select All
                    </th>
                    <th>Vendor Email</th>
                    <th>Product Name</th>
                    <th>Categories</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pushVendorProduct.length > 0 ? (
                    pushVendorProduct.map((elem, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="checkbox"
                            className="rowVProductSelect"
                            name="rowVProductSelect[]"
                            value={elem._id}
                            onChange={handleVProductRowSelect}
                          />

                        </td>
                        <td>{elem.email}</td>
                        <td>{elem.productName}</td>
                        <td>{elem.category}</td>
                        <td>{elem.description}</td>
                        <td>{elem.quantity}</td>
                        <td>{elem.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <br /><br />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PushNotification;

const styles = {
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