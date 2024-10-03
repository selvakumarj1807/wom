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
            attachedFile: null, // Change this to handle a single file
            enquiryNo: enquiryNo || '',
            email: emailCookie || '', // Initialize with the email from cookie
        });


        const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

        const handleInputChange = (index, event) => {
            const { name, value } = event.target;
            const items = [...quoteData.items];
            items[index][name] = value;
            setQuoteData({...quoteData, items });
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
            setQuoteData({...quoteData, items });
        };


        const [successMessage, setSuccessMessage] = useState('');

        const handleFileChange = (e) => {
            const file = e.target.files[0]; // Get the first file selected
            setQuoteData({...quoteData, attachedFile: file }); // Update the file in the state
        };



        const handleSubmit = async(event) => {
            event.preventDefault();

            // Generate a 4-digit quote number
            const generatedQuoteNumber = String(Math.floor(Math.random() * 9000) + 1000); // Generates a number between 1000 and 9999
            const formattedQuoteNumber = `QUOTE${generatedQuoteNumber}`;

            // Format the date
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
            const quoteDate = formatDate(new Date()); // Get the current formatted date

            // Prepare formData to send via Axios
            const formData = new FormData(); // FormData for handling file uploads
            formData.append('customerName', quoteData.customerName);
            formData.append('quoteNumber', formattedQuoteNumber); // Use the formatted quote number
            formData.append('quoteDate', quoteDate); // Add the formatted date
            formData.append('enquiryNumber', enquiryNo); // Append enquiryNo from state
            formData.append('items', JSON.stringify(quoteData.items)); // Convert items array to a string
            formData.append('attachedFile', quoteData.attachedFile); // Append the selected file
            formData.append('email', quoteData.email); // Append the selected file

            try {
                const response = await axios.post(
                    "https://wom-server.onrender.com/api/v1/vendor/vendorQuote/new",
                    formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data', // Important for sending files
                        },
                    }
                );
                if (response.status === 201) {
                    setSuccessMessage("Quote sent Successfully!");
                    console.log("Quote created successfully", response.data);
                }

                // Optionally reload or redirect after 2 seconds
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } catch (err) {
                console.error("Error submitting data:", err);
            }
        };



        const styles = {
            formContainer: {
                marginTop: '50px',
            },
            formHeader: {
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: '30px',
            },
            formGroup: {
                marginBottom: '30px',
            },
            table: {
                width: '100%',
                borderCollapse: 'collapse',
            },
            tableHeader: {
                backgroundColor: '#f8f9fa',
            },
            tableCell: {
                padding: '10px',
                border: '1px solid #dee2e6',
            },
            buttonGroup: {
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
            },
            button: {
                padding: '10px 20px',
                marginTop: '25px',
                cursor: 'pointer',
                backgroundColor: '#007bff',
                border: 'none',
                color: '#fff',
                borderRadius: '4px',
            },
            fileInput: {
                display: 'block',
                width: '100%',
                padding: '10px',
                marginTop: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer',
                backgroundColor: '#f8f9fa',
            },
        };

        return ( <
            main id = 'main'
            className = 'main' > {
                successMessage && ( <
                    div style = {
                        {
                            height: '30px',
                            backgroundColor: 'lightgreen',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '18px',
                            paddingLeft: '30px',
                            position: 'fixed',
                            top: '60px',
                            width: '100%',
                            zIndex: 1000,
                        }
                    } > { successMessage } <
                    /div>
                )
            } <
            div className = "pagetitle" > {
                successMessage && < div style = { styles.successMessage } > { successMessage } < /div>} <
                h1 > Quote Generator < /h1> <
                nav >
                <
                ol className = "breadcrumb" >
                <
                li className = "breadcrumb-item" >
                <
                Link to = " "
                className = "a" >
                <
                i className = "bi bi-card-checklist" > < /i> <
                /Link> <
                /li> <
                li className = "breadcrumb-item active" > Quote Generator < /li> <
                /ol> <
                /nav> <
                /div> <
                Container >
                <
                div style = { styles.formContainer } >
                <
                h2 style = { styles.formHeader } > Create Quote < /h2> <
                form onSubmit = { handleSubmit } >
                <
                Grid container spacing = { 2 }
                style = { styles.formGroup } >
                <
                Grid item xs = { 12 }
                sm = { 6 } >
                <
                TextField
                label = "Customer Name"
                variant = "outlined"
                fullWidth
                name = "customerName"
                value = { quoteData.customerName }
                onChange = {
                    (e) => setQuoteData({...quoteData, customerName: e.target.value }) }
                /> <
                /Grid> <
                Grid item xs = { 12 }
                sm = { 6 } >
                <
                TextField
                label = "Quote Number"
                variant = "outlined"
                fullWidth
                name = "quoteNumber"
                value = { quoteData.quoteNumber }
                onChange = {
                    (e) => setQuoteData({...quoteData, quoteNumber: e.target.value }) }
                /> <
                /Grid> <
                Grid item xs = { 12 } >
                <
                Input
                type = "file"
                sx = { styles.fileInput }
                onChange = { handleFileChange } // Call the file change handler
                />

                <
                /Grid> <
                /Grid>

                {
                    isMobile ? ( <
                        Box > {
                            quoteData.items.map((item, index) => ( <
                                Box key = { index }
                                mb = { 2 }
                                p = { 2 }
                                border = { 1 }
                                borderRadius = { 4 } >
                                <
                                Typography variant = "h6" > Item { index + 1 } < /Typography> <
                                TextField label = "Product Name"
                                variant = "outlined"
                                fullWidth name = "productname"
                                value = { item.productname }
                                onChange = {
                                    (e) => handleInputChange(index, e) }
                                margin = "normal" /
                                >
                                <
                                TextField label = "Description"
                                variant = "outlined"
                                fullWidth name = "description"
                                value = { item.description }
                                onChange = {
                                    (e) => handleInputChange(index, e) }
                                margin = "normal" /
                                >
                                <
                                TextField label = "Quantity"
                                type = "number"
                                variant = "outlined"
                                fullWidth name = "quantity"
                                value = { item.quantity }
                                onChange = {
                                    (e) => handleInputChange(index, e) }
                                margin = "normal" /
                                >
                                <
                                TextField label = "Price"
                                type = "number"
                                variant = "outlined"
                                fullWidth name = "price"
                                value = { item.price }
                                onChange = {
                                    (e) => handleInputChange(index, e) }
                                margin = "normal" /
                                >
                                <
                                IconButton onClick = {
                                    () => handleRemoveItem(index) }
                                sx = {
                                    { color: 'red', mt: 1 } } >
                                <
                                Delete / >
                                <
                                /IconButton> <
                                /Box>
                            ))
                        } <
                        /Box>
                    ) : ( <
                        Table style = { styles.table } >
                        <
                        TableHead style = { styles.tableHeader } >
                        <
                        TableRow >
                        <
                        TableCell style = { styles.tableCell } > Product Name < /TableCell> <
                        TableCell style = { styles.tableCell } > Description < /TableCell> <
                        TableCell style = { styles.tableCell } > Quantity < /TableCell> <
                        TableCell style = { styles.tableCell } > Price < /TableCell> <
                        TableCell style = { styles.tableCell } > Action < /TableCell> <
                        /TableRow> <
                        /TableHead> <
                        TableBody > {
                            quoteData.items.map((item, index) => ( <
                                TableRow key = { index } >
                                <
                                TableCell style = { styles.tableCell } >
                                <
                                TextField variant = "outlined"
                                fullWidth name = "productname"
                                value = { item.productname }
                                onChange = {
                                    (e) => handleInputChange(index, e) }
                                /> <
                                /TableCell> <
                                TableCell style = { styles.tableCell } >
                                <
                                TextField variant = "outlined"
                                fullWidth name = "description"
                                value = { item.description }
                                onChange = {
                                    (e) => handleInputChange(index, e) }
                                /> <
                                /TableCell> <
                                TableCell style = { styles.tableCell } >
                                <
                                TextField type = "number"
                                variant = "outlined"
                                fullWidth name = "quantity"
                                value = { item.quantity }
                                onChange = {
                                    (e) => handleInputChange(index, e) }
                                /> <
                                /TableCell> <
                                TableCell style = { styles.tableCell } >
                                <
                                TextField type = "number"
                                variant = "outlined"
                                fullWidth name = "price"
                                value = { item.price }
                                onChange = {
                                    (e) => handleInputChange(index, e) }
                                /> <
                                /TableCell> <
                                TableCell style = { styles.tableCell } >
                                <
                                IconButton onClick = {
                                    () => handleRemoveItem(index) }
                                sx = {
                                    { color: 'red' } } >
                                <
                                Delete / >
                                <
                                /IconButton> <
                                /TableCell> <
                                /TableRow>
                            ))
                        } <
                        /TableBody> <
                        /Table>
                    )
                } <
                div style = { styles.buttonGroup } >
                <
                Button
                variant = "contained"
                color = "primary"
                onClick = { handleAddItem }
                style = { styles.button } >
                Add Item <
                /Button> <
                Button
                variant = "contained"
                color = "primary"
                type = "submit"
                style = { styles.button } >
                Submit Quote <
                /Button> <
                /div> <
                /form> <
                /div> <
                /Container> <
                /main>
            );
        };

        export default QuoteGenerator;