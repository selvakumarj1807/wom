import React, { useEffect, useState } from 'react';
import './Invoice.css'; // You can keep your CSS file
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import html2pdf from 'html2pdf.js';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const Invoice = () => {
  const location = useLocation();  // Move useLocation outside of useEffect
  const [enquiryNumber, setEnquiryNumber] = useState('');
  const [quoteNumber, setQuoteNumber] = useState('');
  const [quoteDate, setQuoteDate] = useState('');
  const [rows, setRows] = useState([{ id: 1, product: '', unit: '', price: '', amount: '' }]);
  const [total, setTotal] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const [invoiceNumber, setInvoiceNumber] = useState(''); // New state for Invoice Number
  // Handle input change for Invoice Number
  const handleInvoiceNumberChange = (e) => {
    setInvoiceNumber(e.target.value);
  };

  const [email, setEmail] = useState('');

  const fetchData = async () => {
    try {
      // Fetch the enquiry details using the enquiry number
      const response = await axios.get(
        `https://wom-server.onrender.com/api/v1/user/enquiry/enquiryNumber/${enquiryNumber}`
      );

      // Extract the relevant enquiry data
      const fetchedData = response.data.enquiry;

      if (fetchedData && fetchedData.length > 0) {
        // Extract the email from the first enquiry object and store it in state
        setEmail(fetchedData[0].email);
      }

      // Update state with fetched data (if needed elsewhere)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [enquiryNumber]);


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const storedEnquiryNumber = queryParams.get('enquiryNumber');
    const storedQuoteNumber = queryParams.get('quoteNumber');
    const storedQuoteDate = queryParams.get('quoteDate');

    // Set the retrieved values to state
    setEnquiryNumber(storedEnquiryNumber);
    setQuoteNumber(storedQuoteNumber);
    setQuoteDate(storedQuoteDate);

    if (storedQuoteNumber && storedQuoteDate) {
      fetchVendorQuote(storedQuoteNumber, storedQuoteDate);
    }
  }, [location.search]);  // Re-run when location.search changes


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
            text-align: center;
          }
          .invoicedo {
            margin: 5px;
            padding: 10px;
          
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
            <p>Invoice Number: ${invoiceNumber || '-'}</p> <!-- Display invoiceNumber here -->
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
          .invoicedo {
            margin: 5px;
            padding: 10px;
          
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
        <div class="invoicedo" id="invoiceDownload">
          <h2>Invoice</h2>
          <p>Date: ${new Date().toLocaleDateString()}</p>
          <p>Invoice Number: ${invoiceNumber || '-'}</p> <!-- Display invoiceNumber here -->
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

  const handleSubmitAndUploadPdf = async () => {
    const invoiceRows = rows.map(
      (row) => `
        <tr>
          <td>${row.product || '-'}</td>
          <td>${row.unit || 0}</td>
          <td>${row.price || 0}</td>
          <td>${row.amount || 0}</td>
        </tr>`
    ).join('');

    const invoiceContent = `
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
            margin-top: 50px;
            font-weight: 800;
          }
          .invoiced {
            margin: 30px;
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
          <p>Invoice Number: ${invoiceNumber || '-'}</p> <!-- Display invoiceNumber here -->
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

    // Generate PDF blob
    const pdfBlob = await html2pdf().from(invoiceContent).toPdf().output('blob');

    if (!invoiceNumber.trim()) { // Check if invoice number is empty
      alert("Invoice Number is required");
      return;
    }
    const formatDate = (date) => {
      const d = new Date(date);
      const day = d.getDate().toString().padStart(2, '0');
      const month = (d.getMonth() + 1).toString().padStart(2, '0');
      const year = d.getFullYear();
      const hours = d.getHours().toString().padStart(2, '0');
      const minutes = d.getMinutes().toString().padStart(2, '0');
      const period = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
      return `${day}/${month}/${year} - ${formattedHours}:${minutes} ${period}`;
    };
    const forwordDate = formatDate(new Date());

    // Create FormData and append the PDF file
    const formData = new FormData();
    formData.append('attachedFile', new File([pdfBlob], 'invoice.pdf', { type: 'application/pdf' }));

    // Append enquiryNumber, quoteNumber, quoteDate, total, and rows to FormData
    formData.append('enquiryNumber', enquiryNumber);
    formData.append('quoteNumber', quoteNumber);
    formData.append('quoteDate', quoteDate);
    formData.append('email', email);
    formData.append('forwordDate', forwordDate);
    formData.append('total', total.toFixed(2));
    formData.append('items', JSON.stringify(rows)); // Send rows as a JSON string
    formData.append('invoiceNumber', invoiceNumber); // Add Invoice Number to FormData

    try {
      // Upload PDF and data to the backend
      const response = await axios.post(
        'https://wom-server.onrender.com/api/v1/admin/forwardEditQuoteAdmin/new',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      console.log('Upload pdf and Submit values successful:', response.data);

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage('Quote Send Successfully!');
      }

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Error uploading PDF:', error);
    }
  };


  return (
    <div id="main" className="main" style={{ padding: '20px' }}>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}

      <div className="invoice">
        <h1 style={{ textAlign: 'center' }}>Edit Quote</h1>

        <div className="invoice-number">
          <h4>Invoice Number</h4>
          <input
            type="text"
            className="input-field"
            placeholder="#Inv1234"
            value={invoiceNumber} // Bind state value
            onChange={handleInvoiceNumberChange} // Update state on input change
            required // Mark field as required
          />
        </div>

        {/* Responsive Table Wrapper */}
        <div className="table-container">
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
        </div>

        <div>
          <button onClick={addNewRow} className="add-row-button">
            <AddIcon /> Add Row
          </button>
        </div>

        <h3 style={{ textAlign: 'right', marginTop: '5px' }}>Total: ₹{total.toFixed(2)}</h3>

        <div className="total-container">
          <button onClick={handlePrint}>Print Invoice&nbsp;&nbsp;&nbsp;&nbsp;</button>
          <button onClick={handleDownloadPdf}>Download PDF</button>
        </div>

        <center>
          <button style={{ backgroundColor: 'rgb(1, 57, 117)' }} onClick={handleSubmitAndUploadPdf}>Send Invoice</button>
        </center>
      </div>
    </div>
  );
};

export default Invoice;

const styles = {
  successMessage: {
    height: '30px',
    backgroundColor: 'lightgreen',
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    paddingLeft: '30px',
    position: 'fixed',   // Fix the element to the top
    top: '60px',         // Offset from the top by 30px
    width: '100%',       // Optionally set the width to 100% to stretch across the screen
    zIndex: 1000         // Ensure it's above other content if needed
  }

};