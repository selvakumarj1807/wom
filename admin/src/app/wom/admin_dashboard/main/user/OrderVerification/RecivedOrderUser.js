import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Make sure to import the hook

import axios from 'axios';

const VendorQuote = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  const fetchData = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/admin/orderManagement');
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
          [4, 'desc']
        ],
        "columnDefs": [
          { "targets": 4, "orderDataType": 'dom-date-custom' },
        ]
      });


      return () => {
        table.destroy(true);
      };
    }
  }, [data]);

  return (
    <div id="main" className="main" style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: 'rgb(14, 42, 71)' }}>Order Management</h2>

      <div className="container" style={{ overflowX: 'auto' }}>
        <div className="table-responsive" style={{ height: 'auto' }}>
          <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '200%', height: 'auto' }}>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>User's Email</th>
                <th>Products</th>
                <th>Total Amount</th>
                <th>Order Date</th>
                <th>Invoice Number</th>
                <th>Quote Number</th>
                <th>Enquiry Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((elem) => (
                  <tr key={elem._id}>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.orderNumber}</td>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.email}</td>
                    <td style={{ wordWrap: 'break-word', color: 'orange', alignContent: 'center', textAlign: 'center' }}>
                      <a href={`/Admin/user/order/viewProducts/${elem._id}`}>View Products</a>
                    </td>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.totalPaid}</td>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.orderDate}</td>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.invoiceNumber}</td>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.quoteNumber}</td>
                    <td style={{ textAlign: 'center', alignContent: 'center' }}>{elem.enquiryNumber}</td>
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
