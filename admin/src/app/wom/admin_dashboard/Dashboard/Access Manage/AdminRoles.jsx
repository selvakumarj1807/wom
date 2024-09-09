import React, { useState } from 'react';
import './AddEmployee.css'; // External CSS file

const AddEmployee = () => {
  const [year, setYear] = useState('');

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div id="main" className="main">
      <div className="container">
        <div className="form-box">
          <h2>Add Employee</h2>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Employee Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Id</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phno">Password</label>
                <input type="text" id="password" name="password" required />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Confirm Password</label>
                <input type="text" id="cpassword" name="cpassword" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="shippingMethod">Select Role</label>
                <select id="shippingMethod" name="shippingMethod" value={year} onChange={handleChange}>
                  <option value="" disabled>Select Role</option>
                  <option value="option1">Manager</option>
                  <option value="option2">Receptionist</option>
                  <option value="option3">Supervicer</option>
                </select>
              </div>
            </div>


            <div className="button-group">
              <button type="submit" className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
