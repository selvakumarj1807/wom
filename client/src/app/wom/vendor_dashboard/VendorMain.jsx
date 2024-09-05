import React from 'react'
//import './dashboard.css'

import { ShopOutlined,FormOutlined, SnippetsOutlined, UserOutlined } from '@ant-design/icons'

import { Link } from "react-router-dom";


export default function VendorDashboard() {

  return (
    <main id='main' className='main'>

      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i class="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Vendor Dashboard</li>
          </ol>
        </nav>
      </div>

      <div style={mainContainerStyle}>
        <div style={mainCardsStyle}>
          <div style={cardStyle}>
            <ShopOutlined  style={iconStyle('green')} />
            <div style={cardInnerStyle}>
              <p style={textPrimaryPStyle}>Number of Product</p>
              <span style={textTitleStyle}>578</span>
            </div>
          </div>

          <div style={cardStyle}>
            <FormOutlined style={iconStyle('royalblue')} />
            <div style={cardInnerStyle}>
              <p style={textPrimaryPStyle}>Number of Quote</p>
              <span style={textTitleStyle}>2465</span>
            </div>
          </div>

          <div style={cardStyle}>
            <UserOutlined style={iconStyle('red')} />
            <div style={cardInnerStyle}>
              <p style={textPrimaryPStyle}>Number of Enquiry</p>
              <span style={textTitleStyle}>340</span>
            </div>
          </div>

          <div style={cardStyle}>
            <SnippetsOutlined style={iconStyle('brown')} />
            <div style={cardInnerStyle}>
              <p style={textPrimaryPStyle}>Number of Payment</p>
              <span style={textTitleStyle}>645</span>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

const mainContainerStyle = {
    padding: '10px'
};

const mainCardsStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: '20px'
};

const cardStyle = {
    flex: '1 1 200px',
    backgroundColor: '#f4f4f4',
    margin: '10px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    minWidth: '150px',
};

const cardInnerStyle = {
    marginTop: '10px'
};

const textPrimaryPStyle = {
    fontSize: '14px',
    margin: '0'
};

const textTitleStyle = {
    fontSize: '22px',
    fontWeight: 'bold'
};

const iconStyle = (color) => ({
    fontSize: '24px',
    color: color,
    padding: '10px'
});