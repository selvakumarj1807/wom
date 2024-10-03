import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
 
import Cookies from 'js-cookie';  // Make sure js-cookie is imported

import axios from 'axios';

const VendorEnquiry = () => {

    const [notifications, setNotifications] = useState([]);

    // Retrieve the user's email from the cookie
    const emailCookie = Cookies.get('email');

    // Function to fetch notifications for the specific user
    const fetchNotifications = async () => {
        try {
            const response = await axios.get('https://wom-server.onrender.com/api/v1/admin/pushNotification', {
        params: {
          email: emailCookie, // Pass the email as a query parameter
        },
      });
      const newNotifications = response.data.push;

      // Filter unread notifications for the user (checking if emailCookie is in notification.email array)
      const unreadNotifications = newNotifications.filter((notification) => {
        // Find the user's email object within the notification's email array
        const userEmailInfo = notification.email.find(
          (emailObj) => emailObj.email === emailCookie
        );

        // Return the notification if the user's email exists and the readStatus is false
        return userEmailInfo !== undefined;
      });

      // Update state with unread notifications for this user
      setNotifications(unreadNotifications);

        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);


    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


    useEffect(() => {
        // Initialize DataTable after data is loaded and cleanup before reinitialization
        if (notifications.length > 0) {
            const table = $('#bootstrapdatatable').DataTable({
                "pagingType": "simple_numbers",
                "aLengthMenu": [
                    [3, 5, 10, 25, -1],
                    [3, 5, 10, 25, "All"]
                ],
                "iDisplayLength": 3,
                "autoWidth": false,
                "responsive": false,
            });

            // Cleanup function to destroy DataTable on unmount or before reinitialization
            return () => {
                table.destroy();
            };
        }
    }, [notifications]); // Only reinitialize DataTable when data changes

    return (
        <main id='main' className='main'>
            <div className="pagetitle">
                <h1>Enquiry</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to=" " className="a">
                                <i className="bi bi-card-checklist"></i>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active">Enquiry</li>
                    </ol>
                </nav>
            </div>
            <div className="container" style={{ overflowX: 'auto' }}>
                <div className="table-responsive" style={{ width: isMobile ? '100%' : '200%', height: 'auto' }}>
                    <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
                        <thead>
                            <tr>
                                <th scope="col">Enquiry Number</th>
                                <th scope="col">Year</th>
                                <th scope="col">Make</th>
                                <th scope="col">Model</th>
                                <th scope="col">Additional Notes</th>
                                <th scope="col">Enquiry Date</th>
                                <th scope="col">Quote Generate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notifications.map((notification, index) => (
                                <tr>
                                    <td>{notification.enquiryNumber}</td>
                                    <td>{notification.year}</td>
                                    <td>{notification.make}</td>
                                    <td>{notification.model}</td>
                                    <td>{notification.additionalNotes}</td>
                                    <td>{notification.enquiryDate}</td>
                                    <td style={{ color: 'blue' }}><a href={`/vendor/quote/generator?enquiryNo=${notification.enquiryNumber}`}>Quote Generate</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default VendorEnquiry;
