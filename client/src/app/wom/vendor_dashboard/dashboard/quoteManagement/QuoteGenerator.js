import {
  Container, Grid, TextField, Button, Table, TableHead, TableRow,
  TableCell, TableBody, IconButton, useMediaQuery, Box, Typography, Input
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

const QuoteGenerator = () => {
  const [quoteData, setQuoteData] = useState({
    customerName: '',
    quoteNumber: '',
    items: [{ productname: '', description: '', quantity: 0, price: 0 }],
    attachedFiles: null, // State to store attached files
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const items = [...quoteData.items];
    items[index][name] = value;
    setQuoteData({ ...quoteData, items });
  };

  const handleAddItem = () => {
    setQuoteData({
      ...quoteData,
      items: [...quoteData.items, { productname: '', description: '', quantity: 0, price: 0 }],
    });
  };

  const handleRemoveItem = (index) => {
    const items = [...quoteData.items];
    items.splice(index, 1);
    setQuoteData({ ...quoteData, items });
  };

  const handleFileChange = (event) => {
    setQuoteData({ ...quoteData, attachedFiles: event.target.files });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Quote:', quoteData);
    if (quoteData.attachedFiles) {
      console.log('Attached Files:', quoteData.attachedFiles);
    }
    // Here you can send the quoteData to your backend for further processing
  };

  const styles = {
    formContainer: {
      marginTop: '50px',
    },
    formHeader: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: '30px',
    },
    formGroup: {
      marginBottom: '30px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#f8f9fa',
    },
    tableCell: {
      padding: '10px',
      border: '1px solid #dee2e6',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    button: {
      padding: '10px 20px',
      marginTop: '25px',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      border: 'none',
      color: '#fff',
      borderRadius: '4px',
    },
    fileInput: {
      display: 'block',
      width: '100%',
      padding: '10px',
      marginTop: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#f8f9fa',
    },
  };

  return (
    <main id='main' className='main'>
      <div className="pagetitle">
        <h1>Quote Generator</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i className="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Quote Generator</li>
          </ol>
        </nav>
      </div>
      <Container>
        <div style={styles.formContainer}>
          <h2 style={styles.formHeader}>Create Quote</h2>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} style={styles.formGroup}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Customer Name"
                  variant="outlined"
                  fullWidth
                  name="customerName"
                  value={quoteData.customerName}
                  onChange={(e) => setQuoteData({ ...quoteData, customerName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quote Number"
                  variant="outlined"
                  fullWidth
                  name="quoteNumber"
                  value={quoteData.quoteNumber}
                  onChange={(e) => setQuoteData({ ...quoteData, quoteNumber: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  type="file"
                  inputProps={{ multiple: true }}
                  sx={styles.fileInput}
                  onChange={handleFileChange}
                />
              </Grid>
            </Grid>

            {isMobile ? (
              <Box>
                {quoteData.items.map((item, index) => (
                  <Box key={index} mb={2} p={2} border={1} borderRadius={4}>
                    <Typography variant="h6">Item {index + 1}</Typography>
                    <TextField
                      label="Product Name"
                      variant="outlined"
                      fullWidth
                      name="productname"
                      value={item.productname}
                      onChange={(e) => handleInputChange(index, e)}
                      margin="normal"
                    />
                    <TextField
                      label="Description"
                      variant="outlined"
                      fullWidth
                      name="description"
                      value={item.description}
                      onChange={(e) => handleInputChange(index, e)}
                      margin="normal"
                    />
                    <TextField
                      label="Quantity"
                      type="number"
                      variant="outlined"
                      fullWidth
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) => handleInputChange(index, e)}
                      margin="normal"
                    />
                    <TextField
                      label="Price"
                      type="number"
                      variant="outlined"
                      fullWidth
                      name="price"
                      value={item.price}
                      onChange={(e) => handleInputChange(index, e)}
                      margin="normal"
                    />
                    <IconButton
                      onClick={() => handleRemoveItem(index)}
                      sx={{ color: 'red', mt: 1 }}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            ) : (
              <Table style={styles.table}>
                <TableHead style={styles.tableHeader}>
                  <TableRow>
                    <TableCell style={styles.tableCell}>Product Name</TableCell>
                    <TableCell style={styles.tableCell}>Description</TableCell>
                    <TableCell style={styles.tableCell}>Quantity</TableCell>
                    <TableCell style={styles.tableCell}>Price</TableCell>
                    <TableCell style={styles.tableCell}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {quoteData.items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell style={styles.tableCell}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          name="productname"
                          value={item.productname}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </TableCell>
                      <TableCell style={styles.tableCell}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          name="description"
                          value={item.description}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </TableCell>
                      <TableCell style={styles.tableCell}>
                        <TextField
                          type="number"
                          variant="outlined"
                          fullWidth
                          name="quantity"
                          value={item.quantity}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </TableCell>
                      <TableCell style={styles.tableCell}>
                        <TextField
                          type="number"
                          variant="outlined"
                          fullWidth
                          name="price"
                          value={item.price}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </TableCell>
                      <TableCell style={styles.tableCell}>
                        <IconButton
                          onClick={() => handleRemoveItem(index)}
                          sx={{ color: 'red' }}
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
            <div style={styles.buttonGroup}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddItem}
                style={styles.button}
              >
                Add Item
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={styles.button}
              >
                Submit Quote
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
};

export default QuoteGenerator;
