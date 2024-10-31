import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; 
import './alertBox.css';

function NavNotice() {
  const [notifications, setNotifications] = useState([]);
  const [paymentNotifications, setPaymentNotifications] = useState([]);
  const emailCookie = Cookies.get('email');

  // Function to fetch general notifications for the user
  const fetchNotifications = async () => {
    try {
      const response = await axios.get('https://wom-server.onrender.com/api/v1/admin/pushNotification', {
        params: { email: emailCookie }
      });
      const newNotifications = response.data.push;
      const unreadNotifications = newNotifications.filter((notification) => {
        const userEmailInfo = notification.email.find(
          (emailObj) => emailObj.email === emailCookie && !emailObj.readStatus
        );
        return userEmailInfo !== undefined;
      });
      setNotifications(unreadNotifications);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Function to fetch payment notifications for the user
  const fetchPaymentNotifications = async () => {
    try {
      const response = await axios.get(
        `https://wom-server.onrender.com/api/v1/admin/orderManagementVendor/orderByEmail/${emailCookie}`
      );
      const newPaymentNotifications = response.data.orderManageVendor;
      
      // Filter unread payment notifications where isRead is false
      const unreadPaymentNotifications = newPaymentNotifications.filter(
        (notification) => notification.vendorEmail === emailCookie && !notification.isRead
      );
      setPaymentNotifications(unreadPaymentNotifications);
    } catch (error) {
      console.error('Error fetching payment notifications:', error);
    }
  };

  const markAsRead = async (notificationId, type) => {
    try {
      let endpoint;
      if (type === "notification") {
        endpoint = `https://wom-server.onrender.com/api/v1/admin/pushNotification/${notificationId}`;
      } else if (type === "paymentNotification") {
        endpoint = `https://wom-server.onrender.com/api/v1/admin/orderManagementVendor/${notificationId}`;
      }

      // Send request to update readStatus
      const response = await axios.put(endpoint, {
        email: emailCookie,
        readStatus: true
      });

      alert(response.data.message);

      if (response.data.success) {
        if (type === "notification") {
          setNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification._id !== notificationId)
          );
        } else if (type === "paymentNotification") {
          setPaymentNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification._id !== notificationId)
          );
        }
      }
    } catch (error) {
      console.error("Error marking notification as read:", error);
      alert("An error occurred while marking the notification as read.");
    }
  };

  // Mark notification as read (for user enquiries)
  const markAsPaymentRead = async (notificationId) => {
    try {
      // Update 'isRead' status in the backend for user enquiry notifications
      await axios.put(`https://wom-server.onrender.com/api/v1/admin/orderManagementVendor/${notificationId}`, {
        isRead: true,
      });

      // Update local state after successful backend update
      setNotifications(prevPaymentNotifications =>
        prevPaymentNotifications.filter(notification => notification._id !== notificationId)
      );

      // Update alert visibility based on remaining unread notifications
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };


  useEffect(() => {
    fetchNotifications();
    fetchPaymentNotifications();
    const interval = setInterval(() => {
      fetchNotifications();
      fetchPaymentNotifications();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <li className="nav-item dropdown">
      <Link to="#" className="nav-link nav-icon a" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">{notifications.length + paymentNotifications.length}</span>
      </Link>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have {notifications.length + paymentNotifications.length} new notifications
          <Link to="/vendor/Enquiry" className="a">
            <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        {/* Render general notifications */}
        {notifications.map((notification, index) => (
          <React.Fragment key={`notif-${index}`}>
            <li className="notification-item">
              <i className={`bi ${notification.icon} text-${notification.type}`}></i>
              <div>
                <h4>{notification.enquiryNumber}</h4>
                <p>{notification.additionalNotes}</p>
                <p>{notification.enquiryDate}</p>
                <button
                  onClick={() => markAsRead(notification._id, "notification")}
                  className="badge rounded-pill bg-primary p-2 ms-2"
                >
                  Mark as read
                </button>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
          </React.Fragment>
        ))}

        {/* Render payment notifications */}
        {paymentNotifications.map((notification, index) => (
          <React.Fragment key={`pay-${index}`}>
            <li className="notification-item">
              <i className="bi bi-currency-rupee text-success"></i>
              <div>
                <h4>{notification.orderNumber}</h4>
                <p>{notification.action}</p>
                <p>{notification.vendorPaidDate}</p>
                <button
                  onClick={() => markAsPaymentRead(notification._id, "paymentNotification")}
                  className="badge rounded-pill bg-primary p-2 ms-2"
                >
                  Mark as read
                </button>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
          </React.Fragment>
        ))}

        <li className="dropdown-footer">
          <Link to="/vendor/Enquiry" className="a">Show all Enquiries</Link>
        </li>
      </ul>
    </li>
  );
}

export default NavNotice;
