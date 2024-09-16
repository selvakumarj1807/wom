import React, { useEffect, useState } from 'react';
import { FormControl, Grid, MenuItem, Select, Stack, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Content() {
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');


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
                        <MenuItem value={elem.year}>{elem.year}</MenuItem>
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
                        <MenuItem value={elem.make}>{elem.make}</MenuItem>
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
                        <MenuItem value={elem.model}>{elem.model}</MenuItem>
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
                    width: '50%', // Adjust the width as needed
                    mx: 'auto' // Centers the box horizontally
                  }}
                >
                  <NavLink to={`/partinformation?year=${year}&make=${make}&model=${model}`} style={{ color: '#fff', textDecoration: 'none', width: '100%', textAlign: 'center' }}>
                    Submit
                  </NavLink>
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
