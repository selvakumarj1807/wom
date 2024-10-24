import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';  // Make sure js-cookie is imported
import './alertBox.css';

function NavNotice() {
  const [notifications, setNotifications] = useState([]);

  // Retrieve the user's email from the cookie
  const emailCookie = Cookies.get('email');

  // Function to fetch notifications for the specific user
  const fetchNotifications = async () => {
    try {
      //const response = await axios.get('https://wom-server.onrender.com/api/v1/admin/forwardEditQuoteAdminUnread');

      const response = await axios.get(
        `https://wom-server.onrender.com/api/v1/admin/forwardEditQuoteAdminUnread`,
        { params: { emailCookie } }
      );
      const newNotifications = response.data.editQuoteForword;

      // Filter unread notifications for the user (checking if emailCookie is in notification.email array)
      // Filter unread notifications
      const unreadNotifications = newNotifications.filter(notification => !notification.isRead);
      setNotifications(unreadNotifications);

      // Show alert if there are unread notifications
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Mark notification as read (for user enquiries)
  const markAsRead = async (notificationId) => {
    try {
      // Update 'isRead' status in the backend for user enquiry notifications
      await axios.put(`https://wom-server.onrender.com/api/v1/admin/forwardEditQuoteAdminUnread/${notificationId}`, {
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


  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(() => {
      fetchNotifications();
    }, 60000); // Poll every minute

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
          <Link to="/vendor/Enquiry" className='a'>
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
                <h4>Invoice Number : {notification.invoiceNumber}</h4>
                <p>Enquiry Number : {notification.enquiryNumber}</p>
                <p>{notification.forwordDate}</p>
                <button onClick={() => markAsRead(notification._id)} className="badge rounded-pill bg-primary p-2 ms-2">Mark as read</button>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
          </React.Fragment>
        ))}
        <li className="dropdown-footer">
          <Link to="/vendor/Enquiry" className='a'>Show all Enquiries</Link>
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
