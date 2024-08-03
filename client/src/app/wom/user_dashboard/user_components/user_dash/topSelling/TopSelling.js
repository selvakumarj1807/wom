import React, { useEffect, useState } from 'react'
import CardFilter from '../cardfilter/CardFilter'
import './topSelling.css'
import TopSellingItem from './topsellingitem/TopSellingItem';
import axios from 'axios';
function TopSelling() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter)
  };


  useEffect(() => {
    fetchData();
  },[])
  const fetchData = async() => {
    await axios.get('https://workorder-server-o3fp.onrender.com/api/v1/box/topselling')
    .then(res=> setItems(res.data.topselling))
    .catch((err) => {console.log(err)})
  }


  // const fetchData = () => {
  //   fetch('https://workorder-server-o3fp.onrender.com/api/v1/box/topselling').then(res => res.json()).then(data => {
  //     setItems(data.items);
  //   }).catch(e => console.log(e.message))
  // };

  // useEffect(() => {
  //   fetchData();
  // },[])
  return (
    <div className="card top-selling overflow-auto">
    <CardFilter filterChange={handleFilterChange} /> 

    <div className="card-body pb-0">
      <h5 className="card-title">
        Top Selling <span>| {filter} </span>
      </h5>

      <table className='table table-borderless'>
        <thead className="table-light">
          <tr>
            <th scope='col'>Product Name</th>
            <th scope='col'>Company</th>
            <th scope='col'>Engine Code</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 && items.map(item => <TopSellingItem key={item._id} item={item} /> )}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default TopSelling