import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import axios from 'axios';

const VendorQuote = () => {
  const [data, setData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const emailCookie = Cookies.get('email');

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://wom-server.onrender.com/api/v1/admin/orderManagement/orderByEmail/${emailCookie}`);
      const fetchedData = response.data.orderManage;
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
          [5, 'desc']
        ],
        "columnDefs": [
          { "targets": 5, "orderDataType": 'dom-date-custom' },
        ]
      });


      return () => {
        table.destroy(true);
      };
    }
  }, [data]);

  return (
    <div id="main" className="main" style={{ padding: '20px' }}>
      <div className="pagetitle">
        <h1>History</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i class="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">History</li>
          </ol>
        </nav>
      </div>

      <div className="container" style={{ overflowX: 'auto' }}>
        <div className="table-responsive" style={{ width: isMobile ? '100%' : '200%', height: 'auto' }}>
          <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Invoice Number</th>
                <th>Enquiry Number</th>
                <th>Products</th>
                <th>Total Amount</th>
                <th>Order Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((elem) => (
                  <tr key={elem._id}>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.orderNumber}</td>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.invoiceNumber}</td>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.enquiryNumber}</td>
                    <td style={{ wordWrap: 'break-word', color: 'orange', alignContent: 'center', textAlign: 'center' }}>
                      <a href={`/user/user/order/viewProducts/${elem._id}`}>View Products</a>
                    </td>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.totalPaid}</td>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.orderDate}</td>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.action}</td>
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
