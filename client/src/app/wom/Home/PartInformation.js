import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { FormControl, Grid, MenuItem, Select, Stack, TextField, Box, Button, Typography } from '@mui/material';
import Footer from "./Footer";
import Navbar from "./Navbar";
import Section from "./Section";
import Testimonial from "./Testimonial";

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
    height: '40px'   // Ensure consistent height
  };

  return (
    <Box className="home" sx={{ padding: { xs: 2, md: 4 } }}>
      <Navbar />
      <Box sx={{ border: '4px solid black', padding: 3, borderRadius: 1, boxShadow: 3, mt: 5, mx: { xs: 1, md: 5 } }}>
        <Typography variant="h5" align="center" fontWeight="bold" sx={{ border: 1, p: 1, mt: 2 }}>Part Information</Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h5">Year - </Typography>
              <Typography variant="h6" sx={{ ml: 1, color: 'red' }}>2009</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h5">Make - </Typography>
              <Typography variant="h6" sx={{ ml: 1, color: 'red' }}>Audi</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h5">Model - </Typography>
              <Typography variant="h6" sx={{ ml: 1, color: 'red' }}>A4</Typography>
            </Box>
          </Grid>
        </Grid>

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
            <Button component={NavLink} to="/home" sx={buttonStyle}>
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
                    <Button component={Link} to="/session/UserSignin" sx={buttonStyle}>
                      Yes
                    </Button>
                    <Popup
                      trigger={
                        <Button
                          sx={{
                            ...buttonStyle,
                            color: '#FF3131' // Specific color for the 'No' button
                          }}
                        >
                          No
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
                          <Button component={Link} to="/" sx={{ mt: 3, backgroundColor: '#0e2a47', color: '#fff', px: 3, py: 1, borderRadius: 1 }}>
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
      <Section />
      <Testimonial />
      <Footer />
    </Box>
  );
};

export default PartInformation;
