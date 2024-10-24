import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './invoice.css'

import { useLocation } from 'react-router-dom';


function GetTheInvoice() {

    const location = useLocation();  // Move useLocation outside of useEffect
    const [enquiryNumber, setEnquiryNumber] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [forwordDate, setForwordDate] = useState('');


    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount === "") {
            alert("please enter amount");
        } else {
            alert("pay the amount successfully");
        }
    }

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const storedEnquiryNumber = queryParams.get('enquiryNumber');
        const storedInvoiceNumber = queryParams.get('invoiceNumber');
        const storedforwordDate = queryParams.get('forwordDate');
    
        // Set the retrieved values to state
        setEnquiryNumber(storedEnquiryNumber);
        setInvoiceNumber(storedInvoiceNumber);
        setForwordDate(storedforwordDate);
    
      }, [location.search]);  // Re-run when location.search changes
    

    return (
        <div id="main" className="main">
            <div className="pagetitle">
                <h1>Place the Order</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to=" " className="a">
                                <i className="bi bi-card-checklist"></i>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">Get the Quote</li>
                    </ol>
                </nav>
            </div>
            <section className="dashboard section">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="invoice">
                            <div className="invoice-header text-center text-md-left">
                                <img
                                    src="https://t3.ftcdn.net/jpg/04/20/25/98/360_F_420259884_rGaCSIrBaDN1YuxVBnNa7i3Ye5eI4wgm.jpg"
                                    alt="Company Logo"
                                    className="img-fluid mb-3"
                                />
                                <div className="invoice-info">
                                    <p>Invoice Number: <span>INV-12345</span></p>
                                    <p>Date: <span>30 March 2024</span> </p>
                                </div>
                            </div>
                            <div className="invoice-details text-center text-md-left">
                                <p><strong>Bill To:</strong></p>
                                <p>Sannasi</p>
                                <p>4E/4, 3rd Street </p>
                                <p>Valluvar Nagar</p>
                                <p>Kovilpatti, TamilNadu, 628501</p>
                                <p>Email: san@example.com</p>
                            </div>
                            <div className="table-responsive">
                                <table className="invoice-table table table-bordered mt-3">
                                    <thead>
                                        <tr>
                                            <th>Item Description</th>
                                            <th>Quantity</th>
                                            <th>Unit Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Product 1</td>
                                            <td>2</td>
                                            <td>₹ 50.00</td>
                                            <td>₹ 100.00</td>
                                        </tr>
                                        <tr>
                                            <td>Product 2</td>
                                            <td>1</td>
                                            <td>₹ 75.00</td>
                                            <td>₹ 75.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="invoice-footer text-center text-md-right mt-3">
                                <p><strong>Subtotal:</strong> ₹ 175.00</p>
                                <p><strong>Tax (10%):</strong> ₹ 17.50</p>
                                <p className="total"><strong>Total:</strong> ₹<input style={{ width: '100px' }} type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="125.00" /> </p>
                                <p><strong>Payment Terms:</strong> Due in 30 days</p>
                                <button
                                    style={{
                                        padding: "10px",
                                        borderRadius: "5px",
                                        backgroundColor: "#0E2A47",
                                        width: "100px",
                                        marginLeft: "40px",
                                        color: "#fff"
                                    }}
                                    onClick={handleSubmit}
                                >
                                    Pay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GetTheInvoice;
