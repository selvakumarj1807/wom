import React from 'react'
import Cards from './cards/Cards'
import Reports from './reports/Reports'
import RecentSales from './reports/recentsales/RecentSales'
import TopSelling from './topSelling/TopSelling'
import RecentActivity from './recentActivity/RecentActivity'
import WebTraffic from './webTraffic/WebTraffic'
import './dashboard.css'
function Dashboard() {
  return (
    <section className="dashboard section">
    <div className="row">
        <div className="col-lg-8">
            <div className="row">
                <Cards />
                
                <div className="col-12">
                    <RecentSales />
                </div>
                <div className="col-12">
                    <TopSelling />
                </div>
            
            </div>
        </div>

        <div className="col-lg-4">
            <RecentActivity />
        </div>
    </div>
</section>
  )
}

export default Dashboard