import React, { useEffect, useState } from 'react';
import './invoice.css'; // Keep your CSS file
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

const ViewProducts = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Initialize the navigate function

    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [rows, setRows] = useState([{ id: 1, product: '', unit: 0, price: 0, amount: 0 }]);
    const [total, setTotal] = useState(0);
    const [showModal, setShowModal] = useState(false); // State for modal visibility
    const [payAmount, setPayAmount] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [quoteNumber, setQuoteNumber] = useState('');

    const [enquiryNumber, setEnquiryNumber] = useState('');
    const [quoteDate, setQuoteDate] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [OrderNumber, setOrderNumber] = useState('');
    const [contactName, setContactName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [state, setState] = useState('');

    const [vendorEmail, setVendorEmail] = useState('');

    const fetchVendorData = async () => {
        try {
            // Fetch the enquiry details using the enquiry number
            const response = await axios.get(
                `https://wom-server.onrender.com/api/v1/vendor/vendor/vendorQuoteQno/${quoteNumber}`
            );

            // Extract the relevant enquiry data
            const fetchedVendorData = response.data.vendorQuote;

            if (fetchedVendorData && fetchedVendorData.length > 0) {
                // Extract the email from the first enquiry object and store it in state
                setVendorEmail(fetchedVendorData[0].email);
            }

            // Update state with fetched data (if needed elsewhere)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchVendorData();
    }, [quoteNumber]);


    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://wom-server.onrender.com/api/v1/admin/orderManagement/${id}`);
                const order = response.data.orderManage;

                setInvoiceNumber(order.orderNumber || '');
                setQuoteNumber(order.quoteNumber || '');

                setEnquiryNumber(order.enquiryNumber || '');
                setQuoteDate(order.quoteDate || '');
                setUserEmail(order.email || '');
                setOrderNumber(order.orderNumber || '');
                setContactName(order.contactName || '');
                setMobile(order.mobile || '');
                setAddress(order.address || '');
                setCity(order.city || '');
                setPincode(order.pincode || '');
                setState(order.state || '');


                const mappedRows = order.items.map((item, index) => ({
                    id: index + 1,
                    product: item.product || '',
                    unit: parseFloat(item.unit) || 0,
                    price: parseFloat(item.price) || 0,
                    amount: parseFloat(item.amount) || 0,
                }));

                setRows(mappedRows);
                calculateTotal(mappedRows);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const calculateTotal = (updatedRows) => {
        const totalAmount = updatedRows.reduce((sum, row) => sum + (parseFloat(row.amount) || 0), 0);
        setTotal(totalAmount);
    };

    const handleBack = () => {
        navigate('/Admin/user/orderVerified'); // Navigate to /user/orderVerified
    };

    const handlePayNow = () => {
        setShowModal(true); // Show the modal when "Pay Now" is clicked
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
    };

    const handleOrder = async () => {
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
        formData.append('userEmail', userEmail);
        formData.append('vendorEmail', vendorEmail);
        formData.append('vendorPaidDate', formatDateTime);
        formData.append('totalPaid', payAmount);
        formData.append('items', JSON.stringify(rows));
        formData.append('orderNumber', OrderNumber);

        formData.append('contactName', contactName);
        formData.append('mobile', mobile);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('pincode', pincode);
        formData.append('state', state);

        try {
            const response = await axios.post(
                'https://wom-server.onrender.com/api/v1/admin/orderManagementVendor/new',
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            console.log('Order created successfully:', response.data);
            setSuccessMessage('Payment Successfully!');

            setTimeout(() => {
                window.location.replace('/admin');
            }, 2000);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();

        if (typeof window.Razorpay === "undefined") {
            console.error("Razorpay SDK not loaded properly.");
            return;
        }

        const options = {
            key: "rzp_test_mSNCLQ0zF6KHBT",
            amount: payAmount * 100,
            currency: "INR",
            name: "Web Mastery",
            description: "For testing purpose in react",
            handler: function (response) {
                console.log("Payment successful! Payment ID:", response.razorpay_payment_id);
                setShowModal(false); // Close the modal after payment
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
                <h1 style={{ textAlign: 'center' }}>View Ordered Products & Payment for Vendor's</h1>

                <div className="invoice-number">
                    <h4>Order Number</h4>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="#Inv1234"
                        value={invoiceNumber}
                        readOnly
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
                                    <td>{row.product}</td>
                                    <td>
                                        <input
                                            type="number"
                                            name="unit"
                                            value={row.unit}
                                            className="input-field"
                                            min="0"
                                            readOnly
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="price"
                                            value={row.price}
                                            className="input-field"
                                            min="0"
                                            readOnly
                                        />
                                    </td>
                                    <td>₹{Number(row.amount || 0).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h3 style={{ textAlign: 'right', marginTop: '5px' }}>Total: ₹{total.toFixed(2)}</h3>
                <br /><br />
                <div className="button-container">
                    <button onClick={handlePayNow}>Pay Now</button>
                    <button onClick={handleBack}>Back</button>
                </div>

                {/* Modal for payment */}
                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <br></br><br></br>
                            <h2>Payment Details</h2>
                            <label>Vendor Email: <span style={{ fontSize: '30px' }}>{vendorEmail}</span></label>
                            <label>Enter the Amount:</label>
                            <input
                                type="number"
                                value={payAmount}
                                onChange={(e) => setPayAmount(e.target.value)}
                                className="input-field"
                                placeholder="Enter Amount"
                            />
                            <div className="button-container">
                                <button onClick={handlePaymentSubmit}>Pay Amount</button>
                                <button onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewProducts;

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