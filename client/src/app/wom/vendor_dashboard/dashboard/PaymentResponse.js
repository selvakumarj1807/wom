import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const ProductTable = () => {
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
    });

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main id='main' className='main'>
      <div className="pagetitle">
        <h1>Payment Response</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i className="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Payment Response</li>
          </ol>
        </nav>
      </div>
      <div className="container" style={{ overflowX: 'auto' }}>
        <div className="table-responsive" style={{ width: isMobile ? '100%' : '180%', height: 'auto' }}>
          <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
            <thead>
              <tr>
                <th scope="col">Invoice Id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Create Date</th>
                <th scope="col">Due Date</th>
                <th scope="col">Qty</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1215</td>
                <td>5-speed R151 manual 6-speed RC60 manual</td>
                <td>12-03-2024</td>
                <td>12-04-2024</td>
                <td>15</td>
                <td>Paid</td>
              </tr>
              <tr>
                <td>#1214</td>
                <td>5-speed R151 manual 6-speed RC60 manual</td>
                <td>12-03-2024</td>
                <td>12-04-2024</td>
                <td>15</td>
                <td>Paid</td>
              </tr>
              <tr>
                <td>#1215</td>
                <td>5-speed R151 manual 6-speed RC60 manual</td>
                <td>12-03-2024</td>
                <td>12-04-2024</td>
                <td>15</td>
                <td>not Paid</td>
              </tr>
              <tr>
                <td>#1213</td>
                <td>5-speed R151 manual 6-speed RC60 manual</td>
                <td>12-03-2024</td>
                <td>12-04-2024</td>
                <td>15</td>
                <td>Paid</td>
              </tr>
              <tr>
                <td>#1215</td>
                <td>5-speed R151 manual 6-speed RC60 manual</td>
                <td>12-03-2024</td>
                <td>12-04-2024</td>
                <td>15</td>
                <td>Paid</td>
              </tr>
              <tr>
                <td>#1215</td>
                <td>5-speed R151 manual 6-speed RC60 manual</td>
                <td>12-03-2024</td>
                <td>12-04-2024</td>
                <td>15</td>
                <td>not Paid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProductTable;
