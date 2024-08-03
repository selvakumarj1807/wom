import React, { useEffect, useState } from 'react'
import CardFilter from '../cardfilter/CardFilter'
import NewsPostItem from './newsPostItem/NewsPostItem';
import './news.css'
function News() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch('https://workorder-server-o3fp.onrender.com/api/v1/box/news').then(res => res.json()).then(data => {
      setNews(data.news);
    }).catch(e => console.log(e.message))
  };

  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className="card">
    <CardFilter filterChange={handleFilterChange} />
    <div className="card-body pb-0">
      <h5 className="card-title">
        News &amp; Updates <span>| {filter}</span>
      </h5>
      <div className="news">
        {news && news.length > 0 && news.map(item => <NewsPostItem key={item._id} item={item} /> )}
      </div>
    </div>
  </div>
  )
}

export default News