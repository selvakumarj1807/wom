import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
const EditQuote = () => {
  return (
    <div id="main" className="main">
      <div>
        <br></br>
        <hr />
        <h2 style={{ textAlign: 'center', fontSize: '16px' }}>Edit Invoice</h2>
        <hr />
        <MDBContainer className="py-5">
          <MDBCard className="p-4">
            <MDBCardBody>
              <MDBContainer className="mb-2 mt-3">
                <MDBRow className="d-flex align-items-baseline">
                  <MDBCol xl="9">
                    <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                      Invoice &gt; &gt; <strong>ID: #123-123</strong>
                    </p>
                  </MDBCol>
                  <MDBCol xl="3" className="float-end">
                    <MDBBtn
                      color="light"
                      ripple="dark"
                      className="text-capitalize border-0"
                    >
                      <MDBIcon fas icon="print" color="primary" className="me-1" />
                      Print
                    </MDBBtn>
                    <MDBBtn
                      color="light"
                      ripple="dark"
                      className="text-capitalize border-0 ms-2"
                    >
                      <MDBIcon
                        far
                        icon="file-pdf"
                        color="danger"
                        className="me-1"
                      />
                      Export
                    </MDBBtn>
                    <hr />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <MDBContainer>
                <MDBCol md="12" className="text-center">

                  <p className="pt-0">tit.com</p>
                </MDBCol>
              </MDBContainer>
              <MDBRow>
                <MDBCol xl="8">
                  <MDBTypography listUnStyled>
                    <li className="text-muted">
                      To: <span style={{ color: "#5d9fc5" }}>Tamil Dgl</span>
                    </li>
                    <li className="text-muted">Street, City</li>
                    <li className="text-muted">State, Country</li>
                    <li className="text-muted">
                      <MDBIcon fas icon="phone-alt" /> 987-654-3210
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol xl="4">
                  <p className="text-muted">Invoice</p>
                  <MDBTypography listUnStyled>
                    <li className="text-muted">
                      <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                      <span className="fw-bold ms-1">ID:</span>#123-456
                    </li>
                    <li className="text-muted">
                      <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                      <span className="fw-bold ms-1">Creation Date: </span>Jun
                      23,2021
                    </li>
                    <li className="text-muted">
                      <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                      <span className="fw-bold ms-1">Status:</span>
                      <span className="badge bg-warning text-black fw-bold ms-1">
                        Unpaid
                      </span>
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
              <MDBRow className="my-2 mx-1 justify-content-center">
                <MDBTable striped borderless>
                  <MDBTableHead
                    className="text-white"
                    style={{ backgroundColor: "#84B0CA" }}
                  >
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Zhou Maomao5-speed R151 manual 6-speed AC60 automatic</td>
                      <td>2</td>
                      <td>₹3000</td>
                      <td>₹6000</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>5-speed R151 manual 6-speed RC60 manual</td>
                      <td>2</td>
                      <td>₹3000</td>
                      <td>₹6000</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>5-speed R151 manual 6-speed RC60 manual</td>
                      <td>2</td>
                      <td>₹3000</td>
                      <td>₹6000</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBRow>
              <MDBRow>
                <MDBCol xl="8">
                  <p className="ms-3">
                    Add additional notes and payment information
                  </p>
                </MDBCol>
                <MDBCol xl="3">
                  <MDBTypography listUnStyled>
                    <li className="text-muted ms-3">
                      <span class="text-black me-4">SubTotal</span>₹ 18000
                    </li>
                    <li className="text-muted ms-3 mt-2">
                      <span class="text-black me-4">Tax(15%)</span>₹ 2700
                    </li>
                  </MDBTypography>
                  <p className="text-black float-start">
                    <span className="text-black me-3"> Total Amount</span>
                    <span style={{ fontSize: "25px" }}>₹ 20700</span>
                  </p>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol xl="10">
                  <p>Thank you for your purchase</p>
                </MDBCol>
                <MDBCol xl="2">
                  <MDBBtn
                    className="text-capitalize"
                    style={{ backgroundColor: "#60bdf3" }}
                  >
                    Send
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  )
}

export default EditQuote;