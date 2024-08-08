import React from 'react'
import { Space, Table } from 'antd';
import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'Order Num',
    dataIndex: 'ordernum',
    key: 'ordernum',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => text,
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
  }, {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Link to="/quoteGen">Accept</Link>
        <Link to="/">Cancel</Link>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    ordernum: "#123",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
  },
  {
    key: '2',
    ordernum: "#124",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
  },
  {
    key: '3',
    ordernum: "#125",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
  },
  {
    key: '4',
    ordernum: "#126",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
  },
  {
    key: '5',
    ordernum: "#127",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
  },
  {
    key: '6',
    ordernum: "#128",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
  },
  {
    key: '7',
    ordernum: "#129",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
  },
  {
    key: '8',
    ordernum: "#130",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
  },
  {
    key: '9',
    ordernum: "#131",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
  },

];

const RecivedOrderUser = () => {
  return (
    <div id="main" className="main">
      <div>

        <hr />
        <h2 style={{ textAlign: 'center', fontSize: '16px' }}>Order Verified - Recived From User</h2>
        <hr />
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default RecivedOrderUser