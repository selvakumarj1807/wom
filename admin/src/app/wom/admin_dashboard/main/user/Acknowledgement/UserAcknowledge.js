import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Tag } from 'antd';

import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome


const UserAcknowledge = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the initial window size
    setIsMobile(window.innerWidth <= 768);

    // Function to update state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initialize DataTable
    $('#bootstrapdatatable').DataTable({
      "pagingType": "simple_numbers",
      "aLengthMenu": [
        [3, 5, 10, 25, -1],
        [3, 5, 10, 25, "All"]
      ],
      "iDisplayLength": 3,
      "responsive": true,
      "autoWidth": false,
      "columnDefs": [
        { "width": "20%", "targets": 0 }, // Adjust width for the first column
        { "width": "25%", "targets": 1 }, // Adjust width for the second column
        { "width": "20%", "targets": 2 }, // Adjust width for the third column
        { "width": "20%", "targets": 3 }, // Adjust width for the fourth column
        { "width": "20%", "targets": 4 }, // Adjust width for the fifth column
      ]
    });

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="main" className="main" style={{ padding: '20px' }}>
      <div>
        <div className='navbar' style={{ marginBottom: '20px' }}>
          <ul style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            flexWrap: 'wrap' // Allows wrapping on smaller screens
          }}>
            <li style={liStyle}><Link to="/Admin/userManage" style={linkStyle}>User</Link></li>
            <li style={liStyle}><Link to="/Admin/user/acknow" style={linkStyle}>Acknowledgement</Link></li>
            <li style={liStyle}><Link to="/Admin/user/status" style={linkStyle}>Status</Link></li>
            <li style={liStyle}><Link to="/Admin/user/history" style={linkStyle}>History</Link></li>
            <li style={liStyle}><Link to="/Admin/user/invoice" style={linkStyle}>Invoice</Link></li>
            <li style={liStyle}><Link to="/Admin/user/payment" style={linkStyle}>Payment</Link></li>
          </ul>
        </div>
        <hr />
        <h2 style={{ textAlign: 'center', fontSize: '16px' }}>Acknowledgement Details - User</h2>
        <hr />

        <div className="container" style={{ overflowX: 'auto' }}>
          <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
            <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
              <thead>
                <tr>
                  <th scope="col">Order Number</th>
                  <th scope="col">Material Name</th>
                  <th scope="col">Entry Date</th>
                  <th scope="col">Accepting Date</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ wordWrap: 'break-word' }}>MDA120</td>
                  <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word', color: 'green', fontWeight: 'bold' }}>Accept</td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>MDA121</td>
                  <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word', color: 'red', fontWeight: 'bold' }}>Reject / Cancel</td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>MDA122</td>
                  <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word', color: 'green', fontWeight: 'bold' }}>Accept</td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>MDA123</td>
                  <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word', color: 'red', fontWeight: 'bold' }}>Reject / Cancel</td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>MDA124</td>
                  <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word', color: 'green', fontWeight: 'bold' }}>Accept</td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>MDA125</td>
                  <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word', color: 'red', fontWeight: 'bold' }}>Reject / Cancel</td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>MDA126</td>
                  <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word', color: 'green', fontWeight: 'bold' }}>Accept</td>
                </tr>
            
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

const liStyle = {
  flex: '1 1 auto', // Flex-grow and flex-shrink with auto basis
  textAlign: 'center',
  padding: '5px'
};

// Media Query in JS (Optional)
const mediaQuery = window.matchMedia('(max-width: 600px)');

if (mediaQuery.matches) {
  linkStyle.fontSize = '12px'; // Adjust font size for mobile
  linkStyle.padding = '8px 10px'; // Adjust padding for mobile
}

