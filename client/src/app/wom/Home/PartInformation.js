import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { FormControl, Grid, MenuItem, Select, Stack, TextField, Box, Button, Typography } from '@mui/material';
import Footer from "./Footer";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PartInformation = () => {
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState({
    contactName: '',
    email: '',
    mobileNumber: '',
    postalCode: '',
    shippingMethod: '',
    state: '',
    additionalNotes: ''
  });
  const [enquiryNumber, setEnquiryNumber] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const year1 = queryParams.get('year');
  const make = queryParams.get('make');
  const model = queryParams.get('model');

  const [adminGmail, setAdminGmail] = useState(''); // To store admin Gmail
  const [gmailSubject, setGmailSubject] = useState(''); // To store the email subject

  // Fetch shipping methods data
  const fetchData = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addShippingMethod');
      setData(response.data.addShippingMethod);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Fetch admin Gmail and subject when the component mounts
  const fetchDataGmail = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/adminGmail');
      const fetchedData = response.data.adminGmail;

      // Assuming there's only one email and subject in the fetchedData
      setAdminGmail(fetchedData[0]?.adminGmail); // Default if not found
      setGmailSubject(fetchedData[0]?.gmailSubject);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataGmail();
  }, []);


  // Handle form submission
  const handleFormSubmission = async () => {
    // Generate a 4-digit enquiry number
    const generatedEnquiryNumber = String(Math.floor(Math.random() * 9000) + 1000); // Generates a number between 1000 and 9999
    const formattedEnquiryNumber = `ENQ${generatedEnquiryNumber}`;
    setEnquiryNumber(formattedEnquiryNumber);

    const formatDate = (date) => {
      const d = new Date(date);

      // Get day, month, year, hours, and minutes
      const day = d.getDate().toString().padStart(2, '0');
      const month = (d.getMonth() + 1).toString().padStart(2, '0');
      const year = d.getFullYear();
      const hours = d.getHours().toString().padStart(2, '0');
      const minutes = d.getMinutes().toString().padStart(2, '0');
      const period = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');

      return `${day}/${month}/${year} - ${formattedHours}:${minutes} ${period}`;
    };

    // Example usage
    const createdAt = new Date(); // Date from database
    const formatDateTime = formatDate(createdAt); // Outputs: 15/09/2024 - 01:15 AM

    try {
      // Submit form data to the server
      const response = await axios.post("https://wom-server.onrender.com/api/v1/user/enquiry/new", {
        year: year1,
        make: make,
        model: model,
        enquiryNumber: formattedEnquiryNumber,
        enquiryDate: formatDateTime,
        ...formValues,
      });

      // If form submission is successful, send the email
      if (response.status === 200 || response.status === 201) {

        const emailBody = `New Enquiry Number: ${formattedEnquiryNumber}`;

        // Send email
        const emailResponse = await axios.post('https://wom-server.onrender.com/send-email', {
          to: adminGmail,
          subject: gmailSubject,
          text: emailBody,
        });

        if (emailResponse.status === 200) {
          console.log("Email sent successfully");
        } else {
          console.error("Error sending email:", emailResponse.statusText);
        }

        setIsPopupOpen(true);
      }
    } catch (error) {
      console.error("Error submitting form or sending email:", error);
    }
  };

  // Handle submit button click
  const handleSubmit = () => {
    setShowRegisterPopup(true);
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
    width: '120px',
    height: '40px'
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
              <Typography variant="h6" sx={{ ml: 1, color: 'red' }}>{year1}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h5">Make - </Typography>
              <Typography variant="h6" sx={{ ml: 1, color: 'red' }}>{make}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h5">Model - </Typography>
              <Typography variant="h6" sx={{ ml: 1, color: 'red' }}>{model}</Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="h5" align="center" fontWeight="bold" sx={{ border: 1, p: 1, mt: 2 }}>Required Information</Typography>

        <Grid container spacing={2.5} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <TextField name="contactName" label="Contact Name" variant="outlined" onChange={handleInputChange} />
              <TextField name="email" label="Email Id" type="email" variant="outlined" onChange={handleInputChange} />
              <TextField name="mobileNumber" label="Mobile Number" type="number" variant="outlined" onChange={handleInputChange} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <TextField name="postalCode" label="Postal (Zip) Code" variant="outlined" onChange={handleInputChange} />
              <FormControl fullWidth>
                <Select
                  name="shippingMethod"
                  displayEmpty
                  value={formValues.shippingMethod}
                  onChange={handleInputChange}
                >
                  <MenuItem disabled value="">Shipping Method</MenuItem>
                  {data.length > 0 ? (
                    data.map((elem, index) => (
                      <MenuItem key={index} value={elem.shippingMethod}>{elem.shippingMethod}</MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">No Shipping Method</MenuItem>
                  )}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <Select
                  name="state"
                  displayEmpty
                  value={formValues.state}
                  onChange={handleInputChange}
                >
                  <MenuItem disabled value="">State/Province</MenuItem>
                  <MenuItem value="tn">Tamil Nadu</MenuItem>
                  <MenuItem value="kerala">Kerala</MenuItem>
                  <MenuItem value="karnataka">Karnataka</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="additionalNotes"
              label="Additional Notes and Comments..."
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button component={NavLink} to="/home" sx={buttonStyle}>Back</Button>
            <Button sx={buttonStyle} onClick={handleSubmit}>Submit</Button>
          </Grid>
        </Grid>
      </Box>

      {/* Register or Not Popup */}
      <Popup open={showRegisterPopup} modal nested onClose={() => setShowRegisterPopup(false)}>
        <Box sx={{ height: '20vh', p: 2, backgroundColor: 'rgba(46, 46, 46, 0.8)', color: '#fff' }}>
          <Typography variant="h6" align="center">Do you want to Register as a User?</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <Button component={Link} to="/session/UserSignup" sx={buttonStyle}>
              Yes
            </Button>
            <Button
              sx={{ ...buttonStyle, color: '#FF3131' }}
              onClick={() => {
                setShowRegisterPopup(false); // Close the current popup
                handleFormSubmission(); // Submit the form and generate enquiry number
              }}
            >
              No
            </Button>
          </Box>
        </Box>
      </Popup>

      {/* Enquiry Submission Popup */}
      <Popup open={isPopupOpen} modal nested>
        <Box sx={{ height: '40vh', p: 2, textAlign: 'center', backgroundColor: 'rgba(46, 46, 46, 0.9)', color: '#fff' }}>
          <img
            src="https://media.istockphoto.com/id/1079725292/vector/green-tick-checkmark-vector-icon-for-checkbox-marker-symbol.jpg?s=612x612&w=0&k=20&c=OvOpxX8ZFuc5NufZTJDbpwGKvgFUmfZjY68MICmEzX4="
            alt="Success"
            width="100px"
            height="100px"
            style={{ margin: '0 auto', display: 'block' }}
          />
          <Typography variant="h6" align="center">Email has been sent Successfully</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Enquiry Number: <span style={{ color: 'white', fontWeight: '600' }}>{enquiryNumber}</span>
          </Typography>
          <Button component={Link} to="/" sx={{ mt: 3, backgroundColor: '#0e2a47', color: '#fff', px: 3, py: 1, borderRadius: 1 }}>
            Done
          </Button>
        </Box>
      </Popup>

      <Testimonial />
      <Footer />
    </Box>
  );
};

export default PartInformation;
