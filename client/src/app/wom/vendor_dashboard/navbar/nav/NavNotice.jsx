import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';  // Make sure js-cookie is imported
import './alertBox.css';

function NavNotice() {
  const [notifications, setNotifications] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  // Retrieve the user's email from the cookie
  const emailCookie = Cookies.get('email');

  // Function to fetch notifications for the specific user
  const fetchNotifications = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/admin/pushNotification', {
        params: {
          email: emailCookie, // Pass the email as a query parameter
        },
      });
      const newNotifications = response.data.push;

      // Filter unread notifications for the user (checking if emailCookie is in notification.email array)
      const unreadNotifications = newNotifications.filter((notification) => {
        // Find the user's email object within the notification's email array
        const userEmailInfo = notification.email.find(
          (emailObj) => emailObj.email === emailCookie && !emailObj.readStatus
        );

        // Return the notification if the user's email exists and the readStatus is false
        return userEmailInfo !== undefined;
      });

      // Update state with unread notifications for this user
      setNotifications(unreadNotifications);

      // Show alert if there are unread notifications
      setShowAlert(unreadNotifications.length > 0);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };


  const markAsRead = async (notificationId) => {
    try {
      // API call to update the readStatus in the backend
      const response = await axios.put(
        `https://wom-server.onrender.com/api/v1/admin/pushNotification/${notificationId}`,
        {
          email: emailCookie,  // Pass the email to update readStatus for this email
          readStatus: true,    // Mark it as read
        }
      );

      // Handle response from the backend
      alert(response.data.message);  // Show success message or failure

      // If update was successful, update the local notifications state
      if (response.data.success) {
        setNotifications((prevNotifications) =>
          prevNotifications.map((notification) => {
            // Update the matching notification by ID
            if (notification._id === notificationId) {
              return {
                ...notification,
                // Update the readStatus for the specific email
                email: notification.email.map((emailObj) =>
                  emailObj.email === emailCookie
                    ? { ...emailObj, readStatus: true }
                    : emailObj
                ),
              };
            }
            return notification;
          })
        );

        // Count unread notifications and update alert visibility
        const unreadCount = notifications.filter((notification) =>
          notification.email.some((emailObj) => !emailObj.readStatus)
        ).length;

        // Update the alert visibility if any unread notifications are left
        setShowAlert(unreadCount > 0);
      }
      // Update local state after successful backend update
      setNotifications(prevNotifications =>
        prevNotifications.filter(notification => notification._id !== notificationId)
      );

      // Update alert visibility based on remaining unread notifications
      setShowAlert(notifications.length > 1);
    } catch (error) {
      console.error("Error marking notification as read:", error);
      alert("An error occurred while marking the notification as read.");
    }
  };


  useEffect(() => {
    if (emailCookie) {
      fetchNotifications();
      const interval = setInterval(fetchNotifications, 60000); // Poll every minute

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [emailCookie]);  // Re-fetch when emailCookie changes

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
                <h4>{notification.enquiryNumber}</h4>
                <p>{notification.additionalNotes}</p>
                <p>{notification.enquiryDate}</p>
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
