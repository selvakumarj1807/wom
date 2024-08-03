import React from 'react'
import PageTitle from '../pagetitle/PageTitle'
import Dashboard from '../user_dash/Dashboard'
import './main.css'

function UserMain() {
  return (
    <main id='main' className='main'>
    <PageTitle page="User_Dashboard" />
    <Dashboard />
  </main>
  )
}

export default UserMain