import React from 'react'
import { Space, Table } from "antd";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href=' '>{text}</a>,
  },
  {
    title: "Engine Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Engine Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text) => <a href=' '>{text}</a>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Link to="/enquiry/forwardVendor">Forward</Link>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    category: "Engine",
    type: "Petrol",
  },
  {
    key: "2",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    category: "Engine",
    type: "Petrol",
  },
  {
    key: "3",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    category: "Engine",
    type: "Petrol",
  },
  {
    key: "4",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    category: "Engine",
    type: "Petrol",
  },
  {
    key: "5",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    category: "Engine",
    type: "Petrol",
  },
  {
    key: "6",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    category: "Engine",
    type: "Petrol",
  },
  {
    key: "7",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    category: "Engine",
    type: "Petrol",
  },
  {
    key: "8",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    category: "Engine",
    type: "Petrol",
  },
  {
    key: "9",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    category: "Engine",
    type: "Petrol",
  },
];

const RecivedUserForm = () => {
  return (
    <div id="main" className="main">
      <div>
        <div className='navbar'>
          <ul className='flex-list'>
            <li><Link to="/Admin/user/enquiry/recived" className='list-head'>User to Admin</Link> </li>
            <li><Link to="/Admin/user/enquiry/forward " className='list-head'>Admin to User</Link> </li>
          </ul>
        </div>
        <hr />

        <h2 style={{ textAlign: "center", fontSize: '16px' }}>Recived From User List</h2> <hr />
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default RecivedUserForm