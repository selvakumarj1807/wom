import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";
import $ from "jquery";
import "datatables.net";
import "datatables.net-responsive";

const PushNotification = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    // Initialize DataTable with responsive configuration
    const table = $('#bootstrapdatatable').DataTable({
      responsive: false,
      autoWidth: false,
      lengthMenu: [
        [3, 5, 10, 25, -1],
        [3, 5, 10, 25, "All"]
      ],
      displayLength: 3,
      columnDefs: [
        { orderable: false, targets: 0 }  // Disable sorting on the first column (checkboxes)
      ]
    });

    return () => {
      table.destroy();
    };
  }, []);

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    const checkboxes = document.querySelectorAll('.rowSelect');
    checkboxes.forEach(checkbox => checkbox.checked = isChecked);
    setSelectedRows(isChecked ? Array.from(checkboxes).map(cb => cb.value) : []);
  };

  const handleRowSelect = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    setSelectedRows(prevState => {
      if (isChecked) {
        return [...prevState, value];
      } else {
        return prevState.filter(row => row !== value);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedRows.length > 0) {
      alert("Push Notification sent successfully.");
    } else {
      alert("Please select at least one Vendor.");
    }

    // You can add your AJAX code here to send the form data to the server
  };

  return (

    <div id="main" className="main" style={{ padding: '20px' }}>
      <div>
        <hr />
        <h3 style={{ textAlign: 'center' }}>Push Notification</h3>
        <hr />

        <div className="container">
          <div className="RecycleContainer d-flex justify-content-center gap-4 flex-wrap">
            <select className="form-select">
              <option selected>Select Year</option>
              <option value={2024}>2024</option>
              <option value={2023}>2023</option>
              <option value={2022}>2022</option>
              <option value={2021}>2021</option>
              <option value={2020}>2020</option>
              <option value={2019}>2019</option>
              <option value={2018}>2018</option>
              <option value={2017}>2017</option>
              <option value={2016}>2016</option>
              <option value={2015}>2015</option>
              <option value={2014}>2014</option>
              <option value={2013}>2013</option>
              <option value={2012}>2012</option>
              <option value={2011}>2011</option>
              <option value={2010}>2010</option>
            </select>
            <select className="form-select">
              <option selected>Select Make</option>
              <option value={"AMC"}>AMC</option>
              <option value={"Acura"}>Acura</option>
              <option value={"Alfa"}>Alfa</option>
              <option value={"Audi"}>Audi</option>
              <option value={"BMW"}>BMW</option>
              <option value={"Buick"}>Buick</option>
              <option value={"Ford"}>Ford</option>
            </select>
            <select className="form-select">
              <option selected>Select Model</option>
              <option value={"Ambassador"}>Ambassador</option>
              <option value={"American"}>American</option>
              <option value={"Amx"}>Amx</option>
              <option value={"Classic"}>Classic</option>
              <option value={"RDX"}>RDX</option>
              <option value={"RL"}>RL</option>
              <option value={"RSX"}>RSX</option>
              <option value={"147"}>147</option>
              <option value={"GTV6"}>GTV6</option>
              <option value={"Mito"}>Mito</option>
              <option value={"A3"}>A3</option>
              <option value={"A4"}>A4</option>
              <option value={"Q3"}>Q3</option>
              <option value={"R8"}>R8</option>
              <option value={"RS3"}>RS3</option>
            </select>
          </div>

          <hr />

          <center>
            <h4>Select Vendors</h4>
          </center>

          <div className="table-responsive">
            <form id="tableForm" onSubmit={handleSubmit}>
              <table id="bootstrapdatatable" className="table table-striped table-bordered dt-responsive nowrap" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" id="selectAll" onChange={handleSelectAll} /> Select All
                    </th>
                    <th>Vendor Email</th>
                    <th>Business Name</th>
                    <th>Company Name</th>
                    <th>City</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          className="rowSelect"
                          name="rowSelect[]"
                          value={vendor.id}
                          onChange={handleRowSelect}
                        />
                      </td>
                      <td>{vendor.email}</td>
                      <td>{vendor.businessName}</td>
                      <td>{vendor.companyName}</td>
                      <td>{vendor.city}</td>
                      <td>{vendor.state}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br />
              <br />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

const vendors = [
  { id: 1, email: "selva@gmail.com", businessName: "Recycle Engine", companyName: "Recycle Engine Pvt", city: "Coimbatore", state: "Tamil Nadu" },
  { id: 2, email: "kumar@gmail.com", businessName: "Recycle Engine", companyName: "Recycle Engine Pvt", city: "Coimbatore", state: "Tamil Nadu" },
  { id: 3, email: "ram@gmail.com", businessName: "Recycle Engine", companyName: "Recycle Engine Pvt", city: "Coimbatore", state: "Tamil Nadu" },
  { id: 4, email: "arun@gmail.com", businessName: "Recycle Engine", companyName: "Recycle Engine Pvt", city: "Coimbatore", state: "Tamil Nadu" },
  { id: 5, email: "selva@gmail.com", businessName: "Recycle Engine", companyName: "Recycle Engine Pvt", city: "Chennai", state: "Tamil Nadu" },
  { id: 6, email: "deepa@gmail.com", businessName: "Recycle Engine", companyName: "Recycle Engine Pvt", city: "Chennai", state: "Tamil Nadu" },
  { id: 7, email: "aa@gmail.com", businessName: "Recycle Engine", companyName: "Recycle Engine Pvt", city: "Trichy", state: "Tamil Nadu" },
  { id: 8, email: "bb@gmail.com", businessName: "Recycle Engine", companyName: "Recycle Engine Pvt", city: "Trichy", state: "Tamil Nadu" }
];

export default PushNotification;
