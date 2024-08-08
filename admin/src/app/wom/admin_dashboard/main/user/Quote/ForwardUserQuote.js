import React from 'react'
import { Space, Table } from 'antd';
import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'Order Num',
    dataIndex: 'ordernum',
    key: 'ordernum',
  }, {
    title: "Forward Date",
    dataIndex: "date",
    key: "date",
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
    title: 'Qunatity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Unit Price',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
  },

  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Link to="/quote/editAdmin">Edit</Link>
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
    quantity: 2,
    date: "Dec-07-2023",
    unitPrice: "₹ 3000",
    totalPrice: "₹ 6000"
  },
  {
    key: '2',
    ordernum: "#124",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    quantity: 2,
    date: "Dec-16-2023",
    unitPrice: "₹ 3000",
    totalPrice: "₹ 6000"
  },
  {
    key: '3',
    ordernum: "#125",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    quantity: 2,
    date: "Dec-23-2023",
    unitPrice: "₹ 3000",
    totalPrice: "₹ 6000"
  },
  {
    key: '4',
    ordernum: "#126",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    quantity: 2,
    date: "Jan-07-2024",
    unitPrice: "₹ 3000",
    totalPrice: "₹ 6000"
  },
  {
    key: '5',
    ordernum: "#127",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    quantity: 2,
    date: "Jan-17-2024",
    unitPrice: "₹ 3000",
    totalPrice: "₹ 6000"
  },
  {
    key: '6',
    ordernum: "#128",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    quantity: 2,
    date: "Jan-23-2024",
    unitPrice: "₹ 3000",
    totalPrice: "₹ 6000"
  },
  {
    key: '7',
    ordernum: "#129",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    quantity: 2,
    date: "Jan-25-2024",
    unitPrice: "₹ 3000",
    totalPrice: "₹ 6000"
  },
  {
    key: '8',
    ordernum: "#130",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    quantity: 2,
    date: "Feb-03-2024",
    unitPrice: "₹ 3000",
    totalPrice: "₹ 6000"
  },
  {
    key: '9',
    ordernum: "#131",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    quantity: 2,
    date: "Feb-17-2024",
    unitPrice: "₹ 3000",
    totalPrice: "₹ 6000"
  },

];

const ForwardUserQuote = () => {
  return (
    <div id="main" className="main">
      <div>
        <hr />
        <h2 style={{ textAlign: 'center', fontSize: '16px' }}>Quotation Forward to User</h2>
        <hr />
        <Table columns={columns} dataSource={data} />
      </div>
    </div>  )
}

export default ForwardUserQuote