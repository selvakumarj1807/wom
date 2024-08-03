import React, { useEffect, useState } from 'react'
import CardFilter from '../../cardfilter/CardFilter'
import './recentSales.css'
import RecentSalesTable from './recentSaleTable/RecentSalesTable';
import axios from 'axios';
function RecentSales() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
   
    const handleFilterChange = filter => {
        setFilter(filter)
    }

    
  useEffect(() => {
    fetchData();
  },[])
  const fetchData = async() => {
    await axios.get('https://workorder-server-o3fp.onrender.com/api/v1/box/recentsales')
      .then(res=> setItems(res.data.recentsales))
      .catch((err) => {console.log(err)})
  }


    // const fetchData = () => {
    //     fetch('http://localhost:4000/recentsales').then(res => res.json()).then(data => {
    //         setItems(data);
    //     }).catch(e => console.log(e.message))
    // };

    // useEffect(() => {
    //     fetchData()
    // },[])

  return (
    <div className="card recent-sales overflow-auto">
    <CardFilter filterChange={handleFilterChange} /> 

    <div className="card-body">
        <h5 className="card-title">
            Recent Sales <span> | {filter} </span>
        </h5>
        <RecentSalesTable items={items} />
    </div>
</div>
  )
}

export default RecentSales