import React from 'react'
import { Table, Tag } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Invoice Number',
    dataIndex: 'num',
    key: 'num',
    render: (text) => <a href=' '>{text}</a>,
  },
  {
    title: 'Material Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 4 ? 'volcano' : 'green';
          if (tag === 'Pending') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },



];
const data = [
  {
    key: '1',
    num: 'MDA120',
    name: '5-speed R151 manual 6-speed',

    tags: ['paid'],
  },
  {
    key: '2',
    num: 'MDA121',
    name: '5-speed R151 manual 6-speed',

    tags: ['pending'],
  },
  {
    key: '3',
    num: 'MDA122',
    name: '5-speed R151 manual 6-speed',

    tags: ['paid'],
  },
  {
    key: '4',
    num: 'MDA123',
    name: '5-speed R151 manual 6-speed',

    tags: ['paid'],
  },
  {
    key: '5',
    num: 'MDA124',
    name: '5-speed R151 manual 6-speed',

    tags: ['paid'],
  },
  {
    key: '6',
    num: 'MDA125',
    name: '5-speed R151 manual 6-speed',

    tags: ['pending'],
  },
  {
    key: '7',
    num: 'MDA126',
    name: '5-speed R151 manual 6-speed',

    tags: ['pending'],
  },
  {
    key: '8',
    num: 'MDA127',
    name: '5-speed R151 manual 6-speed',

    tags: ['paid'],
  },
  {
    key: '9',
    num: 'MDA128',
    name: '5-speed R151 manual 6-speed',

    tags: ['pending'],
  },
  {
    key: '10',
    num: 'MDA129',
    name: '5-speed R151 manual 6-speed',

    tags: ['paid'],
  },
  {
    key: '11',
    num: 'MDA130',
    name: '5-speed R151 manual 6-speed',

    tags: ['pending'],
  },
  {
    key: '12',
    num: 'MDA121',
    name: '5-speed R151 manual 6-speed',

    tags: ['paid'],
  },
  {
    key: '13',
    num: 'MDA122',
    name: '5-speed R151 manual 6-speed',

    tags: ['paid'],
  },
  {
    key: '14',
    num: 'MDA123',
    name: '5-speed R151 manual 6-speed',

    tags: ['pending'],
  },
  {
    key: '15',
    num: 'MDA124',
    name: '5-speed R151 manual 6-speed',

    tags: ['paid'],
  },
];

const UserPayment = () => {
  return (
    <div id="main" className="main">
      <div>
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
        <h2 style={{ textAlign: 'center', color: "darkred", fontSize: '16px' }}> User Payment History</h2>

        <hr />
        <Table
          columns={columns}

          dataSource={data}
        />
      </div>
    </div>
  )
}

export default UserPayment;