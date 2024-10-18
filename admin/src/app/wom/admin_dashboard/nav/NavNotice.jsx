import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './alertBox.css';

function NavNotice() {
  const [notifications, setNotifications] = useState([]);
  const [vendorNotifications, setVendorNotifications] = useState([]); // For vendor notifications

  // Function to fetch enquiry notifications
  const fetchNotifications = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/user/enquiry/unread');
      const newNotifications = response.data.enquiry;

      // Filter unread notifications
      const unreadNotifications = newNotifications.filter(notification => !notification.isRead);
      setNotifications(unreadNotifications);

      // Show alert if there are unread notifications
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Function to fetch vendor quote notifications
  const fetchVendorNotifications = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/vendor/vendorQuoteunread');
      const newVendorNotifications = response.data.vendorQuote;

      // Filter unread vendor quote notifications
      const unreadVendorNotifications = newVendorNotifications.filter(notification => !notification.isRead);
      setVendorNotifications(unreadVendorNotifications);

      // Show alert if there are unread vendor notifications
    } catch (error) {
      console.error('Error fetching vendor notifications:', error);
    }
  };

  // Mark notification as read (for user enquiries)
  const markAsRead = async (notificationId) => {
    try {
      // Update 'isRead' status in the backend for user enquiry notifications
      await axios.put(`https://wom-server.onrender.com/api/v1/user/enquiry/${notificationId}`, {
        isRead: true,
      });

      // Update local state after successful backend update
      setNotifications(prevNotifications =>
        prevNotifications.filter(notification => notification._id !== notificationId)
      );

      // Update alert visibility based on remaining unread notifications
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  // Mark vendor quote notification as read
  const markVendorAsRead = async (notificationId) => {
    try {
      // Update 'isRead' status in the backend for vendor quote notifications
      await axios.put(`https://wom-server.onrender.com/api/v1/vendor/vendorQuote/${notificationId}`, {
        isRead: true,
      });

      // Update local state after successful backend update
      setVendorNotifications(prevVendorNotifications =>
        prevVendorNotifications.filter(notification => notification._id !== notificationId)
      );

      // Update alert visibility based on remaining unread notifications
    } catch (error) {
      console.error('Error marking vendor notification as read:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
    fetchVendorNotifications(); // Fetch vendor notifications as well
    const interval = setInterval(() => {
      fetchNotifications();
      fetchVendorNotifications(); // Poll both sets of notifications
    }, 60000); // Poll every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <li className="nav-item dropdown">
      <Link to="#" className="nav-link nav-icon a" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">{notifications.length + vendorNotifications.length}</span>
      </Link>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have {notifications.length + vendorNotifications.length} new notifications
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        {/* Display user enquiry notifications */}
        {notifications.map((notification, index) => (
          <React.Fragment key={index}>
            <li className="notification-item">
              <i className={`bi ${notification.icon} text-${notification.type}`}></i>
              <div>
                <h4>{notification.enquiryNumber}</h4>
                <p>{notification.contactName}</p>
                <p>{notification.enquiryDate}</p>
                <button onClick={() => markAsRead(notification._id)} className="btn">Mark as read</button>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
          </React.Fragment>
        ))}

        {/* Display vendor quote notifications */}
        {vendorNotifications.map((vendorNotification, index) => (
          <React.Fragment key={index}>
            <li className="notification-item">
              <i className="bi bi-file-earmark-text text-warning"></i> {/* Vendor quote icon */}
              <div>
                <h4>{vendorNotification.quoteNumber}</h4>
                <p>{vendorNotification.vendorEmail}</p>
                <p>{vendorNotification.quoteDate}</p>
                <button onClick={() => markVendorAsRead(vendorNotification._id)} className="btn">Mark as read</button>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
          </React.Fragment>
        ))}

        <li className="dropdown-footer">
          <Link to="/Admin/user/acknow" className='a'>Show all Enquiries</Link>
        </li>
        <li className="dropdown-footer">
          <Link to="/Admin/vendor/recivedQuote" className='a'>Show all Vendor Quote</Link>
        </li>
      </ul>

      {/* Alert Box 
      {showAlert && (
        <div className="alert alert-info fixed-alert">
          You have unread messages.
          <button onClick={() => setShowAlert(false)} className="btn-close" aria-label="Close"></button>
        </div>
      )}
        */}
    </li>
  );
}

export default NavNotice;
