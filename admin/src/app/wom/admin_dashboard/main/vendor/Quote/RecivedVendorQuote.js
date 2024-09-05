import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';


const RecivedVendorQuote = () => {
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
        <hr />
        <h3 style={{ textAlign: 'center' }}>Vendor-Quote(Received)</h3>
        <hr />

        <div className="container" style={{ overflowX: 'auto' }}>
          <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
            <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
              <thead>
                <tr>
                  <th scope="col">Quote Number</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Qunatity</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Recived Date</th>
                  <th scope="col">Quote Download</th>
                  <th scope="col">Edit Quote</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ wordWrap: 'break-word' }}>#256</td>
                  <td style={{ wordWrap: 'break-word' }}>Zhou Maomao5-speed R151 manual 6-speed AC60 automatic</td>
                  <td style={{ wordWrap: 'break-word' }}>2</td>
                  <td style={{ wordWrap: 'break-word' }}>₹ 2500</td>
                  <td style={{ wordWrap: 'break-word' }}>₹ 5000</td>
                  <td style={{ wordWrap: 'break-word' }}>01/09/2024</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}>Quote1.pdf</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}><a href='/Admin/vendor/editQuote'>Edit</a></td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>#257</td>
                  <td style={{ wordWrap: 'break-word' }}>Zhou Maomao5-speed R151 manual 6-speed AC60 automatic</td>
                  <td style={{ wordWrap: 'break-word' }}>2</td>
                  <td style={{ wordWrap: 'break-word' }}>₹ 2500</td>
                  <td style={{ wordWrap: 'break-word' }}>₹ 5000</td>
                  <td style={{ wordWrap: 'break-word' }}>25/08/2024</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}>Quote1.pdf</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}><a href='/Admin/vendor/editQuote'>Edit</a></td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>#258</td>
                  <td style={{ wordWrap: 'break-word' }}>Zhou Maomao5-speed R151 manual 6-speed AC60 automatic</td>
                  <td style={{ wordWrap: 'break-word' }}>2</td>
                  <td style={{ wordWrap: 'break-word' }}>₹ 2500</td>
                  <td style={{ wordWrap: 'break-word' }}>₹ 5000</td>
                  <td style={{ wordWrap: 'break-word' }}>25/08/2024</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}>Quote1.pdf</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}><a href='/Admin/vendor/editQuote'>Edit</a></td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>#259</td>
                  <td style={{ wordWrap: 'break-word' }}>Zhou Maomao5-speed R151 manual 6-speed AC60 automatic</td>
                  <td style={{ wordWrap: 'break-word' }}>2</td>
                  <td style={{ wordWrap: 'break-word' }}>₹ 2500</td>
                  <td style={{ wordWrap: 'break-word' }}>₹ 5000</td>
                  <td style={{ wordWrap: 'break-word' }}>01/09/2024</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}>Quote1.pdf</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}><a href='/Admin/vendor/editQuote'>Edit</a></td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>#250</td>
                  <td style={{ wordWrap: 'break-word' }}>Zhou Maomao5-speed R151 manual 6-speed AC60 automatic</td>
                  <td style={{ wordWrap: 'break-word' }}>2</td>
                  <td style={{ wordWrap: 'break-word' }}>₹ 2500</td>
                  <td style={{ wordWrap: 'break-word' }}>₹ 5000</td>
                  <td style={{ wordWrap: 'break-word' }}>03/09/2024</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}>Quote1.pdf</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}><a href='/Admin/vendor/editQuote'>Edit</a></td>
                </tr>

                <tr>
                  <td style={{ wordWrap: 'break-word' }}>#251</td>
                  <td style={{ wordWrap: 'break-word' }}>Zhou Maomao5-speed R151 manual 6-speed AC60 automatic</td>
                  <td style={{ wordWrap: 'break-word' }}>2</td>
                  <td style={{ wordWrap: 'break-word' }}>₹ 2500</td>
                  <td style={{ wordWrap: 'break-word' }}>₹ 5000</td>
                  <td style={{ wordWrap: 'break-word' }}>01/09/2024</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}>Quote1.pdf</td>
                  <td style={{ wordWrap: 'break-word', color: 'blue' }}><a href='/Admin/vendor/editQuote'>Edit</a></td>
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

export default RecivedVendorQuote;

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

