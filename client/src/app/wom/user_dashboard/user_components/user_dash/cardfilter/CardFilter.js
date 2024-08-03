import React from 'react'
import { Link } from 'react-router-dom'
import './cardfilter.css';

function CardFilter({ filterChange }) {
  return (
    <div className="filter">
      <Link to=" " className="icon a" data-bs-toggle="dropdown">
        <i className="bi bi-three-dots"></i>
      </Link>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>Filter</h6>
        </li>
        <li>
          <Link
            to=" "
            className="dropdown-item a"
            onClick={() => filterChange("Today")}
          >
            Today
          </Link>
        </li>
        <li>
          <Link
            to=" "
            className="dropdown-item a"
            onClick={() => filterChange("This Month")}
          >
            This Month
          </Link>
        </li>
        <li>
          <Link
            to=" "
            className="dropdown-item a"
            onClick={() => filterChange("This Year")}
          >
            This Year
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default CardFilter