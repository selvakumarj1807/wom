import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const EmployeeTable = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the initial window size
    setIsMobile(window.innerWidth <= 768);

    // Function to update state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initialize DataTable
    $('#bootstrapdatatable').DataTable({
      "pagingType": "simple_numbers",
      "aLengthMenu": [
        [3, 5, 10, 25, -1],
        [3, 5, 10, 25, "All"]
      ],
      "iDisplayLength": 3,
      "responsive": true,
      "autoWidth": false,
      "columnDefs": [
        { "width": "20%", "targets": 0 }, // Adjust width for the first column
        { "width": "15%", "targets": 1 }, // Adjust width for the second column
        { "width": "20%", "targets": 2 }, // Adjust width for the third column
        { "width": "15%", "targets": 3 }, // Adjust width for the fourth column
        { "width": "15%", "targets": 4 }, // Adjust width for the fifth column
        { "width": "20%", "targets": 5 }, // Adjust width for the sixth column
        { "width": "10%", "targets": 6 }, // Adjust width for the seventh column
      ]
    });

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main id='main' className='main'>
      <hr />
      <h2 style={{ textAlign: 'center', fontSize: '16px' }}>Employee Details</h2>
      <hr />
      <div className="container" style={{ overflowX: 'auto' }}>
        <div className="table-responsive" style={{ width: '100%', height: 'auto' }}>
          <table id="bootstrapdatatable" className="table table-striped table-bordered" style={{ width: '100%', height: 'auto' }}>
            <thead>
              <tr>
                <th scope="col">Employee Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Employee Type</th>
                <th scope="col">Roles Permission</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ wordWrap: 'break-word' }}>name1</td>
                <td>9500912258</td>
                <td style={{ wordWrap: 'break-word' }}>name1@gmail.com</td>
                <td>12345678</td>
                <td>Manager</td>
                <td style={{ wordWrap: 'break-word' }}>Permission 01, Permission 02, Permission 03</td>
                <td>
                  <i className="fas fa-edit" style={{ color: 'green', cursor: 'pointer', marginRight: '10px' }}></i>
                  <i className="fas fa-trash" style={{ color: 'red', cursor: 'pointer' }}></i>
                </td>
              </tr>
              <tr>
                <td style={{ wordWrap: 'break-word' }}>name2</td>
                <td>9500912258</td>
                <td style={{ wordWrap: 'break-word' }}>name2@gmail.com</td>
                <td>12345678</td>
                <td>Receptionist</td>
                <td style={{ wordWrap: 'break-word' }}>Permission 01, Permission 02, Permission 03</td>
                <td>
                  <i className="fas fa-edit" style={{ color: 'green', cursor: 'pointer', marginRight: '10px' }}></i>
                  <i className="fas fa-trash" style={{ color: 'red', cursor: 'pointer' }}></i>
                </td>
              </tr>
              <tr>
                <td style={{ wordWrap: 'break-word' }}>name3</td>
                <td>9500912258</td>
                <td style={{ wordWrap: 'break-word' }}>name3@gmail.com</td>
                <td>12345678</td>
                <td>Manager</td>
                <td style={{ wordWrap: 'break-word' }}>Permission 01, Permission 02, Permission 03</td>
                <td>
                  <i className="fas fa-edit" style={{ color: 'green', cursor: 'pointer', marginRight: '10px' }}></i>
                  <i className="fas fa-trash" style={{ color: 'red', cursor: 'pointer' }}></i>
                </td>
              </tr>
              <tr>
                <td style={{ wordWrap: 'break-word' }}>name4</td>
                <td>9500912258</td>
                <td style={{ wordWrap: 'break-word' }}>name4@gmail.com</td>
                <td>12345678</td>
                <td>Supervisor</td>
                <td style={{ wordWrap: 'break-word' }}>Permission 01, Permission 02, Permission 03</td>
                <td>
                  <i className="fas fa-edit" style={{ color: 'green', cursor: 'pointer', marginRight: '10px' }}></i>
                  <i className="fas fa-trash" style={{ color: 'red', cursor: 'pointer' }}></i>
                </td>
              </tr>
              <tr>
                <td style={{ wordWrap: 'break-word' }}>name5</td>
                <td>9500912258</td>
                <td style={{ wordWrap: 'break-word' }}>name5@gmail.com</td>
                <td>12345678</td>
                <td>Manager</td>
                <td style={{ wordWrap: 'break-word' }}>Permission 01, Permission 02, Permission 03</td>
                <td>
                  <i className="fas fa-edit" style={{ color: 'green', cursor: 'pointer', marginRight: '10px' }}></i>
                  <i className="fas fa-trash" style={{ color: 'red', cursor: 'pointer' }}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default EmployeeTable;
