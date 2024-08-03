import React from "react";
import "./vendor.css";
import { FormControl, Grid, MenuItem, Select, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const VendorRegister = () => {
  const [year, setYear] = useState("");

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <main id='main' className='main'>
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
                label="Company Name"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="street-address"
                label="Street Address"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="street-address-line-2"
                label="Street Address Line 2"
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
                label="Postal (Zip) Code"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="city"
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
                  value={year}
                  displayEmpty
                  onChange={handleChange}
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
                label="Bank Name"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="branch-name"
                label="Branch Name"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="account-holder-name"
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
                label="Account Number"
                type="number"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="ifsc-code"
                label="IFSC Code"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="upi-id"
                label="UPI ID (optional)"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "30px" }}>
              <div
                className="button"
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "16px",
                  backgroundColor: "#0e2a47",
                  border: "2px solid #0e2a47",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#fff",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                <NavLink to="/VendorDashboard" style={{ color: "#fff", textDecoration: "none" }}>Back</NavLink>
              </div>
              <div
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "16px",
                  backgroundColor: "#0e2a47",
                  border: "2px solid #0e2a47",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#fff",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                <NavLink to="/VendorDashboard" style={{ color: "#fff", textDecoration: "none" }}>Submit</NavLink>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default VendorRegister;
