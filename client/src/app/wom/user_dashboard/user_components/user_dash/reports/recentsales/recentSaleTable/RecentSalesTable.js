import React from 'react'
import { Link } from 'react-router-dom'

function RecentSalesTable({items}) {
  const handleStatus = (status) => {
    switch (status) {
      case "Approved":
        return "success";
      case "Pending":
        return "warning";
      case "Rejected":
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
          <th scope="col">Product</th>
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
              <td>
                <Link className="text-primary a" to=" ">
                  {item.product}{" "}
                </Link>
              </td>
              <td>${item.modelNumber}</td>
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

export default RecentSalesTable