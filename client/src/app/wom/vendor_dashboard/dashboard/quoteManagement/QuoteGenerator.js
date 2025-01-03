import {
    Container,
    Grid,
    TextField,
    Button,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
    useMediaQuery,
    Box,
    Typography,
    Input
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from 'js-cookie';

const QuoteGenerator = () => {
    const emailCookie = Cookies.get('email');
    const location = useLocation(); // Move useLocation outside of useEffect

    const [enquiryNo, setEnquiryNo] = useState('');
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const storedEnquiryNo = queryParams.get('enquiryNo');
        console.log("Captured enquiryNo from URL:", storedEnquiryNo); // Add this for debugging
        setEnquiryNo(storedEnquiryNo);
    }, [location.search]);

    const [quoteData, setQuoteData] = useState({
        customerName: '',
        quoteNumber: '',
        items: [{ productname: '', description: '', quantity: '', price: '' }],
        attachedFile: null, // Handle a single file
        enquiryNo: enquiryNo || '',
        email: emailCookie || '', // Initialize with email from cookie
    });

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const items = [...quoteData.items];
        items[index][name] = value;
        setQuoteData({ ...quoteData, items });
    };

    const handleAddItem = () => {
        setQuoteData({
            ...quoteData,
            items: [...quoteData.items, { productname: '', description: '', quantity: '', price: '' }],
        });
    };

    const handleRemoveItem = (index) => {
        const items = [...quoteData.items];
        items.splice(index, 1);
        setQuoteData({ ...quoteData, items });
    };

    const [successMessage, setSuccessMessage] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first file selected
        setQuoteData({ ...quoteData, attachedFile: file }); // Update the file in the state
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formatDate = (date) => {
            const d = new Date(date);
            const day = d.getDate().toString().padStart(2, '0');
            const month = (d.getMonth() + 1).toString().padStart(2, '0');
            const year = d.getFullYear();
            const hours = d.getHours().toString().padStart(2, '0');
            const minutes = d.getMinutes().toString().padStart(2, '0');
            const period = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
            return `${day}/${month}/${year} - ${formattedHours}:${minutes} ${period}`;
        };
        const quoteDate = formatDate(new Date());

        const formData = new FormData();
        formData.append('customerName', quoteData.customerName);
        formData.append('quoteNumber', quoteData.quoteNumber);
        formData.append('quoteDate', quoteDate);
        formData.append('enquiryNumber', enquiryNo);
        formData.append('items', JSON.stringify(quoteData.items));
        formData.append('attachedFile', quoteData.attachedFile);
        formData.append('email', quoteData.email);

        try {
            const response = await axios.post(
                "https://wom-server.onrender.com/api/v1/vendor/vendorQuote/new",
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );
            if (response.status === 201) {
                setSuccessMessage("Quote sent successfully!");
                console.log("Quote created successfully", response.data);
            }
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (err) {
            console.error("Error submitting data:", err);
        }
    };

    const styles = {
        formContainer: { marginTop: '50px' },
        formHeader: { textAlign: 'center', fontWeight: 'bold', marginBottom: '30px' },
        formGroup: { marginBottom: '30px' },
        table: { width: '100%', borderCollapse: 'collapse' },
        tableHeader: { backgroundColor: '#f8f9fa' },
        tableCell: { padding: '10px', border: '1px solid #dee2e6' },
        buttonGroup: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' },
        button: { padding: '10px 20px', marginTop: '25px', cursor: 'pointer', backgroundColor: '#007bff', border: 'none', color: '#fff', borderRadius: '4px' },
        fileInput: { display: 'block', width: '100%', padding: '10px', marginTop: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#f8f9fa' },
    };

    return (
        <main id='main' className='main'>
            {successMessage && (
                <div style={{
                    height: '30px', backgroundColor: 'lightgreen', display: 'flex', alignItems: 'center',
                    fontSize: '18px', paddingLeft: '30px', position: 'fixed', top: '60px', width: '100%', zIndex: 1000
                }}>
                    {successMessage}
                </div>
            )}

            <div className="pagetitle">
                <h1>Quote Generator</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to=" ">
                                <i className="bi bi-card-checklist"></i>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">Quote Generator</li>
                    </ol>
                </nav>
            </div>

            <Container>
                <div style={styles.formContainer}>
                    <h2 style={styles.formHeader}>Create Quote</h2>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} style={styles.formGroup}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Customer Name"
                                    variant="outlined"
                                    fullWidth
                                    name="customerName"
                                    value={quoteData.customerName}
                                    onChange={(e) => setQuoteData({ ...quoteData, customerName: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Quote Number"
                                    variant="outlined"
                                    fullWidth
                                    name="quoteNumber"
                                    value={quoteData.quoteNumber}
                                    onChange={(e) => setQuoteData({ ...quoteData, quoteNumber: e.target.value })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input
                                    type="file"
                                    sx={styles.fileInput}
                                    onChange={handleFileChange}
                                />
                            </Grid>
                        </Grid>

                        {isMobile ? (
                            <Box>
                                {quoteData.items.map((item, index) => (
                                    <Box key={index} mb={2} p={2} border={1} borderRadius={4}>
                                        <Typography variant="h6">Item {index + 1}</Typography>
                                        <TextField
                                            label="Product Name"
                                            variant="outlined"
                                            fullWidth
                                            name="productname"
                                            value={item.productname}
                                            onChange={(e) => handleInputChange(index, e)}
                                            margin="normal"
                                        />
                                        <TextField
                                            label="Description"
                                            variant="outlined"
                                            fullWidth
                                            name="description"
                                            value={item.description}
                                            onChange={(e) => handleInputChange(index, e)}
                                            margin="normal"
                                        />
                                        <TextField
                                            label="Quantity"
                                            type="number"
                                            variant="outlined"
                                            fullWidth
                                            name="quantity"
                                            value={item.quantity}
                                            onChange={(e) => handleInputChange(index, e)}
                                            margin="normal"
                                        />
                                        <TextField
                                            label="Price"
                                            type="number"
                                            variant="outlined"
                                            fullWidth
                                            name="price"
                                            value={item.price}
                                            onChange={(e) => handleInputChange(index, e)}
                                            margin="normal"
                                        />
                                        <IconButton onClick={() => handleRemoveItem(index)} sx={{ color: 'red', mt: 1 }}>
                                            <Delete />
                                        </IconButton>
                                    </Box>
                                ))}
                            </Box>
                        ) : (
                            <Table style={styles.table}>
                                <TableHead style={styles.tableHeader}>
                                    <TableRow>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Remove</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {quoteData.items.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    name="productname"
                                                    value={item.productname}
                                                    onChange={(e) => handleInputChange(index, e)}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    name="description"
                                                    value={item.description}
                                                    onChange={(e) => handleInputChange(index, e)}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    type="number"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="quantity"
                                                    value={item.quantity}
                                                    onChange={(e) => handleInputChange(index, e)}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    type="number"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="price"
                                                    value={item.price}
                                                    onChange={(e) => handleInputChange(index, e)}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleRemoveItem(index)} sx={{ color: 'red' }}>
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                            onClick={handleAddItem}
                        >
                            Add Item
                        </Button>
                        <Button
                            variant="contained"
                            color="success"
                            fullWidth
                            sx={{ mt: 2 }}
                            type="submit"
                        >
                            Submit Quote
                        </Button>
                    </form>
                </div>
            </Container>
        </main>
    );
};

export default QuoteGenerator;
