import { useState } from 'react';
import { FormControl, Grid, MenuItem, Select, Stack, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

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

                    <MenuItem value={2024}>2024</MenuItem>
                    <MenuItem value={2023}>2023</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                    <MenuItem value={2016}>2016</MenuItem>
                    <MenuItem value={2015}>2015</MenuItem>
                    <MenuItem value={2014}>2014</MenuItem>
                    <MenuItem value={2013}>2013</MenuItem>
                    <MenuItem value={2012}>2012</MenuItem>
                    <MenuItem value={2011}>2011</MenuItem>
                    <MenuItem value={2010}>2010</MenuItem>
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
                    <MenuItem value={"AMC"}>AMC</MenuItem>
                    <MenuItem value={"Acura"}>Acura</MenuItem>
                    <MenuItem value={"Alfa"}>Alfa</MenuItem>
                    <MenuItem value={"Audi"}>Audi</MenuItem>
                    <MenuItem value={"BMW"}>BMW</MenuItem>
                    <MenuItem value={"Buick"}>Buick</MenuItem>
                    <MenuItem value={"Ford"}>Ford</MenuItem>
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
                    <MenuItem value={"Ambassador"}>Ambassador</MenuItem>
                    <MenuItem value={"American"}>American</MenuItem>
                    <MenuItem value={"Amx"}>Amx</MenuItem>
                    <MenuItem value={"Classic"}>Classic</MenuItem>
                    <MenuItem value={"RDX"}>RDX</MenuItem>
                    <MenuItem value={"RL"}>RL</MenuItem>
                    <MenuItem value={"RSX"}>RSX</MenuItem>
                    <MenuItem value={"147"}>147</MenuItem>
                    <MenuItem value={"GTV6"}>GTV6</MenuItem>
                    <MenuItem value={"Mito"}>Mito</MenuItem>
                    <MenuItem value={"A3"}>A3</MenuItem>
                    <MenuItem value={"A4"}>A4</MenuItem>
                    <MenuItem value={"Q3"}>Q3</MenuItem>
                    <MenuItem value={"R8"}>R8</MenuItem>
                    <MenuItem value={"RS3"}>RS3</MenuItem>
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
                  <NavLink to="/partinformation" style={{ color: '#fff', textDecoration: 'none', width: '100%', textAlign: 'center' }}>
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
