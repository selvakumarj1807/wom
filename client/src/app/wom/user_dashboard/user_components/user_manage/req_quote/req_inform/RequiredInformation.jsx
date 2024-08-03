import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { FormControl, Grid, MenuItem, Select, Stack, TextField, Box, Button, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const PartInformation = () => {
  const [year, setYear] = useState('');

  const handleChange = (event) => {
    setYear(event.target.value);
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
    <Box className="home" sx={{ padding: { xs: 2, md: 4 } }}>
      <Box id="main" className="main">
        <Box className="pagetitle" sx={{ mb: 3 }}>
          <Typography variant="h4" component="h1">Required Information</Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <MuiLink component={Link} to="/" underline="hover" color="inherit">
              <InfoIcon fontSize="small" />
            </MuiLink>
            <Typography color="text.primary">Required Information</Typography>
          </Breadcrumbs>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>


        <Box sx={{ border: '4px solid black', padding: 2, borderRadius: 1, boxShadow: 3, mt: 3, mx: { xs: 1, md: 3 }, maxWidth: '800px', width: '100%' }}>
          <Typography variant="h5" align="center" fontWeight="bold" sx={{ border: 1, p: 1, mt: 2 }}>Part Information</Typography>
          <br></br>
          <div className="row gx-3 gy-2 align-items-center justify-content-center">
            <div className="col-sm-3">
              <label className="visually-hidden" htmlFor="preferenceSelect1">Preference</label>
              <select className="form-select" id="preferenceSelect1">
                <option selected>Select Year</option>
                <option value={2024}>2024</option>
                <option value={2023}>2023</option>
                <option value={2022}>2022</option>
                <option value={2021}>2021</option>
                <option value={2020}>2020</option>
                <option value={2019}>2019</option>
                <option value={2018}>2018</option>
                <option value={2017}>2017</option>
                <option value={2016}>2016</option>
                <option value={2015}>2015</option>
                <option value={2014}>2014</option>
                <option value={2013}>2013</option>
                <option value={2012}>2012</option>
                <option value={2011}>2011</option>
                <option value={2010}>2010</option>
              </select>
            </div>

            <div className="col-sm-3">
              <label className="visually-hidden" htmlFor="preferenceSelect2">Preference</label>
              <select className="form-select" id="preferenceSelect2">
                <option selected>Select Make</option>
                <option value={"AMC"}>AMC</option>
                <option value={"Acura"}>Acura</option>
                <option value={"Alfa"}>Alfa</option>
                <option value={"Audi"}>Audi</option>
                <option value={"BMW"}>BMW</option>
                <option value={"Buick"}>Buick</option>
                <option value={"Ford"}>Ford</option>
              </select>
            </div>

            <div className="col-sm-3">
              <label className="visually-hidden" htmlFor="preferenceSelect3">Preference</label>
              <select className="form-select" id="preferenceSelect3">
                <option selected>Select Model</option>
                <option value={"Ambassador"}>Ambassador</option>
                <option value={"American"}>American</option>
                <option value={"Amx"}>Amx</option>
                <option value={"Classic"}>Classic</option>
                <option value={"RDX"}>RDX</option>
                <option value={"RL"}>RL</option>
                <option value={"RSX"}>RSX</option>
                <option value={"147"}>147</option>
                <option value={"GTV6"}>GTV6</option>
                <option value={"Mito"}>Mito</option>
                <option value={"A3"}>A3</option>
                <option value={"A4"}>A4</option>
                <option value={"Q3"}>Q3</option>
                <option value={"R8"}>R8</option>
                <option value={"RS3"}>RS3</option>
              </select>
            </div>
          </div>
          <Typography variant="h5" align="center" fontWeight="bold" sx={{ border: 1, p: 1, mt: 2 }}>Required Information</Typography>

          <Grid container spacing={2.5} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <TextField id="name" label="Contact Name" type="text" variant="outlined" />
                <TextField id="email" label="Email Id" type="email" variant="outlined" />
                <TextField id="phno" label="Mobile Number" type="number" variant="outlined" />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <TextField id="zip" label="Postal (Zip) Code" variant="outlined" />
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    displayEmpty
                    id="demo-simple-select"
                    value={year}
                    onChange={handleChange}
                  >
                    <MenuItem disabled value="">
                      Shipping Method
                    </MenuItem>
                    <MenuItem value={"option1"}>Option-1</MenuItem>
                    <MenuItem value={"option2"}>Option-2</MenuItem>
                    <MenuItem value={"option3"}>Option-3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    displayEmpty
                    id="demo-simple-select"
                    value={year}
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
            <Grid item xs={12}>
              <TextField
                id="notes"
                label="Additional Notes and Comments..."
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button component={NavLink} to="/UserDashboard" sx={buttonStyle}>
                Back
              </Button>
              <Popup
                trigger={
                  <Button sx={buttonStyle}>
                    Submit
                  </Button>
                }
                modal
                nested
              >
                {(close) => (
                  <Box sx={{ height: '20vh', p: 2, backgroundColor: 'rgba(46, 46, 46, 0.8)', color: '#fff' }}>
                    <Typography variant="h6" align="center">Do you want to Register as a User?</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                      <Button component={Link} to="/UserDashboard" sx={buttonStyle}>
                        NO
                      </Button>
                      <Popup
                        trigger={
                          <Button
                            sx={{
                              ...buttonStyle,
                              color: '#fff' // Specific color for the 'No' button
                            }}
                          >
                            Yes
                          </Button>
                        }
                        modal
                        nested
                      >
                        {(close) => (
                          <Box sx={{ height: '40vh', p: 2, textAlign: 'center', backgroundColor: 'rgba(46, 46, 46, 0.9)', color: '#fff' }}>
                            <img
                              src="https://media.istockphoto.com/id/1079725292/vector/green-tick-checkmark-vector-icon-for-checkbox-marker-symbol.jpg?s=612x612&w=0&k=20&c=OvOpxX8ZFuc5NufZTJDbpwGKvgFUmfZjY68MICmEzX4="
                              alt="Success"
                              width="100px"
                              height="100px"
                              style={{ margin: '0 auto', display: 'block' }}
                            />
                            <Typography variant="h6" sx={{ mt: 2 }}>Email has been sent</Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                              Enquiry Number <span style={{ color: 'blue', fontWeight: '600' }}>#256</span>
                            </Typography>
                            <Button component={Link} to="/UserDashboard" sx={{ mt: 3, backgroundColor: '#0e2a47', color: '#fff', px: 3, py: 1, borderRadius: 1 }}>
                              Done
                            </Button>
                          </Box>
                        )}
                      </Popup>
                    </Box>
                  </Box>
                )}
              </Popup>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default PartInformation;
