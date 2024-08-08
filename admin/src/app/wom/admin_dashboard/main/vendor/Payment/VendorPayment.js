import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const VendorPayment = () => {
  return (
    <div id="main" className="main">
      <>
        <MDBContainer>
          <div className='navbar'>
            <ul className='flex-list'>
              <li><Link to="/Admin/vendorManage" className='list-head'>Vendor</Link> </li>

              <li><Link to="/Admin/vendor/acknow" className='list-head'>Acknowledgement</Link> </li>
              <li><Link to="/Admin/vendor/status" className='list-head'>Status</Link> </li>
              <li><Link to="/Admin/vendor/history" className='list-head'>History</Link> </li>
              <li><Link to="/Admin/vendor/invoice" className='list-head'>Invoice</Link> </li>
              <li><Link to="/Admin/vendor/payment" className='list-head'>Payment</Link> </li>
              <li><Link to="/Admin/vendor/delivery" className='list-head'>Delivery</Link> </li>
            </ul>
          </div>
          <hr />
          <h2 style={{ textAlign: "center", fontSize: '16px' }}>
            Vendor Payment History
          </h2>
          <hr />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="10" lg="8" xl="5">
              <MDBCard className="rounded-3">
                <MDBCardBody className="p-4">
                  <div className="text-center mb-4">
                    <h3>Settings</h3>
                    <h6>Payment</h6>
                  </div>
                  <p className="fw-bold mb-4 pb-2">Saved cards:</p>
                  <div className="d-flex flex-row align-items-center mb-4 pb-1">
                    <img
                      className="img-fluid"
                      src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                      alt="visa"
                    />
                    <div className="flex-fill mx-3">
                      <div className="form-outline">
                        <MDBInput
                          label="Card Number"
                          id="form1"
                          type="text"
                          size="lg"
                          value="**** **** **** 3193"
                        />
                      </div>
                    </div>
                    <a href="#!">Remove card</a>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4 pb-1">
                    <img
                      className="img-fluid"
                      src="https://img.icons8.com/color/48/000000/visa.png"
                      alt="visa"
                    />
                    <div className="flex-fill mx-3">
                      <div className="form-outline">
                        <MDBInput
                          label="Card Number"
                          id="form2"
                          type="text"
                          size="lg"
                          value="**** **** **** 4296"
                        />
                      </div>
                    </div>
                    <a href="#!">Remove card</a>
                  </div>
                  <p className="fw-bold mb-4">Add new card:</p>
                  <MDBInput
                    label="Cardholder's Name"
                    id="form3"
                    type="text"
                    size="lg"
                    value="Sannasi"
                  />
                  <MDBRow className="my-4">
                    <MDBCol size="7">
                      <MDBInput
                        label="Card Number"
                        id="form4"
                        type="text"
                        size="lg"
                        value="1234 5678 1234 5678"
                      />
                    </MDBCol>
                    <MDBCol size="3">
                      <MDBInput
                        label="Expire"
                        id="form5"
                        type="password"
                        size="lg"
                        placeholder="MM/YYYY"
                      />
                    </MDBCol>
                    <MDBCol size="2">
                      <MDBInput
                        label="CVV"
                        id="form6"
                        type="password"
                        size="lg"
                        placeholder="CVV"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBBtn color="success" size="lg" block>
                    Add card
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    </div>
  );
};

export default VendorPayment;
