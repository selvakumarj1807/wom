import React from 'react'
import { FaEdit } from "react-icons/fa";
import { Form, Table } from "antd";
import Popup from 'reactjs-popup';

const columns = [
  {
    title: "Id.no",
    dataIndex: "id",
    id: "id",
  },

  {
    title: "Name",
    dataIndex: "name",
    id: "name",
  },
  {
    title: "Roles",
    dataIndex: "roles",
    id: "roles",
  },
  {
    title: "Edit",
    dataIndex: 'edit',
    key: 'edit',
    render: () => <Popup trigger=
      {<button style={{ backgroundColor: "white", border: '2px solid white' }}> <FaEdit /> </button>}
      position="left center">
      <div>
        <Form>
          <label style={{ marginRight: '5px', fontWeight: 'bold', textDecoration: 'underline' }}>Roles</label>
          <select>
            <option>Employee</option>
            <option>Receptionist</option>
            <option>Supervisor</option>
            <option>Manager</option>
            <option>General Manager</option>
          </select>
          <br />
          <button style={{ backgroundColor: "#002D62", fontSize: '12px', marginTop: '10px', borderRadius: '10px', padding: '5px', color: "#fff", fontWeight: '500' }} >Save</button>
        </Form>
      </div>
    </Popup>,
  }

];
const data = [
  {
    id: "#ca123",
    name: "sannasi",
    roles: "Employee",
    edit: <FaEdit />
  },
  {
    id: "#ca124",
    name: "sathish",
    roles: "Employee",
    edit: <FaEdit />
  },
  {
    id: "#ca125",
    name: "Dhojay",
    roles: "Receptionist",
    edit: <FaEdit />
  },
  {
    id: "#ca126",
    name: "Sanjay",
    roles: "Supervisor",
    edit: <FaEdit />
  },
  {
    id: "#ca127",
    name: "Muthu",
    roles: "Manager",
    edit: <FaEdit />
  },
  {
    id: "#ca128",
    name: "Mari",
    roles: "Manager",
    edit: <FaEdit />
  },
  {
    id: "#ca129",
    name: "Vijay",
    roles: "General Manager",
    edit: <FaEdit />
  },
];
const Adminroless = () => {
  return (
    <div id="main" className="main">
      <div>
        <br /> <br /> <br />
        <hr />
        <h3 style={{ textAlign: "center", fontSize: '16px' }}>Roles</h3>
        <hr />
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default Adminroless