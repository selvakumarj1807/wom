import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

import axios from 'axios';

const VendorQuote = () => {
    const [data, setData] = useState([]);
    const emailCookie = Cookies.get('email');
    const [isMobile, setIsMobile] = useState(false);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://wom-server.onrender.com/api/v1/vendor/vendorQuote/${emailCookie}`);
            const fetchedData = response.data.vendorQuote;
            setData(fetchedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        let table;
        if (data.length > 0) {
            table = $('#bootstrapdatatable').DataTable({
                "aLengthMenu": [
                    [3, 5, 10, 25, -1],
                    [3, 5, 10, 25, "All"]
                ],
                "iDisplayLength": 3,
                "responsive": true,  // Enable responsive table
                "autoWidth": false,
                "order": [
                    [6, 'desc']
                ],
                "columnDefs": [
                    { "targets": 6, "orderDataType": 'dom-date-custom', "width": "180px" },
                    { "targets": 0, "width": "100px" },
                    { "targets": 1, "width": "80px" },
                    { "targets": 4, "width": "300px" },
                    { "targets": 5, "width": "300px" },
                    { "targets": 7, "width": "150px" }
                ]
            });
        }

        return () => {
            if (table) {
                table.destroy(true);
                $('#bootstrapdatatable').empty();
            }
        };
    }, [data]);

    return (
        <div id="main" className="main" style={{ padding: '20px' }}>
            <div className="pagetitle">
                <h1>Quote Success</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to=" " className="a">
                                <i className="bi bi-card-checklist"></i>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">Quote Success</li>
                    </ol>
                </nav>
            </div>

            <style>{`
                .product-list {
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }

                .product-item {
                    padding: 15px;
                    border: 1px solid #ddd;
                    margin-bottom: 10px;
                }

                .product-info {
                    width: 100%;
                    padding: 5px 0;
                }

                .product-label {
                    font-weight: bold;
                }

                @media (max-width: 768px) {
                    .product-info {
                        width: 100%;
                        padding: 5px 0;
                    }

                    .product-item {
                        padding: 15px;
                        border: 1px solid #ddd;
                        margin-bottom: 10px;
                    }
                }

                a:hover {
                      text-decoration: none;
                }
            `}</style>

            <div className="container" style={{ overflowX: 'auto' }}>
                <div className="table-responsive" style={{ width: isMobile ? '100%' : '200%', height: 'auto' }}>
                    <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '180%', height: 'auto' }}>
                        <thead>
                            <tr className="text-center">
                                <th>Enquiry Number</th>
                                <th>Quote Number</th>
                                <th>Vendor Email</th>
                                <th>Customer Name</th>
                                <th>Products</th>
                                <th>Quote Download</th>
                                <th>Quote Date</th>
                                <th>Edit Quote</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((elem) => (
                                    <tr key={elem._id}>
                                        <td style = {{ textAlign: 'center', alignContent: 'center' }}>{elem.enquiryNumber}</td>
                                        <td style = {{ textAlign: 'center', alignContent: 'center' }}>{elem.quoteNumber}</td>
                                        <td style = {{ textAlign: 'center', alignContent: 'center' }}>{elem.email}</td>
                                        <td style = {{ textAlign: 'center', alignContent: 'center' }}>{elem.customerName}</td>
                                        <td>
                                            <ul className="product-list">
                                                {elem.items.map((item) => (
                                                    <li key={item._id} className="product-item">
                                                        <div className="product-info">
                                                            <span className="product-label">Product:</span> {item.productname}
                                                        </div>
                                                        <div className="product-info">
                                                            <span className="product-label">Description:</span> {item.description}
                                                        </div>
                                                        <div className="product-info">
                                                            <span className="product-label">Quantity:</span> {item.quantity}
                                                        </div>
                                                        <div className="product-info">
                                                            <span className="product-label">Price:</span> {item.price}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td className="text-center" style={{ wordWrap: 'break-word', color: 'orange', alignContent: 'center' }}>
                                            {elem.attachedFile ? (
                                                <a href={`https://wom-server.onrender.com/api/v1/vendor/vendorQuote/download/${elem.attachedFile}`} download>
                                                    {elem.attachedFile}
                                                </a>
                                            ) : (
                                                "No file attached"
                                            )}
                                        </td>
                                        <td style = {{ textAlign: 'center', alignContent: 'center' }}>{elem.quoteDate}</td>
                                        <td style = {{ textAlign: 'center', alignContent: 'center', color: 'blue' }} >{elem.action}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" style = {{ textAlign: 'center', alignContent: 'center' }}>No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VendorQuote;
