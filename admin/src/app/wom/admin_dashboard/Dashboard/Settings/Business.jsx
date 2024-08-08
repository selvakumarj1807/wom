import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Business = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div id="main" className="main">
      <div> <br />
        <hr />
        <h3 style={{ textAlign: "center", fontSize: '16px' }}>Business Setup</h3>
        <hr />
        <div>
          <Box
            sx={{
              width: '90%',
              maxWidth: '100%',
            }}
          >
            <div style={{ display: 'flex', gap: '40px' }} >
              <TextField fullWidth label="Business Name" id="name" style={{ marginTop: '20px' }} size="small" />
              <TextField fullWidth label="Email" id="email" style={{ marginTop: '20px' }} size="small" />
            </div>
            <div style={{ display: 'flex', gap: '40px' }} >
              <TextField fullWidth label="Mobile Number" id="number" style={{ marginTop: '20px' }} size="small" />
              <TextField fullWidth label="Telephone Number" id="email" style={{ marginTop: '20px' }} size="small" />
            </div>
            <div style={{ display: 'flex', gap: '40px' }} >
              <TextField fullWidth label="Street Address" id="text" style={{ marginTop: '20px' }} size="small" />
              <TextField fullWidth label="Street Address line 2" id="text" style={{ marginTop: '20px' }} size="small" />
            </div>
            <div style={{ display: 'flex', gap: '40px' }} >
              <TextField fullWidth label="City" id="text" style={{ marginTop: '20px' }} size="small" />
              <TextField fullWidth label="Pin Code" id="number" style={{ marginTop: '20px' }} size="small" />
            </div>



          </Box>

          <div>
            {selectedImage && (
              <div>
                <img
                  alt="not found"
                  width={"250px"}
                  src={URL.createObjectURL(selectedImage)}
                  style={{ width: '80px', height: '85px', borderRadius: "50%", border: '1px solid red', marginTop: '20px', marginLeft: '25%' }}
                />
                <br />
                <button style={{ marginTop: '10px', marginLeft: '25%' }} onClick={() => setSelectedImage(null)}>Remove</button>
              </div>
            )}

            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <div>
                <h6 >Logo Change</h6>
                <input
                  type="file"
                  label="logo change"
                  name="myImage"
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                  }}

                />
              </div>
              <div>
                <button style={{ padding: '10px', borderRadius: '10px', color: 'white', backgroundColor: "#002D62", fontWeight: '500' }}>Save changes</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Business