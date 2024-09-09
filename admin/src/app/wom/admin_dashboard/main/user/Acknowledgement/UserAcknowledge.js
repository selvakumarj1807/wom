import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

import UserNavbar from '../../../Dashboard/UserNavbar';  // Import the new Navbar component

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
      "responsive": false,
      "autoWidth": false,

    });


    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="main" className="main" style={{ padding: '20px' }}>
      <div>
        <UserNavbar />
        <hr />
        <h3 style={{ textAlign: 'center' }}>User Enquiry</h3>
        <hr />

        <div className="container" style={{ overflowX: 'auto' }}>
          <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
            <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
              <thead>
                <tr>
                  <th scope="col">Enquiry Number</th>
                  <th scope="col">Year</th>
                  <th scope="col">Make</th>
                  <th scope="col">Model</th>
                  <th scope="col">Cantact Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Postal Code</th>
                  <th scope="col">State</th>
                  <th scope="col">Shipping Method</th>
                  <th scope="col">Additional Notes</th>
                  <th scope="col">Enquiry Date</th>
                  <th scope="col">Notification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ wordWrap: 'break-word' }}>#256</td>
                  <td style={{ wordWrap: 'break-word' }}>2020</td>
                  <td style={{ wordWrap: 'break-word' }}>AMC</td>
                  <td style={{ wordWrap: 'break-word' }}>Classic</td>
                  <td style={{ wordWrap: 'break-word' }}>name1</td>
                  <td style={{ wordWrap: 'break-word' }}>8899001122</td>
                  <td style={{ wordWrap: 'break-word' }}>name1@gmail.com</td>
                  <td style={{ wordWrap: 'break-word' }}>624003</td>
                  <td style={{ wordWrap: 'break-word' }}>Tamilnadu</td>
                  <td style={{ wordWrap: 'break-word' }}>option1</td>
                  <td style={{ wordWrap: 'break-word' }}>Argent Requirements</td>
                  <td style={{ wordWrap: 'break-word' }}>01/09/2024</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}><a href='/Admin/PushNotification'>Push Notification</a></td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>#257</td>
                  <td style={{ wordWrap: 'break-word' }}>2020</td>
                  <td style={{ wordWrap: 'break-word' }}>AMC</td>
                  <td style={{ wordWrap: 'break-word' }}>Classic</td>
                  <td style={{ wordWrap: 'break-word' }}>name2</td>
                  <td style={{ wordWrap: 'break-word' }}>8899001122</td>
                  <td style={{ wordWrap: 'break-word' }}>name2@gmail.com</td>
                  <td style={{ wordWrap: 'break-word' }}>624003</td>
                  <td style={{ wordWrap: 'break-word' }}>Tamilnadu</td>
                  <td style={{ wordWrap: 'break-word' }}>option1</td>
                  <td style={{ wordWrap: 'break-word' }}>Argent Requirements</td>
                  <td style={{ wordWrap: 'break-word' }}>01/08/2024</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}><a href='/Admin/PushNotification'>Push Notification</a></td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>#258</td>
                  <td style={{ wordWrap: 'break-word' }}>2020</td>
                  <td style={{ wordWrap: 'break-word' }}>AMC</td>
                  <td style={{ wordWrap: 'break-word' }}>Classic</td>
                  <td style={{ wordWrap: 'break-word' }}>name3</td>
                  <td style={{ wordWrap: 'break-word' }}>8899001122</td>
                  <td style={{ wordWrap: 'break-word' }}>name3@gmail.com</td>
                  <td style={{ wordWrap: 'break-word' }}>624003</td>
                  <td style={{ wordWrap: 'break-word' }}>Tamilnadu</td>
                  <td style={{ wordWrap: 'break-word' }}>option1</td>
                  <td style={{ wordWrap: 'break-word' }}>Argent Requirements</td>
                  <td style={{ wordWrap: 'break-word' }}>25/08/2024</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}><a href='/Admin/PushNotification'>Push Notification</a></td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>#259</td>
                  <td style={{ wordWrap: 'break-word' }}>2020</td>
                  <td style={{ wordWrap: 'break-word' }}>AMC</td>
                  <td style={{ wordWrap: 'break-word' }}>Classic</td>
                  <td style={{ wordWrap: 'break-word' }}>name4</td>
                  <td style={{ wordWrap: 'break-word' }}>8899001122</td>
                  <td style={{ wordWrap: 'break-word' }}>name4@gmail.com</td>
                  <td style={{ wordWrap: 'break-word' }}>624003</td>
                  <td style={{ wordWrap: 'break-word' }}>Tamilnadu</td>
                  <td style={{ wordWrap: 'break-word' }}>option1</td>
                  <td style={{ wordWrap: 'break-word' }}>Argent Requirements</td>
                  <td style={{ wordWrap: 'break-word' }}>25/08/2024</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}><a href='/Admin/PushNotification'>Push Notification</a></td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>#250</td>
                  <td style={{ wordWrap: 'break-word' }}>2020</td>
                  <td style={{ wordWrap: 'break-word' }}>AMC</td>
                  <td style={{ wordWrap: 'break-word' }}>Classic</td>
                  <td style={{ wordWrap: 'break-word' }}>name5</td>
                  <td style={{ wordWrap: 'break-word' }}>8899001122</td>
                  <td style={{ wordWrap: 'break-word' }}>name5@gmail.com</td>
                  <td style={{ wordWrap: 'break-word' }}>624003</td>
                  <td style={{ wordWrap: 'break-word' }}>Tamilnadu</td>
                  <td style={{ wordWrap: 'break-word' }}>option1</td>
                  <td style={{ wordWrap: 'break-word' }}>Argent Requirements</td>
                  <td style={{ wordWrap: 'break-word' }}>25/08/2024</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}><a href='/Admin/PushNotification'>Push Notification</a></td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>#251</td>
                  <td style={{ wordWrap: 'break-word' }}>2020</td>
                  <td style={{ wordWrap: 'break-word' }}>AMC</td>
                  <td style={{ wordWrap: 'break-word' }}>Classic</td>
                  <td style={{ wordWrap: 'break-word' }}>name6</td>
                  <td style={{ wordWrap: 'break-word' }}>8899001122</td>
                  <td style={{ wordWrap: 'break-word' }}>name6@gmail.com</td>
                  <td style={{ wordWrap: 'break-word' }}>624003</td>
                  <td style={{ wordWrap: 'break-word' }}>Tamilnadu</td>
                  <td style={{ wordWrap: 'break-word' }}>option1</td>
                  <td style={{ wordWrap: 'break-word' }}>Argent Requirements</td>
                  <td style={{ wordWrap: 'break-word' }}>27/08/2024</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}><a href='/Admin/PushNotification'>Push Notification</a></td>
                </tr>

                {/*
                <tr>
                  <td style={{ wordWrap: 'break-word' }}>MDA126</td>
                  <td style={{ wordWrap: 'break-word' }}>5-speed R151 manual 6-speed</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word' }}>Dec-7-2023</td>
                  <td style={{ wordWrap: 'break-word', color: 'green', fontWeight: 'bold' }}>Accept</td>
                </tr>
                */}
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
