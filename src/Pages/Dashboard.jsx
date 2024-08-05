import React from 'react'
import Navbar from '../Components/Navbar'
import DashboardAbout from '../Components/DashboardAbout'
import DashboardMainBox from '../Components/DashboardMainBox'
import DashboardTable from '../Components/DashboardTable'


const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <DashboardAbout />
        <DashboardMainBox />
        <DashboardTable />
    </div>
  )
}

export default Dashboard