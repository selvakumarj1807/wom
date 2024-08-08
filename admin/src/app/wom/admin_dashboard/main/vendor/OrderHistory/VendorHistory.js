import React from 'react'
import { Table } from 'antd';
import { Link } from 'react-router-dom';
const { Column, ColumnGroup } = Table;
const data = [

  {
    key: '1',
    ordernum: "#123",
    name: '5-speed R151 manual 6-speed AC60 automatic',
    createdDate: 'Dec-07-2023',
    deliveryDate: 'Jan-15-2024',
    code: '2TR-FE',
  },
  {
    key: '2',
    ordernum: "#124",
    name: '5-speed R151 manual 6-speed RC60 manual',
    createdDate: 'Dec-20-2024',
    deliveryDate: 'Jan-10-2024',
    code: '2GD-FTV',
  },
  {
    key: '3',
    ordernum: "#125",
    name: '6-speed AC60 automatic',
    createdDate: 'Jan-8-2024',
    deliveryDate: 'Jan-24-2024',
    code: '2GD-FTV',
  },
  {
    key: '4',
    ordernum: "#126",
    name: '5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic',
    createdDate: 'Jan-15-2024',
    deliveryDate: 'Feb-2-2024',
    code: '1GD-FTV',
  },
  {
    key: '5',
    ordernum: "#126",
    name: '5-speed R151 manual 6-speed AC60 automatic',
    createdDate: 'Dec-07-2023',
    deliveryDate: 'Jan-15-2024',
    code: '2TR-FE',
  },
  {
    key: '6',
    ordernum: "#127",
    name: '5-speed R151 manual 6-speed RC60 manual',
    createdDate: 'Dec-20-2024',
    deliveryDate: 'Jan-10-2024',
    code: '2GD-FTV',
  },
  {
    key: '7',
    ordernum: "#128",
    name: '6-speed AC60 automatic',
    createdDate: 'Jan-8-2024',
    deliveryDate: 'Jan-24-2024',
    code: '2GD-FTV',
  },
  {
    key: '8',
    ordernum: "#129",
    name: '5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic',
    createdDate: 'Jan-15-2024',
    deliveryDate: 'Feb-2-2024',
    code: '1GD-FTV',
  },
];

const VendorHistory = () => {
  return (
    <div id="main" className="main">
      <>
        <div className='navbar'>
          <ul className='flex-list'>
            <li><Link to="/Admin/vendorManage" className='list-head'>Vendor</Link> </li>

            <li><Link to="/Admin/vendor/acknow" className='list-head'>Acknowledgement</Link> </li>
            <li><Link to="/Admin/vendor/status" className='list-head'>Status</Link> </li>
            <li><Link to="/Admin/vendor/history" className='list-head'>History</Link> </li>
            <li><Link to="/Admin/vendor/invoice" className='list-head'>Invoice</Link> </li>
            <li><Link to="/Admin/vendor/payment" className='list-head'>Payment</Link> </li>
            <li><Link to="/Admin/vendor/delivery" className='list-head'>Delivery</Link> </li>
          </ul>
        </div>
        <hr />
        <h2 style={{ textAlign: 'center', fontSize: '16px' }}>Order History - vendor</h2>
        <hr />
        <Table dataSource={data}>
          <Column title="Order Number" dataIndex="ordernum" key="ordernum" />
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Engine Code" dataIndex="code" key="code" />
          <ColumnGroup title="Date">
            <Column title="Created Date" dataIndex="createdDate" key="createdDate" />
            <Column title="Delivery Date" dataIndex="deliveryDate" key="deliveryDate" />
          </ColumnGroup>
        </Table>
      </>
    </div>
  )
}

export default VendorHistory