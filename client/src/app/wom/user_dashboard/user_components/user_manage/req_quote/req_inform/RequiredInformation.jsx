import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { FormControl, Grid, MenuItem, Select, Stack, TextField, Box, Button, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';

const PartInformation = () => {

  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');
  const [shippingMethod, setShippingMethod] = useState([]);

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


  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const handleChange1 = (event) => {
    setModel(event.target.value);
  };
  const handleChange2 = (event) => {
    setMake(event.target.value);
  };

  useEffect(() => {
    // Retrieve values from session storage
    const storedYear = sessionStorage.getItem('year');
    const storedMake = sessionStorage.getItem('make');
    const storedModel = sessionStorage.getItem('model');

    // Set the retrieved values to state
    setYear(storedYear);
    setMake(storedMake);
    setModel(storedModel);
  }, []);


  const [dataYear, setDataYear] = useState([]);

  const fetchDataYear = async () => {
    try {
      // Make a GET request to fetch the updated list of years
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addYear');

      // Extract the array from the response (assuming it's called addYear)
      const fetchedData = response.data.addYear;

      // Update the state that the table uses
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
      // Make a GET request to fetch the updated list of years
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addMake');

      // Extract the array from the response (assuming it's called addYear)
      const fetchedDataMake = response.data.addMake;

      // Update the state that the table uses
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
      // Make a GET request to fetch the updated list of years
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addModel');

      // Extract the array from the response (assuming it's called addYear)
      const fetchedDataModel = response.data.addModel;

      // Update the state that the table uses
      setDataModel(fetchedDataModel);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchDataModel();
  }, []);

  // Fetch shipping methods data
  const fetchDataShippingMethod = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addShippingMethod');
      setShippingMethod(response.data.addShippingMethod);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataShippingMethod();
  }, []);


  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const [adminGmail, setAdminGmail] = useState(''); // To store admin Gmail
  const [gmailSubject, setGmailSubject] = useState(''); // To store the email subject


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
      const response = await axios.post("https://wom-server.onrender.com/api/v1/user/enquiry/new", {
        year: year,
        make: make,
        model: model,
        enquiryNumber: formattedEnquiryNumber,
        enquiryDate: formatDateTime,
        ...formValues
      });

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
      console.error("Error submitting form:", error);
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
    width: '120px', // Ensure consistent width
    height: '40px',   // Ensure consistent height
    '&:hover': {
      color: 'blue', // Change background color to blue on hover
    }
  };

  return (
    <div id="main" className="main">
      <div className="pagetitle">
        <h1>Required Information</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i class="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Required Information</li>
          </ol>
        </nav>
      </div>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>


        <Box sx={{ border: '4px solid black', padding: 2, borderRadius: 1, boxShadow: 3, mt: 3, mx: { xs: 1, md: 3 }, maxWidth: '800px', width: '100%' }}>
          <Typography variant="h5" align="center" fontWeight="bold" sx={{ border: 1, p: 1, mt: 2 }}>Part Information</Typography>
          <br></br>
          <div className="row gx-3 gy-2 align-items-center justify-content-center">
            <div className="col-sm-3">
              <label className="visually-hidden" htmlFor="preferenceSelect1">Preference</label>
              <select
                className="form-select"
                id="preferenceSelect1"
                displayEmpty
                value={year}
                onChange={handleChange}>
                <option selected>Select Year</option>
                {dataYear.length > 0 ? (
                  dataYear.map((elem, index) => (
                    <option value={elem.year}>{elem.year}</option>
                  ))
                ) : (
                  <option value="">No Year</option>
                )}
              </select>
            </div>

            <div className="col-sm-3">
              <label className="visually-hidden" htmlFor="preferenceSelect2">Preference</label>
              <select
                className="form-select"
                id="preferenceSelect2"
                displayEmpty
                value={make}
                onChange={handleChange2}>
                <option selected>Select Make</option>
                {dataMake.length > 0 ? (
                  dataMake.map((elem, index) => (
                    <option value={elem.make}>{elem.make}</option>
                  ))
                ) : (
                  <option value="">No Make</option>
                )}
              </select>
            </div>

            <div className="col-sm-3">
              <label className="visually-hidden" htmlFor="preferenceSelect3">Preference</label>
              <select
                className="form-select"
                id="preferenceSelect3"
                displayEmpty
                value={model}
                onChange={handleChange1}>
                <option selected>Select Model</option>
                {dataModel.length > 0 ? (
                  dataModel.map((elem, index) => (
                    <option value={elem.model}>{elem.model}</option>
                  ))
                ) : (
                  <option value="">No Model</option>
                )}
              </select>
            </div>
          </div>
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
                    {shippingMethod.length > 0 ? (
                      shippingMethod.map((elem, index) => (
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
              <Button component={NavLink} to="/user" sx={buttonStyle}>Back</Button>
              <Button sx={buttonStyle} onClick={handleSubmit}>Submit</Button>
            </Grid>
          </Grid>
        </Box>

        {/* Register or Not Popup */}
        <Popup open={showRegisterPopup} modal nested onClose={() => setShowRegisterPopup(false)} >
          <Box sx={{ height: '20vh', p: 2, backgroundColor: 'rgba(46, 46, 46, 0.8)', color: '#fff' }}>
            <Typography variant="h6" align="center">Are you Sure to Sent Enquiry?</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
              <Button
                sx={{ ...buttonStyle }}
                onClick={() => {
                  setShowRegisterPopup(false); // Close the current popup
                  handleFormSubmission(); // Submit the form and generate enquiry number
                }}
              >
                Yes
              </Button>

              <Button component={Link} to="/user" sx={buttonStyle}>
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
            <Button component={Link} to="/user" sx={{ mt: 3, backgroundColor: '#0e2a47', color: '#fff', px: 3, py: 1, borderRadius: 1 }}>
              Done
            </Button>
          </Box>
        </Popup>
      </Box>
    </div>
  );
};

export default PartInformation;
