import React, { useEffect, useState } from 'react';
import { FormControl, Grid, MenuItem, Select, Stack, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';


import Cookies from 'js-cookie';

const AddProduct = () => {

    const location = useLocation();  // Move useLocation outside of useEffect
    const [productId, setProductId] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const storedProductId = queryParams.get('id');

        // Set the retrieved values to state
        setProductId(storedProductId);

    }, [location.search]);  // Re-run when location.search changes


    const [successMessage, setSuccessMessage] = useState('');

    const emailCookie = Cookies.get('email');

    const [status, setStatus] = useState('');

    const fetchDataStatus = async () => {
        try {
            // Make a GET request to fetch the updated list of years
            const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addStatus');

            // Extract the array from the response (assuming it's called addYear)
            const fetchedData = response.data.addstatus;

            // Update the state that the table uses
            setStatus(fetchedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    useEffect(() => {
        fetchDataStatus();
    }, []);

    const [category, setCategory] = useState('');


    const fetchDataCategory = async () => {
        try {
            // Make a GET request to fetch the updated list of years
            const response = await axios.get('https://wom-server.onrender.com/api/v1/masterManagement/addCategory');

            // Extract the array from the response (assuming it's called addYear)
            const fetchedData = response.data.addCategory;

            // Update the state that the table uses
            setCategory(fetchedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    useEffect(() => {
        fetchDataCategory();
    }, []);

    const [formValues, setFormValues] = useState({
        productName: '',
        description: '',
        quantity: '',
        category: '',
        status: '',
    });

    // Handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const navigate = useNavigate(); // Initialize the navigate hook

    // Handle form submission
    const handleFormSubmission = async () => {

        try {
            const response = await axios.put(`https://wom-server.onrender.com/api/v1/vendor/product/${productId}`, {
                email: emailCookie,
                ...formValues
            });

            if (response.status === 200 || response.status === 201) {
                setSuccessMessage('Successfully updated!');
            }

            setTimeout(() => {
                navigate('/vendor/product/list');
            }, 2000);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`https://wom-server.onrender.com/api/v1/vendor/product/${productId}`);
            const fetchedData = response.data.product;
            setFormValues(fetchedData);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [productId]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);



    return (
        <main id='main' className='main'>
            <div className="pagetitle">
                {successMessage && <div style={styles.successMessage}>{successMessage}</div>}

                <h1>Edit Product</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to=" " className="a">
                                <i className="bi bi-card-checklist"></i>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">Edit Product</li>
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
                    Edit Product
                </h4>

                <Grid container spacing={2.5} style={{ marginTop: "2px" }}>
                    {/* Left column */}
                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1}>
                            <TextField
                                id="name"
                                label="Product Name"
                                name='productName'
                                value={formValues.productName}
                                type="text"
                                variant="outlined"
                                fullWidth
                                style={{ marginTop: "15px" }}
                                onChange={handleInputChange}
                            />
                            <TextField
                                id="description"
                                label="Description"
                                name='description'
                                value={formValues.description}
                                type="text"
                                variant="outlined"
                                fullWidth
                                style={{ marginTop: "15px" }}
                                onChange={handleInputChange}
                            />
                            <FormControl fullWidth style={{ marginTop: "15px" }}>
                                <Select
                                    name="category"
                                    displayEmpty
                                    value={formValues.category}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem disabled value="">Category</MenuItem>
                                    {category.length > 0 ? (
                                        category.map((elem, index) => (
                                            <MenuItem key={index} value={elem.category}>{elem.category}</MenuItem>
                                        ))
                                    ) : (
                                        <MenuItem value="">No Category</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Stack>
                    </Grid>
                    {/* Right column */}
                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1}>
                            <TextField
                                id="quantity"
                                label="Quantity"
                                name='quantity'
                                value={formValues.quantity}
                                type="text"
                                variant="outlined"
                                fullWidth
                                style={{ marginTop: "15px" }}
                                onChange={handleInputChange}

                            />
                            <FormControl fullWidth style={{ marginTop: "15px" }}>
                                <Select
                                    name="status"
                                    displayEmpty
                                    value={formValues.status}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem disabled value="">Status</MenuItem>
                                    {status.length > 0 ? (
                                        status.map((elem, index) => (
                                            <MenuItem key={index} value={elem.status}>{elem.status}</MenuItem>
                                        ))
                                    ) : (
                                        <MenuItem value="">No Status</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Stack>
                    </Grid>
                    {/* Submit button in a new centered row */}
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" alignItems="center">
                            <Button
                                variant="contained"
                                style={{
                                    fontStyle: "italic",
                                    fontWeight: "bold",
                                    fontSize: "16px",
                                    backgroundColor: "#0e2a47",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    color: "#fff",
                                    width: "130px",
                                    height: "50px"
                                }}
                                onClick={handleFormSubmission}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </main>
    );
};

export default AddProduct;

const styles = {
    successMessage: {
        height: '30px',
        backgroundColor: 'lightgreen',
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        paddingLeft: '30px',
        position: 'fixed',   // Fix the element to the top
        top: '60px',         // Offset from the top by 30px
        width: '100%',       // Optionally set the width to 100% to stretch across the screen
        zIndex: 1000         // Ensure it's above other content if needed
    }

};