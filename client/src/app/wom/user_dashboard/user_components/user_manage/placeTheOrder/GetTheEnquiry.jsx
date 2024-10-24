import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import Cookies from 'js-cookie';

import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome


const UserAcknowledge = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [data, setData] = useState([]);
    const emailCookie = Cookies.get('email');

    const fetchData = async () => {
        try {
            // Make a GET request to fetch the updated list of years
            //const response = await axios.get('https://wom-server.onrender.com/api/v1/user/enquiry');
            const response = await axios.get(`https://wom-server.onrender.com/api/v1/user/enquiry/${emailCookie}`);

            // Extract the array from the response (assuming it's called addYear)
            const fetchedData = response.data.enquiry;

            // Update the state that the table uses
            setData(fetchedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);


    // Add custom sorting for the "DD/MM/YYYY - HH:mm AM/PM" date format
    $.fn.dataTable.ext.order['dom-date-custom'] = function (settings, colIndex) {
        return this.api().column(colIndex, { order: 'index' }).nodes().map(function (td) {
            // Extract the date text
            const dateText = $(td).text().trim();

            // Convert dateText from "DD/MM/YYYY - HH:mm AM/PM" to a JavaScript Date object
            const [datePart, timePart] = dateText.split(' - ');
            const [day, month, year] = datePart.split('/');
            const dateString = `${year}-${month}-${day} ${timePart}`;

            return new Date(dateString).getTime(); // Return timestamp for sorting
        });
    };

    useEffect(() => {
        if (data.length > 0) {
            const table = $('#bootstrapdatatable').DataTable({
                "aLengthMenu": [
                    [3, 5, 10, 25, -1],
                    [3, 5, 10, 25, "All"]
                ],
                "iDisplayLength": 3,
                "responsive": true,  // Enable responsive table
                "autoWidth": false,
                "order": [
                    [4, 'desc']
                ],
                "columnDefs": [
                    { "targets": 4, "orderDataType": 'dom-date-custom', "width": "180px" },

                ]
            });


            return () => {
                table.destroy();
            };

        }
    }, [data]);

    return (
        <div id="main" className="main" style={{ padding: '20px' }}>
            <div>
                <hr />
                <h3 style={{ textAlign: 'center' }}>User Enquiry</h3>
                <hr />

                <div className="container" style={{ overflowX: 'auto' }}>
                    <div className="table-responsive" style={{ width: isMobile ? '100%' : '200%', height: 'auto' }}>
                        <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                            <thead>
                                <tr>
                                    <th scope="col">Enquiry Number</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Make</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Enquiry Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? (
                                    data.map((elem, index) => (
                                        <tr>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.enquiryNumber}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.year}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.make}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.model}</td>
                                            <td style={{ wordWrap: 'break-word' }}>{elem.enquiryDate}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="13">No data available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserAcknowledge;

// Inline Styles for Responsiveness
const linkStyle = {
    textDecoration: 'none',
    fontSize: '18px', // Increased font size
    color: 'white', // White text color
    padding: '10px 15px',
    display: 'block', // Ensures the link takes full width in the li
    textAlign: 'center'
};


// Media Query in JS (Optional)
const mediaQuery = window.matchMedia('(max-width: 600px)');

if (mediaQuery.matches) {
    linkStyle.fontSize = '12px'; // Adjust font size for mobile
    linkStyle.padding = '8px 10px'; // Adjust padding for mobile
}
