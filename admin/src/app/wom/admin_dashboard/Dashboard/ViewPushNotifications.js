import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

const ViewPushNotification = () => {
    const [data, setData] = useState([]);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const fetchData = async () => {
        try {
            // Make a GET request to fetch the updated list of years
            const response = await axios.get('https://wom-server.onrender.com/api/v1/admin/pushNotification');

            // Extract the array from the response (assuming it's called addYear)
            const fetchedData = response.data.push;

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
                "responsive": true,
                "autoWidth": false, // Disable auto width, so you can set widths manually

                // Set the initial order of the table by the 'enquiryDate' column in descending order
                "order": [[6, 'desc']], // Assuming 'enquiryDate' is in the 6th column (index 6)

                // Apply custom sorting and column width to the 'enquiryDate' column
                "columnDefs": [
                    {
                        "targets": 6, // Index of 'enquiryDate' column
                        "orderDataType": 'dom-date-custom', // Use custom sorting plugin
                        "width": "150px" // Adjust the width of 'enquiryDate' column
                    },
                    {
                        "targets": 0, // Index of 'Enquiry Number' column
                        "width": "100px" // Set a width for 'Enquiry Number' column
                    },
                    {
                        "targets": 1, // Index of 'Year' column
                        "width": "80px" // Set a width for 'Year' column
                    },
                    {
                        "targets": 4, // Index of 'Year' column
                        "width": "250px" // Set a width for 'Year' column
                    },
                    {
                        "targets": 5, // Index of 'Emails' column
                        "width": "300px" // Set a larger width for 'Emails' column since it contains lists
                    }
                    // Add more columnDefs for other columns if needed
                ]
            });

            // Cleanup function to destroy DataTable on unmount or before reinitialization
            return () => {
                table.destroy();
            };
        }
    }, [data]);



    return (
        <div id="main" className="main" style={{ padding: '20px' }}>

            <h2 style={{ textAlign: 'center', color: 'rgb(14, 42, 71)' }}>View Push Notification</h2>

            <div className="container" style={{ overflowX: 'auto' }}>
                <div className="table-responsive">
                    <table id="bootstrapdatatable" className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Enquiry Number</th>
                                <th>Year</th>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Additional Notes</th>
                                <th>Emails</th>
                                <th>Enquiry Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((elem, index) => (
                                    <tr key={elem._id}>
                                        <td>{elem.enquiryNumber}</td>
                                        <td>{elem.year}</td>
                                        <td>{elem.make}</td>
                                        <td>{elem.model}</td>
                                        <td>{elem.additionalNotes}</td>
                                        <td>
                                            <ul>
                                                {elem.email.map((emailItem) => (
                                                    <li key={emailItem._id}>
                                                        {emailItem.email}  (Read - {emailItem.readStatus ? 'Yes' : 'No'})
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td>{elem.enquiryDate}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewPushNotification;
