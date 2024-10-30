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

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://wom-server.onrender.com/api/v1/admin/orderManagement/${id}`);
                const order = response.data.orderManage;

                // Set the invoice number
                setInvoiceNumber(order.orderNumber || '');

                // Map the items from the response to rows
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
    return (
        <div id="main" className="main" style={{ padding: '20px' }}>
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
                                    <td>

                                        {row.product}

                                    </td>
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
                                    <td>₹{Number(row.amount || 0).toFixed(2)}</td> {/* Ensure amount is a number */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h3 style={{ textAlign: 'right', marginTop: '5px' }}>Total: ₹{total.toFixed(2)}</h3>
                <br></br><br></br>
                <div className="button-container">
                    <button>
                        Pay Now
                    </button>
                    <button onClick={handleBack}>
                        Back
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ViewProducts;
