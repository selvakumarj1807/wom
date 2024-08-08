import React from 'react'
import './delivery.css'
import { Link } from 'react-router-dom'

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

const VendorDelivery = () => {
  return (
    <div id="main" className="main">
      <>

        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className=" h-100">
            <MDBRow className="justify-content-center align-items-center h-50">
              <MDBCol>
                <hr />
                <h2 style={{ textAlign: 'center', fontSize: '16px' }}>   Delivery Tracking From Vendor</h2>
                <hr />
                <MDBCard
                  className="card-stepper"
                  style={{ borderRadius: "10px" }}
                >
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex flex-column">
                        <span className="lead fw-normal">
                          Your order has been delivered
                        </span>
                        <span className="text-muted small">
                          by DHFL on 27 Feb, 2024
                        </span>
                      </div>
                      <div>
                        <MDBBtn outline>Track order details</MDBBtn>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                      <span className="dot"></span>
                      <hr className="flex-fill track-line" />
                      <span className="dot"></span>
                      <hr className="flex-fill track-line" />
                      <span className="dot"></span>
                      <hr className="flex-fill track-line" />
                      <span className="dot"></span>
                      <hr className="flex-fill track-line" />
                      <span className="d-flex justify-content-center align-items-center big-dot dot">
                        <MDBIcon icon="check text-white" />
                      </span>
                    </div>

                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <div className="d-flex flex-column align-items-start">
                        <span>15 Mar</span>
                        <span>Order placed</span>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <span>15 Mar</span>
                        <span>Order placed</span>
                      </div>
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <span>15 Mar</span>
                        <span>Order Dispatched</span>
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <span>15 Mar</span>
                        <span>Out for delivery</span>
                      </div>
                      <div className="d-flex flex-column align-items-end">
                        <span>15 Mar</span>
                        <span>Delivered</span>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    </div>
  )
}

export default VendorDelivery