import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './alertBox.css'


function NavNotice() {
  const [notifications, setNotifications] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  // Function to fetch notifications
  const fetchNotifications = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/user/enquiry/unread');
      const newNotifications = response.data.enquiry;

      // Filter unread notifications
      const unreadNotifications = newNotifications.filter(notification => !notification.isRead);
      setNotifications(unreadNotifications);

      // Show alert if there are unread notifications
      setShowAlert(unreadNotifications.length > 0);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Mark notification as read
  const markAsRead = async (notificationId) => {
    try {
      // Update 'isRead' status in the backend
      await axios.put(`https://wom-server.onrender.com/api/v1/user/enquiry/${notificationId}`, {
        isRead: true,
      });

      // Update local state after successful backend update
      setNotifications(prevNotifications =>
        prevNotifications.filter(notification => notification._id !== notificationId)
      );

      // Update alert visibility based on remaining unread notifications
      setShowAlert(notifications.length > 1);
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 60000); // Poll every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <li className="nav-item dropdown">
      <Link to="#" className="nav-link nav-icon a" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">{notifications.length}</span>
      </Link>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have {notifications.length} new notifications
          <Link to="/Admin/user/acknow" className='a'>
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        {notifications.map((notification, index) => (
          <React.Fragment key={index}>
            <li className="notification-item">
              <i className={`bi ${notification.icon} text-${notification.type}`}></i>
              <div>
                <h4>{notification.enquiryNumber}</h4>
                <p>{notification.contactName}</p>
                <p>{notification.enquiryDate}</p>
                <button onClick={() => markAsRead(notification._id)} className="btn btn-link">Mark as read</button>
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
      </ul>

      {/* Alert Box */}
      {showAlert && (
        <div className="alert alert-info fixed-alert">
          You have unread messages.
          <button onClick={() => setShowAlert(false)} className="btn-close" aria-label="Close"></button>
        </div>
      )}
    </li>
  );
}

export default NavNotice;
