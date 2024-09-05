import React from 'react'
import './dashboard.css'

import { FormOutlined, SnippetsOutlined, UserOutlined } from '@ant-design/icons'

const Dashboard = () => {
    return (
        <div id="main" className="main" style={{ padding: '20px' }}>
            <div>
                <main>
                    <div style={mainContainerStyle}>
                        <div style={mainCardsStyle}>
                            <div style={cardStyle}>
                                <UserOutlined style={iconStyle('green')} />
                                <div style={cardInnerStyle}>
                                    <p style={textPrimaryPStyle}>Number of User</p>
                                    <span style={textTitleStyle}>578</span>
                                </div>
                            </div>

                            <div style={cardStyle}>
                                <UserOutlined style={iconStyle('royalblue')} />
                                <div style={cardInnerStyle}>
                                    <p style={textPrimaryPStyle}>Number of Vendor</p>
                                    <span style={textTitleStyle}>2465</span>
                                </div>
                            </div>

                            <div style={cardStyle}>
                                <FormOutlined style={iconStyle('red')} />
                                <div style={cardInnerStyle}>
                                    <p style={textPrimaryPStyle}>Number of Vendor Invoice</p>
                                    <span style={textTitleStyle}>340</span>
                                </div>
                            </div>

                            <div style={cardStyle}>
                                <SnippetsOutlined style={iconStyle('brown')} />
                                <div style={cardInnerStyle}>
                                    <p style={textPrimaryPStyle}>Number of Order</p>
                                    <span style={textTitleStyle}>645</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard

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