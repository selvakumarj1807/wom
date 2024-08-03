import React from 'react'
import '../userOrderStatus.css'

function UserOrderStatusItem({items}) {
    const handleStatus = (status) => {
        switch (status) {
          case "Delivery":
            return "success";
          case "Shipping":
            return "warning";
          case "Packing":
            return "danger";
          default:
            return "success";
        }
      };
  return (
    <table className="table table-borderless datatable">
    <thead className="table-light">
      <tr>
        <th scope="col">Product Name</th>
        <th scope="col">Model Number</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <tr key={item._id}>
            
            <td>{item.productName}</td>
            
            <td>{item.modelNumber}</td>
            <td>
              <span className={`badge bg-${handleStatus(item.status)}`}>
                {item.status}
              </span>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
  )
}

export default UserOrderStatusItem