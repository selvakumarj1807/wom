import React, { useEffect, useState } from 'react'
import CardFilter from '../cardfilter/CardFilter'
import RecentActivityItem from './recentActivityItem/RecentActivityItem';
import './recentActivity.css'
import axios from 'axios';
function RecentActivity() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChanage = filter => {
        setFilter(filter);
    };
    
  useEffect(() => {
    fetchData();
  },[])
  const fetchData = async() => {
    await axios.get('https://workorder-server-o3fp.onrender.com/api/v1/box/recentactiviy')
      .then(res=> setItems(res.data.recentactiviy))
      .catch((err) => {console.log(err)})
  }


    // const fetchData = () => {
    //     fetch('http://localhost:4000/recentactiviy').then(res => res.json()).then(data => {
    //         setItems(data)
    //     }).catch(e => console.log(e.message))
    // };
    // useEffect(() => {
    //     fetchData();
    // },[])
  return (
    <div className="card">
    <CardFilter filterChange={handleFilterChanage} />
    <div className="card-body">
        <h5 className="card-title">
            Recent Activity <span>| {filter} </span>
        </h5>
        <div className="activity">
            {items && items.length > 0 && items.map(item => (
                <RecentActivityItem key={item._id} item={item} />
            )) }
        </div>
    </div>
</div>
  )
}

export default RecentActivity