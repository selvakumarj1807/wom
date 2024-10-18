import React, { useEffect, useState } from 'react';
import './Invoice.css'; // You can keep your CSS file
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import html2pdf from 'html2pdf.js';
import axios from 'axios';

const Invoice = () => {
  const [enquiryNumber, setEnquiryNumber] = useState('');
  const [quoteNumber, setQuoteNumber] = useState('');
  const [quoteDate, setQuoteDate] = useState('');
  const [rows, setRows] = useState([{ id: 1, product: '', unit: '', price: '', amount: '' }]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedEnquiryNumber = sessionStorage.getItem('enquiryNumber');
    const storedQuoteNumber = sessionStorage.getItem('quoteNumber');
    const storedQuoteDate = sessionStorage.getItem('quoteDate');

    setEnquiryNumber(storedEnquiryNumber);
    setQuoteNumber(storedQuoteNumber);
    setQuoteDate(storedQuoteDate);

    if (storedQuoteNumber && storedQuoteDate) {
      fetchVendorQuote(storedQuoteNumber, storedQuoteDate);
    }
  }, []);

  const fetchVendorQuote = async (quoteNumber, quoteDate) => {
    try {
      const response = await axios.get(
        `https://wom-server.onrender.com/api/v1/vendor/vendorQuoteQno/${quoteNumber}`,
        { params: { quoteDate } }
      );
      const vendorQuote = response.data.vendorQuote[0];

      const mappedRows = vendorQuote.items.map((item, index) => ({
        id: index + 1,
        product: item.productname,
        unit: item.quantity,
        price: item.price,
        amount: item.quantity * item.price,
      }));

      setRows(mappedRows);
      calculateTotal(mappedRows);
    } catch (error) {
      console.error("Error fetching vendor quote:", error);
    }
  };

  // Handle input change
  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        const updatedRow = { ...row, [name]: value };
        updatedRow.amount = (updatedRow.unit || 0) * (updatedRow.price || 0); // Handle NaN cases
        return updatedRow;
      }
      return row;
    });
    setRows(updatedRows);
    calculateTotal(updatedRows);
  };

  const addNewRow = () => {
    const newRow = {
      id: rows.length + 1,
      product: '',
      unit: '',
      price: '',
      amount: ''
    };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    calculateTotal(updatedRows);
  };

  const calculateTotal = (updatedRows) => {
    const totalAmount = updatedRows.reduce((sum, row) => sum + parseFloat(row.amount || 0), 0);
    setTotal(totalAmount);
  };

  const handlePrint = () => {
    const invoiceRows = rows.map(
      (row) => `
        <tr>
          <td>${row.product || '-'}</td>
          <td>${row.unit || 0}</td>
          <td>${row.price || 0}</td>
          <td>${row.amount || 0}</td>
        </tr>`
    ).join('');

    const invoice = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          h2 {
            font-weight: 800;
          }
          .invoice {
            margin: 20px auto;
            padding: 20px;
            
            max-width: 800px; /* Make invoice responsive */
          }
          .invoice-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }
          .invoice-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20%;
          }
          .invoice-table th,
          .invoice-table td {
            border: 1px solid #000;
            padding: 10px;
            text-align: center;
          }
          .invoice-table th {
            background-color: #E64A19;
            color: #fff;
            font-weight: bold;
          }
          .invoice-total {
            float: right;
          }
        </style>
      </head>
      <body>
        <div class="invoice" id="invoiceDownload">
          <div class="invoice-header">
            <h2>Invoice</h2>
            <p>Date: ${new Date().toLocaleDateString()}</p>
          </div>
          <table class="invoice-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${invoiceRows}
            </tbody>
          </table>
          <div class="invoice-total">
            <h3>Total: ₹${total.toFixed(2)}</h3>
          </div>
        </div>
      </body>
      </html>
    `;

    const newWindow = window.open('', '', 'width=800,height=900');
    newWindow.document.write(invoice);
    newWindow.document.close();

    newWindow.onload = function () {
      newWindow.focus();
      newWindow.print();
      newWindow.close();
    };
  };

  const handleDownloadPdf = () => {
    const invoiceRows = rows.map(
      (row) => `
        <tr>
          <td>${row.product || '-'}</td>
          <td>${row.unit || 0}</td>
          <td>${row.price || 0}</td>
          <td>${row.amount || 0}</td>
        </tr>`
    ).join('');

    const invoice = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          h2 {
            font-weight: 800;
          }
          .invoice {
            margin: 20px auto;
            padding: 20px;
          
          }
          .invoice-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20%;
          }
          .invoice-table th,
          .invoice-table td {
            border: 1px solid #000;
            padding: 10px;
            text-align: center;
          }
          .invoice-table th {
            background-color: #E64A19;
            color: #fff;
            font-weight: bold;
          }
          .invoice-total {
            float: right;
          }
        </style>
      </head>
      <body>
        <div class="invoiced" id="invoiceDownload">
          <h2>Invoice</h2>
          <p>Date: ${new Date().toLocaleDateString()}</p>
          <table class="invoice-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${invoiceRows}
            </tbody>
          </table>
          <div class="invoice-total">
            <h3>Total: ₹${total.toFixed(2)}</h3>
          </div>
        </div>
      </body>
      </html>
    `;

    const opt = {
      margin: 1,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf()
      .from(invoice)
      .set(opt)
      .save();
  };

  return (
    <div id="main" className="main" style={{ padding: '20px' }}>
      <div className="invoice">
        <h1 style={{ textAlign: 'center' }}>Edit Quote</h1>
        <div>
          <h4>Invoice Number:</h4>
          <input
            type="text"
            className="input-field"
          />
        </div>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="text"
                    name="product"
                    value={row.product}
                    onChange={(e) => handleInputChange(e, row.id)}
                    className="input-field"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="unit"
                    value={row.unit}
                    onChange={(e) => handleInputChange(e, row.id)}
                    className="input-field"
                    min="0"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    value={row.price}
                    onChange={(e) => handleInputChange(e, row.id)}
                    className="input-field"
                    min="0"
                  />
                </td>
                <td>{Number(row.amount || 0).toFixed(2)}</td>
                <td>
                  <DeleteOutlineIcon
                    onClick={() => deleteRow(row.id)}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={addNewRow} className="add-row-button">
            <AddIcon /> Add Row
          </button>
        </div>
        <div className="total-container">
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <button onClick={handlePrint}>Print Invoice</button>
          <button onClick={handleDownloadPdf}>Download PDF</button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
