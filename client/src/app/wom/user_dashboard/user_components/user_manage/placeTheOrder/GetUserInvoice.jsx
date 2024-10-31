import React, { useEffect, useState } from 'react';
import './invoice.css'; // Keep your CSS file
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Invoice = () => {
    const location = useLocation();
    const [enquiryNumber, setEnquiryNumber] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [forwordDate, setForwordDate] = useState('');
    const [rows, setRows] = useState([{ id: 1, product: '', unit: '', price: '', amount: '' }]);
    const [total, setTotal] = useState(0);
    const [successMessage, setSuccessMessage] = useState('');

    const [quoteNumber, setQuoteNumber] = useState('');
    const [quoteDate, setQuoteDate] = useState('');
    const [email, setEmail] = useState('');

    const [contactName, setContactName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [state, setState] = useState('');

    // Handle Invoice Number change
    const handleInvoiceNumberChange = (e) => setInvoiceNumber(e.target.value);


    useEffect(() => {
        const fetchInvoiceQuote = async (invoiceNumber, forwordDate) => {
            try {
                const response = await axios.get(
                    `https://wom-server.onrender.com/api/v1/admin/forwardEditQuoteAdmin/invoiceNumber/${invoiceNumber}`,
                    { params: { forwordDate } }
                );
                const adminQuote = response.data.editQuoteForword[0];

                setQuoteNumber(adminQuote.quoteNumber);
                setQuoteDate(adminQuote.quoteDate);
                setEmail(adminQuote.email);

                const mappedRows = adminQuote.items.map((item, index) => ({
                    id: index + 1,
                    product: item.product,
                    unit: item.unit,
                    price: item.price,
                    amount: item.unit * item.price,
                }));

                setRows(mappedRows);
                calculateTotal(mappedRows);
            } catch (error) {
                console.error("Error fetching vendor quote:", error);
            }
        };

        const queryParams = new URLSearchParams(location.search);
        const storedEnquiryNumber = queryParams.get('enquiryNumber');
        const storedInvoiceNumber = queryParams.get('invoiceNumber');
        const storedForwordDate = queryParams.get('forwordDate');

        setEnquiryNumber(storedEnquiryNumber);
        setInvoiceNumber(storedInvoiceNumber);
        setForwordDate(storedForwordDate);

        if (storedInvoiceNumber && storedForwordDate) {
            fetchInvoiceQuote(storedInvoiceNumber, storedForwordDate);
        }
    }, [location.search]);

    const fetchUserData = async () => {
        try {
            // Fetch the enquiry details using the enquiry number
            const response = await axios.get(
                `https://wom-server.onrender.com/api/v1/user/enquiry/enquiryNumber/${enquiryNumber}`
            );

            // Extract the relevant enquiry data
            const fetchedData = response.data.enquiry;

            if (fetchedData && fetchedData.length > 0) {
                // Extract the email from the first enquiry object and store it in state
                setContactName(fetchedData[0].contactName);
                setMobile(fetchedData[0].mobileNumber);
                setAddress(fetchedData[0].address);
                setCity(fetchedData[0].city);
                setPincode(fetchedData[0].postalCode);
                setState(fetchedData[0].state);

            }

            // Update state with fetched data (if needed elsewhere)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [enquiryNumber]);

    const handleInputChange = (e, id) => {
        const { name, value } = e.target;
        const updatedRows = rows.map((row) => {
            if (row.id === id) {
                const updatedRow = {
                    ...row,
                    [name]: value,
                    amount: name === 'unit' || name === 'price'
                        ? (value || 0) * (name === 'unit' ? row.price : row.unit)
                        : row.amount
                };
                return updatedRow;
            }
            return row;
        });
        setRows(updatedRows);
        calculateTotal(updatedRows);
    };

    const calculateTotal = (updatedRows) => {
        const totalAmount = updatedRows.reduce((sum, row) => sum + parseFloat(row.amount || 0), 0);
        setTotal(totalAmount);
    };
    const handleOrder = async () => {
        const generatedOrderNumber = `ORD${Math.floor(Math.random() * 9000) + 1000}`;

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

        const formData = new FormData();
        formData.append('enquiryNumber', enquiryNumber);
        formData.append('quoteNumber', quoteNumber);
        formData.append('quoteDate', quoteDate);
        formData.append('email', email);
        formData.append('forwordDate', forwordDate);
        formData.append('totalPaid', total.toFixed(2));
        formData.append('items', JSON.stringify(rows));
        formData.append('invoiceNumber', invoiceNumber);
        formData.append('orderDate', formatDateTime);
        formData.append('orderNumber', generatedOrderNumber);

        formData.append('contactName', contactName);
        formData.append('mobile', mobile);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('pincode', pincode);
        formData.append('state', state);

        try {
            const response = await axios.post(
                'https://wom-server.onrender.com/api/v1/admin/orderManagement/new',
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            console.log('Order created successfully:', response.data);
            setSuccessMessage('Payment Successfully!');

            setTimeout(() => {
                window.location.replace('/user');
            }, 2000);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        if (typeof window.Razorpay === "undefined") {
            console.error("Razorpay SDK not loaded properly.");
            return;
        }

        const options = {
            key: "rzp_test_mSNCLQ0zF6KHBT",
            amount: parseInt(total.toFixed(2)) * 100,
            currency: "INR",
            name: "Web Mastery",
            description: "For testing purpose in react",
            handler: function (response) {
                console.log("Payment successful! Payment ID:", response.razorpay_payment_id);
                handleOrder(); // Call the correct function
            },
            theme: { color: "#07a291db" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };


    return (
        <div id="main" className="main" style={{ padding: '20px' }}>
            {successMessage && <div style={styles.successMessage}>{successMessage}</div>}

            <div className="invoice">
                <h1 style={{ textAlign: 'center' }}>Invoice</h1>

                <div className="invoice-number">
                    <h4>Invoice Number</h4>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="#Inv1234"
                        value={invoiceNumber}
                        onChange={handleInvoiceNumberChange}
                        readOnly // Makes the field read-only
                    />
                </div>

                {/* Responsive Table Wrapper */}
                <div className="table-container">
                    <table className="invoice-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.id}>
                                    <td>
                                        <input
                                            type="text"
                                            name="product"
                                            value={row.product}
                                            onChange={(e) => handleInputChange(e, row.id)}
                                            className="input-field"
                                            readOnly // Makes the field read-only
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="unit"
                                            value={row.unit}
                                            onChange={(e) => handleInputChange(e, row.id)}
                                            className="input-field"
                                            min="0"
                                            readOnly // Makes the field read-only
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="price"
                                            value={row.price}
                                            onChange={(e) => handleInputChange(e, row.id)}
                                            className="input-field"
                                            min="0"
                                            readOnly // Makes the field read-only
                                        />
                                    </td>
                                    <td>₹{Number(row.amount).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h3 style={{ textAlign: 'right', marginTop: '5px' }}>Total: ₹{total.toFixed(2)}</h3>

                <br></br><br></br>
                <center>
                    <button onClick={handleSubmit} style={{ backgroundColor: 'rgb(1, 57, 117)', color: 'white', width: '200px' }}>
                        Pay Now
                    </button>
                </center>
            </div>
        </div>
    );
};

export default Invoice;

const styles = {
    successMessage: {
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
};
