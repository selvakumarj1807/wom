import React from 'react'
import { Table } from 'antd';
import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    render: (text) => <a href=' '>{text}</a>,
  },
  {
    title: 'Order Num',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href=' '>{text}</a>,
  },
  {
    title: 'Engine Code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Engine Type',
    dataIndex: 'type',
    key: 'type',
  },

  {
    title: 'Forward Date',
    dataIndex: 'date',
    key: 'date',
  },

];
const data = [
  {
    key: '1',
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    user: "user-01",
    type: 'Petrol',
    id: "#123",
    date: "Dec-07-2023"
  },
  {
    key: '2',
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    user: "user-01",
    type: 'Petrol',
    id: "#124",
    date: "Dec-18-2023"
  },
  {
    key: '3',
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    user: "user-03",
    type: 'Petrol',
    id: "#125",
    date: "Dec-25-2023"
  },
  {
    key: '4',
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    user: "user-03",
    type: 'Petrol',
    id: "#126",
    date: "Jan-07-2024"
  },
  {
    key: '5',
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    user: "user-02",
    type: 'Petrol',
    id: "#127",
    date: "Jan-14-2024"
  },
  {
    key: '6',
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    user: "user-02",
    type: 'Petrol',
    id: "#128",
    date: "Jan-22-2024"
  },
  {
    key: '7',
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    user: "user-01",
    type: 'Petrol',
    id: "#129",
    date: "Jan-28-2024"
  },
  {
    key: '8',
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    user: "user-03",
    id: "#130",
    type: 'Petrol',
    date: "Feb-03-2024"
  },
  {
    key: '9',
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    user: "user-02",
    type: 'Petrol',
    id: "#131",
    date: "Feb-08-2024"
  },

];


const ForwardUserForm = () => {
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
        <h2 style={{ textAlign: 'center', fontSize: '16px' }}>Forward to User List</h2>
        <hr />
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default ForwardUserForm