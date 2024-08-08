import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function GetTheQuote() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="main" className="main">
      <div className="pagetitle">
        <h1>Place the Order</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i className="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Get the Quote</li>
          </ol>
        </nav>
      </div>
      <section className="dashboard section" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12 form">
            <h3 style={{ fontWeight: '700', textDecoration: 'underline', textAlign: 'center' }}>Enter the Quote No</h3>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-4">
              <input type="text" className="form-control w-100 w-md-auto" style={{ borderRadius: '10px', fontSize: '18px' }} placeholder='#1234' />
              <Button onClick={handleShow} variant="primary" className="form-control w-100 w-md-auto" style={{ backgroundColor: "#0e2a47", borderRadius: '10px', fontSize: '18px' }}>
                Search
              </Button>
            </div>
            <Modal show={show} onHide={handleClose} style={{ marginTop: '250px' }}>
              <Modal.Body>
                <h5 style={{ textAlign: 'center', fontSize: '20px', fontWeight: '700', textDecoration: 'underline' }}>Quote Information</h5>
                <div>
                  <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', gap: '10px', fontWeight: '550' }}>
                    <li>Invoice Number  <span style={{ fontWeight: '650', color: '#10375c' }}>: Inv-123 </span> </li>
                    <li>Make / Model / Part <span style={{ fontWeight: '650', color: '#10375c' }}>: Toyota </span> <span style={{ fontWeight: '650', color: '#10375c' }}> Camry </span> <span style={{ fontWeight: '650', color: '#10375c' }}> A/C Compressor Clutch Only</span> </li>
                    <li>Year <span style={{ fontWeight: '650', color: '#10375c' }}>: 2009 </span> </li>
                    <li>Price <span style={{ fontWeight: '650', color: '#10375c' }}>: ₹ 450</span> </li>
                  </ul>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  style={{
                    marginInline: "auto",
                    backgroundColor: " #10375c",
                    color: "#fff",
                    fontWeight: "700",
                  }}
                  onClick={handleClose}
                >
                  <Link style={{ color: '#fff' }} to="/user/user/user_invoice">Get the Invoice</Link>
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetTheQuote;
