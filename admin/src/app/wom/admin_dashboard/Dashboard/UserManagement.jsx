import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarOutlined, FormOutlined, SnippetsOutlined, UserOutlined } from '@ant-design/icons';
import { FaRupeeSign, FaVideo } from 'react-icons/fa';
import Chart from './charts/Chart';

const UserManagement = () => {
    return (
        <div id="main" className="main" style={{ padding: '20px' }}>
            <div>
                <div className='navbar' style={{ marginBottom: '20px' }}>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        flexWrap: 'wrap' // Allows wrapping on smaller screens
                    }}>
                        <li style={liStyle}><Link to="/Admin/userManage" style={linkStyle}>User</Link></li>
                        <li style={liStyle}><Link to="/Admin/user/acknow" style={linkStyle}>Acknowledgement</Link></li>
                        <li style={liStyle}><Link to="/Admin/user/status" style={linkStyle}>Status</Link></li>
                        <li style={liStyle}><Link to="/Admin/user/history" style={linkStyle}>History</Link></li>
                        <li style={liStyle}><Link to="/Admin/user/invoice" style={linkStyle}>Invoice</Link></li>
                        <li style={liStyle}><Link to="/Admin/user/payment" style={linkStyle}>Payment</Link></li>
                    </ul>
                </div>
                <hr />
                <h2 style={{ textAlign: 'center', fontSize: '16px' }}>User Management</h2>
                <hr />
                <main>
                    <div style={mainContainerStyle}>
                        <div style={mainCardsStyle}>
                            <div style={cardStyle}>
                                <UserOutlined style={iconStyle('green')} />
                                <div style={cardInnerStyle}>
                                    <p style={textPrimaryPStyle}>Number of Member</p>
                                    <span style={textTitleStyle}>578</span>
                                </div>
                            </div>

                            <div style={cardStyle}>
                                <CalendarOutlined style={iconStyle('royalblue')} />
                                <div style={cardInnerStyle}>
                                    <p style={textPrimaryPStyle}>Times of Watching</p>
                                    <span style={textTitleStyle}>2465</span>
                                </div>
                            </div>

                            <div style={cardStyle}>
                                <FormOutlined style={iconStyle('red')} />
                                <div style={cardInnerStyle}>
                                    <p style={textPrimaryPStyle}>Number of User Invoice</p>
                                    <span style={textTitleStyle}>340</span>
                                </div>
                            </div>

                            <div style={cardStyle}>
                                <SnippetsOutlined style={iconStyle('brown')} />
                                <div style={cardInnerStyle}>
                                    <p style={textPrimaryPStyle}>Number of Vendor Invoice</p>
                                    <span style={textTitleStyle}>645</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default UserManagement;

// Inline Styles for Responsiveness
const linkStyle = {
    textDecoration: 'none',
    fontSize: '18px', // Increased font size
    color: 'white', // White text color
    padding: '10px 15px',
    display: 'block', // Ensures the link takes full width in the li
    textAlign: 'center'
};

const liStyle = {
    flex: '1 1 auto', // Flex-grow and flex-shrink with auto basis
    textAlign: 'center',
    padding: '5px'
};

// Media Query in JS (Optional)
const mediaQuery = window.matchMedia('(max-width: 600px)');

if (mediaQuery.matches) {
    linkStyle.fontSize = '12px'; // Adjust font size for mobile
    linkStyle.padding = '8px 10px'; // Adjust padding for mobile
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
