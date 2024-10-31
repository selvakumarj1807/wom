import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

import VendorNavbar from '../../../Dashboard/VendorNavbar';  // Import the new Navbar component

const UserAcknowledge = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState([]);

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


  const fetchData = async () => {
    try {
      // Make a GET request to fetch the updated list of years
      const response = await axios.get('https://wom-server.onrender.com/api/v1/admin/orderManagementVendor');

      // Extract the array from the response (assuming it's called addYear)
      const fetchedData = response.data.orderManageVendor;

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
        "responsive": false,
        "autoWidth": false,

        // Set the initial order of the table by the 'enquiryDate' column in descending order
        "order": [[5, 'desc']], // Assuming 'enquiryDate' is in the 12th column (index 11)

        // Apply custom sorting to the 'enquiryDate' column
        "columnDefs": [
          {
            "targets": 5, // Index of 'enquiryDate' column
            "orderDataType": 'dom-date-custom' // Use custom sorting plugin
          }
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
      <div>
        <VendorNavbar /> {/* Replace with the new Navbar component */}
        <hr />
        <h3 style={{ textAlign: 'center' }}>Payment History</h3>
        <hr />

        <div className="container" style={{ overflowX: 'auto' }}>
          <div className="table-responsive" style={{ height: 'auto' }}>
            <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '200%', height: 'auto' }}>
              <thead>
                <tr>
                  <th scope="col">Enquiry Number</th>
                  <th scope="col">Quote Number</th>
                  <th scope="col">Order Number</th>
                  <th scope="col">View Products</th>
                  <th scope="col">Paid Amount</th>
                  <th scope="col">Paid Date</th>
                  <th scope="col">Vendor's Email</th>
                  <th scope="col">User's Email</th>
                  <th scope="col">Contact Name</th>
                  <th scope="col">Mobile Number</th>
                  <th scope="col">Address</th>
                  <th scope="col">City</th>
                  <th scope="col">Postal Code</th>
                  <th scope="col">State</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((elem, index) => (
                    <tr>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.enquiryNumber}</td>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.quoteNumber}</td>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.orderNumber}</td>
                      <td style={{ wordWrap: 'break-word', color: 'orange', alignContent: 'center', textAlign: 'center' }}><a href={`/Admin/vendor/order/viewProductsVendor/${elem._id}`}>View Products</a></td>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.totalPaid}</td>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.vendorPaidDate}</td>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.vendorEmail}</td>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.userEmail}</td>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.contactName}</td>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.mobile}</td>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.address}</td>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.city}</td>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.pincode}</td>
                      <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.state}</td>
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
