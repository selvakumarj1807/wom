import React, { useEffect, useState } from 'react'
import './userOrderStatus.css'
import CardFilter from '../../user_dash/cardfilter/CardFilter';
import UserOrderStatusItem from './userOrderStatusItem/UserOrderStatusItem';
import { Link } from 'react-router-dom';
import axios from 'axios';
function UserOrderStatus() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
      setFilter(filter)
    };
  
       
  useEffect(() => {
    fetchData();
  },[])
  const fetchData = async() => {
    await axios.get('https://workorder-server-o3fp.onrender.com/api/v1/user/tracking')
      .then(res=> setItems(res.data.tracking))
      .catch((err) => {console.log(err)})
  }


  return (
    <div id="main" className="main">
      <div className="pagetitle">
        <h1>Track the Order</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i class="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Order Status</li>
          </ol>
        </nav>
      </div>

      <section className="dashboard section">
        <div className="row" >
          <div className="col-lg-12">
    <div className="card top-selling overflow-auto">
    <CardFilter filterChange={handleFilterChange} /> 

    <div className="card-body">
        <h5 className="card-title">
            Recent Sales <span> | {filter} </span>
        </h5>
        <UserOrderStatusItem items={items} />
    </div>
  </div>
  </div>
  </div>
  </section>
  </div>
  )
}

export default UserOrderStatus