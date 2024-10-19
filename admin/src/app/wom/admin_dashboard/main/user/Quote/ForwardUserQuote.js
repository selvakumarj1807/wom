import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Make sure to import the hook

import axios from 'axios';

const VendorQuote = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate(); // Initialize the navigate function


    const fetchData = async () => {
        try {
            const response = await axios.get('https://wom-server.onrender.com/api/v1/admin/forwardEditQuoteAdmin');
            const fetchedData = response.data.editQuoteForword;
            setData(fetchedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Custom sorting for the "DD/MM/YYYY - HH:mm AM/PM" date format
    $.fn.dataTable.ext.order['dom-date-custom'] = function (settings, colIndex) {
        return this.api().column(colIndex, { order: 'index' }).nodes().map(function (td) {
            const dateText = $(td).text().trim();
            const [datePart, timePart] = dateText.split(' - ');
            const [day, month, year] = datePart.split('/');
            const dateString = `${year}-${month}-${day} ${timePart}`;
            return new Date(dateString).getTime();
        });
    };

    useEffect(() => {
        let table;
        if (data.length > 0) {
            table = $('#bootstrapdatatable').DataTable({
                "aLengthMenu": [
                    [3, 5, 10, 25, -1],
                    [3, 5, 10, 25, "All"]
                ],
                "iDisplayLength": 3,
                "responsive": false,  // Enable responsive table
                "autoWidth": false,
                "order": [
                    [6, 'desc']
                ],
                "columnDefs": [
                    { "targets": 7, "orderDataType": 'dom-date-custom', "width": "250px" },
                    { "targets": 0, "width": "150px" },
                    { "targets": 1, "width": "150px" },
                    { "targets": 2, "width": "150px" },
                    { "targets": 3, "width": "300px" },
                    { "targets": 5, "width": "150px" },
                    { "targets": 6, "width": "350px" },
                    { "targets": 8, "width": "150px" },
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
            <h2 style={{ textAlign: 'center', color: 'rgb(14, 42, 71)' }}>User Quote (Forward)</h2>

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
                    .product-item {
                        padding: 10px;
                    }
                    table {
                        width: 100% !important;
                    }
                    #bootstrapdatatable_wrapper {
                        overflow-x: auto;
                    }
                }
            `}</style>

            <div className="container" style={{ overflowX: 'auto' }}>
                <div className="table-responsive" style={{ height: 'auto' }}>
                    <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '200%', height: 'auto' }}>
                        <thead>
                            <tr>
                                <th>Invoice Number</th>
                                <th>Enquiry Number</th>
                                <th>Quote Number</th>
                                <th>Enquiry User's Email</th>
                                <th>Products</th>
                                <th>Total</th>
                                <th>Edit Quote Download</th>
                                <th>Forward Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((elem) => (
                                    <tr key={elem._id}>
                                        <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.invoiceNumber}</td>
                                        <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.enquiryNumber}</td>
                                        <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.quoteNumber}</td>
                                        <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.email}</td>
                                        <td>
                                            <ul className="product-list">
                                                {elem.items.map((item) => (
                                                    <li key={item._id} className="product-item">
                                                        <div className="product-info">
                                                            <span className="product-label">Product Name:</span> {item.product}
                                                        </div>
                                                        <div className="product-info">
                                                            <span className="product-label">Quantity:</span> {item.unit}
                                                        </div>
                                                        <div className="product-info">
                                                            <span className="product-label">Price:</span> {item.price}
                                                        </div>
                                                        <div className="product-info">
                                                            <span className="product-label">Total Price:</span> {item.amount}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.total}</td>
                                        <td style={{ wordWrap: 'break-word', color: 'orange', alignContent: 'center', textAlign: 'center' }}>
                                            {elem.attachedFile ? (
                                                <a href={`https://wom-server.onrender.com/api/v1/admin/forwardEditQuoteAdmin/download/${elem.attachedFile}`} download>
                                                    {elem.attachedFile}
                                                </a>
                                            ) : (
                                                "No file attached"
                                            )}
                                        </td>
                                        <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.forwordDate}</td>
                                        <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.action}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9">No data available</td>
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
