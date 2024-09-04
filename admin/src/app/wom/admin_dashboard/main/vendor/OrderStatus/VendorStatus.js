import React, { useState } from 'react'
import { Radio, Table, Tag } from 'antd';

import VendorNavbar from '../../../Dashboard/VendorNavbar';  // Import the new Navbar component

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
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 8 ? 'geekblue' : 'green';
          if (tag === 'waiting') {
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
    ordernum: "#123",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
    tags: ['success'],
  },
  {
    key: '2',
    ordernum: "#124",
    name: '5-speed R151 manual 6-speed RC60 manual',
    code: '	2GD-FTV',
    type: 'Diesel',
    tags: ['waiting'],
  },
  {
    key: '3',
    ordernum: "#125",
    name: '5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic',
    code: '1GD-FTV',
    type: 'Diesel',
    tags: ['processing'],
  },
  {
    key: '4',
    ordernum: "#126",
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
    tags: ['success'],
  },
  {
    key: '5',
    ordernum: "#127",
    name: '5-speed R151 manual 6-speed RC60 manual',
    code: '	2GD-FTV',
    type: 'Diesel',
    tags: ['success'],
  },
];


const VendorStatus = () => {
  const [top, setTop] = useState('topLeft');
  const [bottom, setBottom] = useState('bottomRight');
  return (
    <div id="main" className="main" style={{ padding: '20px' }}>
      <div>
        <VendorNavbar /> {/* Replace with the new Navbar component */}
        <hr />
        <h2 style={{ textAlign: 'center', fontSize: '16px' }}>Order Status - vendor</h2>
        <hr />

        <div>
          <Radio.Group
            style={{
              marginBottom: 10,
            }}

            value={top}
            onChange={(e) => {
              setTop(e.target.value);
            }}
          />
        </div>
        <Radio.Group
          style={{
            marginBottom: 10,
          }}

          value={bottom}
          onChange={(e) => {
            setBottom(e.target.value);
          }}
        />
        <Table
          columns={columns}

          dataSource={data}
        />
      </div>
    </div>
  )
}

export default VendorStatus