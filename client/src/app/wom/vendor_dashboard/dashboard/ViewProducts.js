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
                const response = await axios.get(`https://wom-server.onrender.com/api/v1/admin/orderManagementVendor/${id}`);
                const order = response.data.orderManageVendor;

                setInvoiceNumber(order.orderNumber || '');

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
        navigate('/vendor/payment'); // Navigate to /user/orderVerified
    };
    

    return (
        <div id="main" className="main" style={{ padding: '20px' }}>

            <div className="invoice">
                <h1 style={{ textAlign: 'center' }}>View Products</h1>


                {/* Responsive Table Wrapper */}
                <div className="table-container">
                    <table className="invoice-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <br /><br />
                <div className="button-container">
                    <button onClick={handleBack}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default ViewProducts;