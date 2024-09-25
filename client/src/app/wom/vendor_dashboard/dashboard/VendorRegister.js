import React, { useEffect, useState } from 'react';
import "./vendor.css";
import { FormControl, Grid, MenuItem, Select, Stack, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

import axios from 'axios';
import Cookies from 'js-cookie';

import { useCallback } from 'react';


const VendorRegister = () => {

  const emailCookie = Cookies.get('email');

  const [successMessage, setSuccessMessage] = useState('');

  const [formValues, setFormValues] = useState({
    businessName: '',
    companyName: '',
    streetAddress: '',
    city: '',
    phoneNo: '',
    postalCode: '',
    bankName: '',
    brachName: '',
    accounterName: '',
    accountNumber: '',
    ifscCode: '',
    upiId: '',
    state: ''
  });

  const [vendorId, setVendorId] = useState(''); // State to store the vendor _id

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`https://wom-server.onrender.com/api/v1/vendor/vendorRegDetails/${emailCookie}`);
      const fetchedData = response.data.vendorDetail;
      setFormValues(fetchedData);

      // Assuming _id is directly available inside the fetchedData or response
      const vendorId = fetchedData._id || response.data._id;

      // Set the vendorId in state
      setVendorId(vendorId);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [emailCookie]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Form Submission Logic
  const handleSubmit = async () => {
    try {
      const response = await axios.put(`https://wom-server.onrender.com/api/v1/vendor/vendorDetail/${vendorId}`, {
        email: emailCookie,
        ...formValues  // Spread form values into the request body
      });

      if (response.status === 200 || response.status === 201) {
        console.log('Updated Successfully');
        setSuccessMessage('Successfully Updated!');

        // Refresh the page or redirect after success
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Function to insert a new vendor
  const handleInsert = async () => {
    try {
      const response = await axios.post(`https://wom-server.onrender.com/api/v1/vendor/vendorDetail/new`, {
        email: emailCookie,
        ...formValues  // Spread form values into the request body
      });

      if (response.status === 200 || response.status === 201) {
        console.log('Inserted Successfully');
        setSuccessMessage('Successfully Inserted!');

        // Refresh the page or redirect after success
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error("Error inserting form:", error);
    }
  };


  // Conditional click handler
  const handleClick = () => {
    if (vendorId) {
      handleSubmit(); // Update existing vendor
    } else {
      handleInsert(); // Insert new vendor
    }
  };

  const buttonStyle = {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#0e2a47',
    color: '#fff',
    px: 3,
    py: 1,
    borderRadius: 1,
    textDecoration: 'none',
    width: '120px', // Ensure consistent width
    height: '40px',   // Ensure consistent height
    '&:hover': {
      color: 'blue', // Change background color to blue on hover
    }
  };

  return (
    <main id='main' className='main'>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}

      <div className="pagetitle">
        <h1>Vendor Registration</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i className="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Vendor Registration</li>
          </ol>
        </nav>
      </div>
      <div
        className="text"
        style={{
          border: "4px solid black",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "5px 3px",
          marginTop: "40px",
          marginBottom: "20px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            fontWeight: "650",
            border: "2px solid black",
            padding: "5px",
          }}
        >
          Company Contact Information
        </h4>
        <Grid container spacing={2} style={{ marginTop: "2px" }}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <TextField
                id="name"
                name="businessName"
                value={formValues.businessName}
                onChange={handleInputChange}
                label="Organization / Business Name"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px", marginBottom: "20px" }}
              />
            </Stack>
          </Grid>
        </Grid>
        <h4
          style={{
            textAlign: "center",
            fontWeight: "650",
            border: "2px solid black",
            padding: "5px",
          }}
        >
          Company Address
        </h4>
        <Grid container spacing={2} style={{ marginTop: "2px" }}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <TextField
                id="name"
                name="companyName"
                value={formValues.companyName}
                onChange={handleInputChange}
                label="Company Name"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="mobile-no"
                name="phoneNo"
                value={formValues.phoneNo}
                onChange={handleInputChange}
                label="Mobile Number"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="street-address"
                name="streetAddress"
                value={formValues.streetAddress}
                onChange={handleInputChange}
                label="Street Address"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <TextField
                id="postal-code"
                name="postalCode"
                value={formValues.postalCode}
                onChange={handleInputChange}
                label="Postal (Zip) Code"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="city"
                name="city"
                value={formValues.city}
                onChange={handleInputChange}
                label="City"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <FormControl fullWidth style={{ marginTop: "15px" }}>
                <Select
                  labelId="state-province-select-label"
                  id="state-province-select"
                  name="state"
                  value={formValues.state}
                  displayEmpty
                  onChange={handleInputChange}
                >
                  <MenuItem disabled value="">
                    State/Province
                  </MenuItem>
                  <MenuItem value={"tn"}>Tamil Nadu</MenuItem>
                  <MenuItem value={"kerala"}>Kerala</MenuItem>
                  <MenuItem value={"karnataka"}>Karnataka</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
        </Grid>
        <h4
          style={{
            textAlign: "center",
            fontWeight: "650",
            border: "2px solid black",
            padding: "5px",
            marginTop: "20px",
          }}
        >
          Banking Information
        </h4>
        <Grid container spacing={2} style={{ marginTop: "2px" }}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <TextField
                id="bank-name"
                name="bankName"
                value={formValues.bankName}
                onChange={handleInputChange}
                label="Bank Name"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="branch-name"
                name="brachName"
                value={formValues.brachName}
                onChange={handleInputChange}
                label="Branch Name"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="account-holder-name"
                name="accounterName"
                value={formValues.accounterName}
                onChange={handleInputChange}
                label="Account Holder Name"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <TextField
                id="account-number"
                name="accountNumber"
                value={formValues.accountNumber}
                onChange={handleInputChange}
                label="Account Number"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="ifsc-code"
                name="ifscCode"
                value={formValues.ifscCode}
                onChange={handleInputChange}
                label="IFSC Code"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="upi-id"
                name="upiId"
                value={formValues.upiId}
                onChange={handleInputChange}
                label="UPI ID (optional)"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button component={NavLink} to="/vendor" sx={buttonStyle}>Back</Button>
            <Button sx={buttonStyle} onClick={handleClick}>Submit</Button>
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default VendorRegister;

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