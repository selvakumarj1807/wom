import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

const VendorQuote = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://wom-server.onrender.com/api/v1/vendor/vendorQuote');
            const fetchedData = response.data.vendorQuote;
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
        if (data.length > 0) {
            const table = $('#bootstrapdatatable').DataTable({
                aLengthMenu: [
                    [3, 5, 10, 25, -1],
                    [3, 5, 10, 25, "All"]
                ],
                iDisplayLength: 3,
                responsive: true, // Set responsive to true
                autoWidth: false, // Disable auto width

                order: [
                    [6, 'desc']
                ], // Assuming 'enquiryDate' is in the 6th column

                columnDefs: [
                    {
                        targets: 6, // 'enquiryDate' column
                        orderDataType: 'dom-date-custom',
                        width: "180px"
                    },
                    {
                        targets: 0, // 'Enquiry Number' column
                        width: "100px"
                    },
                    {
                        targets: 1, // 'Quote Number' column
                        width: "100px"
                    },
                    {
                        targets: 4, // 'Products' column
                        width: "250px"
                    },
                    {
                        targets: 5, // 'Quote Download' column
                        width: "200px"
                    },
                    {
                        targets: 7, // 'Edit Quote' column
                        width: "100px"
                    }
                ]
            });

            return () => {
                table.destroy(); // Cleanup on component unmount
            };
        }
    }, [data]);

    return (
        <div id="main" className="main" style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', color: 'rgb(14, 42, 71)' }}>Vendor - Quote (Received)</h2>

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
                <div className="table-responsive">
                    <table
                        id="bootstrapdatatable"
                        className="table table-striped table-bordered"
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <thead>
                            <tr>
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
                                        <td style={{ textAlign: 'center',alignContent: 'center' }}>{elem.enquiryNumber}</td>
                                        <td style={{ textAlign: 'center',alignContent: 'center' }}>{elem.quoteNumber}</td>
                                        <td style={{ textAlign: 'center',alignContent: 'center' }}>{elem.email}</td>
                                        <td style={{ textAlign: 'center',alignContent: 'center' }}>{elem.customerName}</td>
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
                                        <td style={{ wordWrap: 'break-word', color: 'orange',alignContent: 'center' }}>
                                            {elem.attachedFile ? (
                                                <a href={`https://wom-server.onrender.com/api/v1/vendor/vendorQuote/download/${elem.attachedFile}`} download>
                                                    {elem.attachedFile}
                                                </a>
                                            ) : (
                                                "No file attached"
                                            )}
                                        </td>
                                        <td style={{ textAlign: 'center',alignContent: 'center' }}>{elem.quoteDate}</td>
                                        <td style={{ textAlign: 'center', color: 'blue',alignContent: 'center' }}>
                                            <a href='/Admin/vendor/editQuote'>Edit</a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8">No data available</td>
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
