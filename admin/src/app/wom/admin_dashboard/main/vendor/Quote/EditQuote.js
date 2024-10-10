import React, { useState } from 'react';
import './Invoice.css'; // You can keep your CSS file
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import html2pdf from 'html2pdf.js';

const Invoice = () => {
  const [rows, setRows] = useState([
    { id: 1, product: '', unit: '', price: '', amount: '' }
  ]);
  const [total, setTotal] = useState(0);

  // Handle input change
  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        const updatedRow = { ...row, [name]: value };
        updatedRow.amount = updatedRow.unit * updatedRow.price;
        return updatedRow;
      }
      return row;
    });
    setRows(updatedRows);
    calculateTotal(updatedRows);
  };

  // Add new row
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

  // Delete a row
  const deleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    calculateTotal(updatedRows);
  };

  // Calculate total sum
  const calculateTotal = (updatedRows) => {
    const totalAmount = updatedRows.reduce((sum, row) => sum + parseFloat(row.amount || 0), 0);
    setTotal(totalAmount);
  };

  const handlePrint = () => {
    const invoiceRows = rows
      .map(
        (row) => `
          <tr>
            <td>${row.product || '-'}</td>
            <td>${row.unit || 0}</td>
            <td>${row.price || 0}</td>
            <td>${row.amount || 0}</td>
          </tr>`
      )
      .join('');

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
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            height: 80vh;
        }

        .invoice-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .invoice-header-left {
            flex: 1;
        }

        .invoice-header-right {
            flex: 1;
            text-align: right;
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
            text-align: center;
        }

        .invoice-total {
            float: right;
        }
        </style>
      </head>
      <body>
        <div class="invoice" id="invoiceDownload">
          <div class="invoice-header">
            <div>
              <img src="data:image/jpeg;base64,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" alt="Company Logo" width="150">
              <h1>Company Name</h1>
              <p>123 Main Street, Cityville, Country</p>
              <p>Email: info@company.com</p>
              <p>Phone: +1 234-567-8901</p>
            </div>
            <div>
              <h2>Invoice</h2>
              <p>Invoice Number: #123456</p>
              <p>Date: ${new Date().toLocaleDateString()}</p>
            </div>
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
          <br><br>
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


  // Download PDF functionality
  const handleDownloadPdf = () => {
    const invoiceRows = rows
      .map(
        (row) => `
          <tr>
            <td>${row.product || '-'}</td>
            <td>${row.unit || 0}</td>
            <td>${row.price || 0}</td>
            <td>${row.amount || 0}</td>
          </tr>`
      )
      .join('');

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
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .invoice-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .invoice-header-left {
            flex: 1;
        }

        .invoice-header-right {
            flex: 1;
            text-align: right;
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
            text-align: center;
        }

        .invoice-total {
            float: right;
        }
        </style>
      </head>
      <body>
        <div class="invoice" id="invoiceDownload">
          <div class="invoice-header">
            <div>
              <img src="data:image/jpeg;base64,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" alt="Company Logo" width="150">
              <h3>Company Name</h3>
              <p>123 Main Street, Cityville, Country</p>
              <p>Email: info@company.com</p>
              <p>Phone: +1 234-567-8901</p>
            </div>
            <div>
              <h2>Invoice</h2>
              <p>Invoice Number: #123456</p>
              <p>Date: ${new Date().toLocaleDateString()}</p>
            </div>
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
          <br><br>
          <div class="invoice-total">
            <h3>Total: ₹${total.toFixed(2)}</h3>
          </div>
          <br><br>
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
    html2pdf().from(invoice).set(opt).save();
  };
  const today = new Date().toLocaleDateString();
  return (
    <div id="main" className="main" style={{ padding: '20px' }}>
      <div id="invoice-container" className="invoice-container">
        <div className="invoice-header">
          <div className="title-date">
            <h2 className="title">INVOICE</h2>
            <p className="date">{today}</p>
          </div>
          <div className="space"></div>
          <input type="text" placeholder="Invoice Number" className="invoice-number" />
        </div>

        <table>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>AMOUNT</th>
              <th style={{ textAlign: 'right' }}>ACTION</th>
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
                    placeholder="Product name"
                    onChange={(e) => handleInputChange(e, row.id)}
                    style={{ width: '300px', marginRight: '10px' }} // Adjust width here
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="unit"
                    value={row.unit}
                    placeholder="0"
                    onChange={(e) => handleInputChange(e, row.id)}
                    style={{ width: '100px', marginRight: '10px' }} // Adjust width here
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    value={row.price}
                    placeholder="0"
                    onChange={(e) => handleInputChange(e, row.id)}
                    style={{ width: '100px', marginRight: '10px' }} // Adjust width here
                  />
                </td>
                <td>
                  <input type="number" name="amount" value={row.amount} disabled
                    style={{ width: '100px', marginRight: '10px' }} // Adjust width here
                  />
                </td>
                <td style={{ textAlign: 'right' }}>
                  <DeleteOutlineIcon onClick={() => deleteRow(row.id)} />
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="5">
                <div className="float">
                  <AddIcon className="plus" onClick={addNewRow} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div id="sum">
          <input type="text" value={total.toFixed(2)} name="total" className="total" disabled />
        </div>
      </div>

      {/* Print and Download buttons */}
      <div className="invoice-actions">
        <button onClick={handlePrint} className="print-btn">Print</button>
        <button onClick={handleDownloadPdf} className="download-btn">Download PDF</button>
      </div>
    </div>
  );
};

export default Invoice;
