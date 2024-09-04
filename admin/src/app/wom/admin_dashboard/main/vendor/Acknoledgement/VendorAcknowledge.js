import React from 'react'
import { Table, Tag } from 'antd';


import VendorNavbar from '../../../Dashboard/VendorNavbar';  // Import the new Navbar component


const columns = [
  {
    title: 'Order Number',
    dataIndex: 'num',
    key: 'num',
    render: (text) => <a href=' '>{text}</a>,
  },
  {
    title: 'Material Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Entry Date',
    dataIndex: 'entryDate',
    key: 'entryDate',
  }, {
    title: 'Accepting Date',
    dataIndex: 'acceptDate',
    key: 'acceptDate',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 6 ? 'volcano' : 'green';
          if (tag === 'Reject / Cancel') {
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
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Accept'],
  },
  {
    key: '2',
    num: 'MDA121',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Reject / Cancel'],
  },
  {
    key: '3',
    num: 'MDA122',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Accept'],
  },
  {
    key: '4',
    num: 'MDA123',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Accept'],
  },
  {
    key: '5',
    num: 'MDA124',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Accept'],
  },
  {
    key: '6',
    num: 'MDA125',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Reject / Cancel'],
  },
  {
    key: '7',
    num: 'MDA126',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Reject / Cancel'],
  },
  {
    key: '8',
    num: 'MDA127',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Accept'],
  },
  {
    key: '9',
    num: 'MDA128',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Reject / Cancel'],
  },
  {
    key: '10',
    num: 'MDA129',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Accept'],
  },
  {
    key: '11',
    num: 'MDA130',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Reject / Cancel'],
  },
  {
    key: '12',
    num: 'MDA121',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Accept'],
  },
  {
    key: '13',
    num: 'MDA122',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Accept'],
  },
  {
    key: '14',
    num: 'MDA123',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',

    tags: ['Reject / Cancel'],
  },
  {
    key: '15',
    num: 'MDA124',
    name: '5-speed R151 manual 6-speed',
    entryDate: 'Dec-7-2023',
    acceptDate: 'Dec-7-2023',
    tags: ['Accept'],
  },
];

const VendorAcknowledge = () => {
  return (
    <div id="main" className="main" style={{ padding: '20px' }}>
      <div>

        <VendorNavbar /> {/* Replace with the new Navbar component */}

        <hr />
        <h2 style={{ textAlign: 'center', fontSize: '16px' }}>Vendor - Acknowledgement</h2>
        <hr />


        <Table
          columns={columns}

          dataSource={data}
        />
      </div>
    </div>
  )
}

export default VendorAcknowledge