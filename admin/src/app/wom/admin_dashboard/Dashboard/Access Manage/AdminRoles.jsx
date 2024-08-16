import React from "react";
import { FormControl, Grid, MenuItem, Select, Stack, Checkbox, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const AddProduct = () => {
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [employeeType, setEmployeeType] = useState("");

  const handlePermissionChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedPermissions(typeof value === 'string' ? value.split(',') : value);
  };

  const handleEmployeeTypeChange = (event) => {
    setEmployeeType(event.target.value);
  };

  return (
    <main id="main" className="main">
      <div
        className="text"
        style={{
          border: "4px solid black",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "5px 3px",
          marginTop: "50px",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "800px", // Center and limit the width for better alignment
        }}
      >
        <h4
          style={{
            textAlign: "center",
            fontWeight: "650",
            border: "2px solid black",
            padding: "10px",
            marginBottom: "20px", // Added margin-bottom for better spacing
          }}
        >
          Add Employee
        </h4>

        <Grid container spacing={2.5}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={2}>
              <TextField
                id="name"
                label="Employee Name"
                type="text"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="Mobile"
                label="Mobile"
                type="text"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="Email"
                label="Email"
                type="text"
                variant="outlined"
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={2}>
              <TextField
                id="Password"
                label="Password"
                type="password" // Changed type to "password" for security
                variant="outlined"
                fullWidth
              />
              <FormControl fullWidth>
                <Select
                  labelId="employee-type-select-label"
                  id="employee-type-select"
                  value={employeeType}
                  displayEmpty
                  onChange={handleEmployeeTypeChange}
                >
                  <MenuItem disabled value="">
                    Employee Type
                  </MenuItem>
                  <MenuItem value={"Admin"}>Admin</MenuItem>
                  <MenuItem value={"Manager"}>Manager</MenuItem>
                  <MenuItem value={"Receptionist"}>Receptionist</MenuItem>
                  <MenuItem value={"Supervisor"}>Supervisor</MenuItem>
                  <MenuItem value={"GM"}>General Manager</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <Select
                  labelId="roles-permission-select-label"
                  id="roles-permission-select"
                  value={selectedPermissions}
                  displayEmpty
                  onChange={handlePermissionChange}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Roles Permission</em>;
                    }
                    return selected.join(', ');
                  }}
                  multiple
                >
                  <MenuItem disabled value="">
                    <em>Roles Permission</em>
                  </MenuItem>
                  <MenuItem value={"Permission 01"}>
                    <Checkbox checked={selectedPermissions.indexOf("Permission 01") > -1} />
                    <ListItemText primary="Permission 01" />
                  </MenuItem>
                  <MenuItem value={"Permission 02"}>
                    <Checkbox checked={selectedPermissions.indexOf("Permission 02") > -1} />
                    <ListItemText primary="Permission 02" />
                  </MenuItem>
                  <MenuItem value={"Permission 03"}>
                    <Checkbox checked={selectedPermissions.indexOf("Permission 03") > -1} />
                    <ListItemText primary="Permission 03" />
                  </MenuItem>
                  <MenuItem value={"Permission 04"}>
                    <Checkbox checked={selectedPermissions.indexOf("Permission 04") > -1} />
                    <ListItemText primary="Permission 04" />
                  </MenuItem>
                </Select>
              </FormControl>

            </Stack>
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <button
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "16px",
                  backgroundColor: "#0e2a47",
                  border: "2px solid #0e2a47",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  color: "#fff",
                  cursor: "pointer", // Added cursor pointer for better UX
                }}
              >
                <NavLink
                  to="/Admin"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Submit
                </NavLink>
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default AddProduct;
