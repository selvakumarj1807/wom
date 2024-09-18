import React, { useEffect, useState } from 'react';
import { FormControl, Grid, MenuItem, Select, Typography, Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Content() {
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');

  const navigate = useNavigate(); // Use navigate to programmatically redirect

  // Event handlers for dropdowns
  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const handleChange1 = (event) => {
    setModel(event.target.value);
  };
  const handleChange2 = (event) => {
    setMake(event.target.value);
  };

  const [dataYear, setDataYear] = useState([]);
  const [dataMake, setDataMake] = useState([]);
  const [dataModel, setDataModel] = useState([]);

  // Fetch functions
  const fetchDataYear = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addYear');
      setDataYear(response.data.addYear);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDataMake = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addMake');
      setDataMake(response.data.addMake);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDataModel = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addModel');
      setDataModel(response.data.addModel);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataYear();
    fetchDataMake();
    fetchDataModel();
  }, []);

  // Handle submit button click
  const handleSubmit = () => {
    // Set session variables
    sessionStorage.setItem('year', year);
    sessionStorage.setItem('make', make);
    sessionStorage.setItem('model', model);

    // Navigate to the new page
    navigate(`/partinformation?year=${year}&make=${make}&model=${model}`);
  };

  return (
    <Box p={2}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            border={4}
            borderColor="black"
            p={4}
            borderRadius={2}
            boxShadow={3}
            textAlign="center"
          >
            <Typography variant="h4" fontWeight={650}>
              Recycle Engine Market
            </Typography>
            <hr style={{ margin: '8px 0' }} />
            <Grid container spacing={2.5}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    value={year}
                    onChange={handleChange}
                  >
                    <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                      Select Year
                    </MenuItem>
                    {dataYear.length > 0 ? (
                      dataYear.map((elem, index) => (
                        <MenuItem key={index} value={elem.year}>{elem.year}</MenuItem>
                      ))
                    ) : (
                      <MenuItem value="">No Year</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    value={make}
                    onChange={handleChange2}
                  >
                    <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                      Select Make
                    </MenuItem>
                    {dataMake.length > 0 ? (
                      dataMake.map((elem, index) => (
                        <MenuItem key={index} value={elem.make}>{elem.make}</MenuItem>
                      ))
                    ) : (
                      <MenuItem value="">No Make</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    value={model}
                    onChange={handleChange1}
                  >
                    <MenuItem disabled value="" sx={{ color: 'text.secondary' }}>
                      Select Model
                    </MenuItem>
                    {dataModel.length > 0 ? (
                      dataModel.map((elem, index) => (
                        <MenuItem key={index} value={elem.model}>{elem.model}</MenuItem>
                      ))
                    ) : (
                      <MenuItem value="">No Model</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    fontSize: 16,
                    backgroundColor: '#0e2a47',
                    border: '2px solid #0e2a47',
                    padding: 1,
                    borderRadius: 2,
                    color: '#fff',
                    width: '50%',
                    mx: 'auto'
                  }}
                  onClick={handleSubmit} // Set the onClick handler here
                >
                  <span style={{ color: '#fff', textDecoration: 'none', width: '100%', textAlign: 'center' }}>
                    Submit
                  </span>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <img
            src="https://car-images.bauersecure.com/wp-images/2434/03-ford-mustang.jpg"
            alt=""
            style={{ maxWidth: '100%', borderRadius: 10 }}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="space-around" flexWrap="wrap" mt={2}>
          {['https://logohistory.net/wp-content/uploads/2023/01/Hyundai-Logo.png', 'https://logohistory.net/wp-content/uploads/2023/01/Audi-Symbol-1536x864.png', 'https://logohistory.net/wp-content/uploads/2023/01/Jaguar-Logo-2001-1536x864.png', 'https://logohistory.net/wp-content/uploads/2023/01/BMW-Emblem-1536x864.png', 'https://logohistory.net/wp-content/uploads/2023/01/Ford-Emblem-1536x864.png'].map((src, index) => (
            <img key={index} src={src} alt="" style={{ maxWidth: '100px', margin: '0 10px', maxHeight: '50px' }} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
