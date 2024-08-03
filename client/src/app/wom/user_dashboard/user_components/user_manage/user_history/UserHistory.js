import React, { useEffect, useState } from 'react'
import './userHistory.css'
import UserHistoryItem from './user_history_item/UserHistoryItem';
import CardFilter from '../../user_dash/cardfilter/CardFilter';
import { Link } from 'react-router-dom';
import axios from 'axios';
function UserHistory() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
      setFilter(filter)
    };
  
   
  useEffect(() => {
    fetchData();
  },[])
  const fetchData = async() => {
    await axios.get('https://workorder-server-o3fp.onrender.com/api/v1/user/history')
    .then(res=> setItems(res.data.history))
    .catch((err) => {console.log(err)})
  }

  return (
    <div id="main" className="main">
    <div className="pagetitle">
      <h1>History</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to=" " className="a">
              <i class="bi bi-card-checklist"></i>
            </Link>
          </li>
          <li className="breadcrumb-item active">History</li>
        </ol>
      </nav>
    </div>

    <section className="dashboard section">
      <div className="row" >
        <div className="col-lg-12">
  <div className="card top-selling overflow-auto">
  <CardFilter filterChange={handleFilterChange} /> 

  <div className="card-body pb-0">
    <h5 className="card-title">
      History <span>| {filter} </span>
    </h5>

    <table className='table table-borderless'>
      <thead className="table-light">
        <tr>
          <th scope='col'>Product Name</th>
          <th scope='col'>Company</th>
          <th scope='col'>Engine Code</th>
          <th scope='col'>Create Date</th>
          <th scope='col'>Delivery Date</th>
        </tr>
      </thead>
      <tbody>
        {items && items.length > 0 && items.map(item => <UserHistoryItem key={item._id} item={item} /> )}
      </tbody>
    </table>
  </div>
</div>
</div>
</div>
</section>
</div>
  )
}

export default UserHistory