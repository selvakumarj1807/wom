import React from "react";
import { FormControl, Grid, MenuItem, Select, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [year, setYear] = useState("");

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <main id='main' className='main'>
      <div className="pagetitle">
        <h1>Add Product</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i className="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Add Product</li>
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
          marginTop: "80px",
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
          Add Product
        </h4>

        <Grid container spacing={2.5} style={{ marginTop: "2px" }}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <TextField
                id="name"
                label="Product Name"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="description"
                label="Description"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <TextField
                id="category"
                label="Category"
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
                id="quantity"
                label="Quantity"
                type="text"
                variant="outlined"
                fullWidth
                style={{ marginTop: "15px" }}
              />
              <FormControl fullWidth style={{ marginTop: "15px" }}>
                <Select
                  labelId="status-select-label"
                  id="status-select"
                  value={year}
                  displayEmpty
                  onChange={handleChange}
                >
                  <MenuItem disabled value="">
                    Status
                  </MenuItem>
                  <MenuItem value={"in-stock"}>In Stock</MenuItem>
                  <MenuItem value={"out-of-stock"}>Out of Stock</MenuItem>
                </Select>
              </FormControl>
              <button
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "16px",
                  backgroundColor: "#0e2a47",
                  border: "2px solid #0e2a47",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#fff",
                  marginTop: '20px'
                }}
              >
                <NavLink to="/vendor" style={{ color: "#fff", textDecoration: "none" }}>Submit</NavLink>
              </button>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default AddProduct;
