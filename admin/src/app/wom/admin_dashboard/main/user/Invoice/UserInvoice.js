import React from 'react'
import { Table } from 'antd';
import { Link } from 'react-router-dom';
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    name: '5-speed R151 manual 6-speed AC60 automatic',
    createdDate: 'Dec-07-2023',
    deliveryDate: 'Jan-15-2024',
    code: '2TR-FE',
    amount: "₹ 6000"
  },
  {
    key: '2',
    name: '5-speed R151 manual 6-speed RC60 manual',
    createdDate: 'Dec-20-2024',
    deliveryDate: 'Jan-10-2024',
    code: '2GD-FTV',
    amount: "₹ 6000"
  },
  {
    key: '3',
    name: '6-speed AC60 automatic',
    createdDate: 'Jan-8-2024',
    deliveryDate: 'Jan-24-2024',
    code: '2GD-FTV',
    amount: "₹ 6000"
  },
  {
    key: '4',
    name: '5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic',
    createdDate: 'Jan-15-2024',
    deliveryDate: 'Feb-2-2024',
    code: '1GD-FTV',
    amount: "₹ 6000"
  },
];

const UserInvoice = () => {
  return (
    <div id="main" className="main">
      <>
        <div className='navbar'>
          <ul className='flex-list'>
            <li><Link to="/Admin/userManage" className='list-head'>User</Link> </li>
            <li><Link to="/Admin/user/acknow" className='list-head'>Acknowledgement</Link> </li>
            <li><Link to="/Admin/user/status" className='list-head'>Status</Link> </li>
            <li><Link to="/Admin/user/history" className='list-head'>History</Link> </li>
            <li><Link to="/Admin/user/invoice" className='list-head'>Invoice</Link> </li>
            <li><Link to="/Admin/user/payment" className='list-head'>Payment</Link> </li>
          </ul>
        </div>
        <hr />
        <h4 style={{ textAlign: 'center', fontSize: '16px' }}>Invoice - User History</h4>
        <hr />

        <Table dataSource={data}>
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Engine Code" dataIndex="code" key="code" />
          <ColumnGroup title="Date">
            <Column title="Created Date" dataIndex="createdDate" key="createdDate" />
            <Column title="Delivery Date" dataIndex="deliveryDate" key="deliveryDate" />
          </ColumnGroup>
          <Column title="Amoount" dataIndex="amount" key="amount" />
        </Table>
      </>
    </div>
  )
}

export default UserInvoice