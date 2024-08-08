import React from 'react'
import { Table, Tag } from 'antd';

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
          let color = tag.length < 9 ? 'geekblue' : 'green';
          if (tag === 'Waiting For Payment') {
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

    tags: ['delivered'],
  },
  {
    key: '2',
    num: 'MDA121',
    name: '5-speed R151 manual 6-speed',

    tags: ['Waiting For Payment'],
  },
  {
    key: '3',
    num: 'MDA122',
    name: '5-speed R151 manual 6-speed',

    tags: ['packing'],
  },
  {
    key: '4',
    num: 'MDA123',
    name: '5-speed R151 manual 6-speed',

    tags: ['delivered'],
  },
  {
    key: '5',
    num: 'MDA124',
    name: '5-speed R151 manual 6-speed',

    tags: ['delivered'],
  },
  {
    key: '6',
    num: 'MDA125',
    name: '5-speed R151 manual 6-speed',

    tags: ['Waiting For Payment'],
  },
  {
    key: '7',
    num: 'MDA126',
    name: '5-speed R151 manual 6-speed',

    tags: ['Waiting For Payment'],
  },
  {
    key: '8',
    num: 'MDA127',
    name: '5-speed R151 manual 6-speed',

    tags: ['packing'],
  },
  {
    key: '9',
    num: 'MDA128',
    name: '5-speed R151 manual 6-speed',

    tags: ['Waiting For Payment'],
  },
  {
    key: '10',
    num: 'MDA129',
    name: '5-speed R151 manual 6-speed',

    tags: ['packing'],
  },
  {
    key: '11',
    num: 'MDA130',
    name: '5-speed R151 manual 6-speed',

    tags: ['Waiting For Payment'],
  },
  {
    key: '12',
    num: 'MDA121',
    name: '5-speed R151 manual 6-speed',

    tags: ['delivered'],
  },
  {
    key: '13',
    num: 'MDA122',
    name: '5-speed R151 manual 6-speed',

    tags: ['delivered'],
  },
  {
    key: '14',
    num: 'MDA123',
    name: '5-speed R151 manual 6-speed',

    tags: ['Packing'],
  },
  {
    key: '15',
    num: 'MDA124',
    name: '5-speed R151 manual 6-speed',

    tags: ['packing'],
  },
];


const UserDelivery = () => {
  return (
    <div id="main" className="main">
      <div>

        <hr />
        <h2 style={{ textAlign: 'center', fontSize: '16px' }}>Delivery to User</h2>
        <hr />


        <Table
          columns={columns}

          dataSource={data}
        />
      </div>
    </div>
  )
}

export default UserDelivery