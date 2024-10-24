import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Make sure to import the hook

import axios from 'axios';
import Cookies from 'js-cookie';

const VendorQuote = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate(); // Initialize the navigate function
    const emailCookie = Cookies.get('email');


    const [isMobile, setIsMobile] = useState(false);

    const fetchData = async () => {
        try {
            //const response = await axios.get('https://wom-server.onrender.com/api/v1/admin/forwardEditQuoteAdmin');
            const response = await axios.get(`https://wom-server.onrender.com/api/v1/admin/forwardEditQuoteAdmin/invoiceEmail/${emailCookie}`);
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
        // Check the initial window size
        setIsMobile(window.innerWidth <= 768);

        // Function to update state based on window size
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const table = $('#bootstrapdatatable').DataTable({
                "aLengthMenu": [
                    [3, 5, 10, 25, -1],
                    [3, 5, 10, 25, "All"]
                ],
                "iDisplayLength": 3,
                "responsive": false,  // Enable responsive table
                "autoWidth": false,
                "order": [
                    [3, 'desc']
                ],
                "columnDefs": [
                    { "targets": 3, "orderDataType": 'dom-date-custom', "width": "250px" },

                ],
            });


            return () => {
                table.destroy();
            };
        }
    }, [data]);

    return (
        <div id="main" className="main" style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', color: 'rgb(14, 42, 71)' }}>Get the User Invoice</h2>


            <div className="container" style={{ overflowX: 'auto' }}>
                <div className="table-responsive" style={{ width: isMobile ? '100%' : '200%', height: 'auto' }}>
                    <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                        <thead>
                            <tr>
                                <th>Invoice Number</th>
                                <th>Enquiry Number</th>
                                <th>Quote Download</th>
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
                                        <td style={{ textAlign: 'center', alignContent: 'center', color: 'blue' }}><a href={`/user/user/get_Userinvoice?enquiryNumber=${elem.enquiryNumber}&invoiceNumber=${elem.invoiceNumber}&forwordDate=${elem.forwordDate}`}>Get the Invoice</a></td>
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
