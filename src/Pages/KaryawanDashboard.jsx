import React from 'react'
import DashboardAbout from '../Components/DashboardAbout'
import DashboardMainBox from '../Components/DashboardMainBox'
import DashboardTable from '../Components/DashboardTable'
import KNavbar from '../Components/KNavbar'


const KaryawanDashboard = () => {
  return (
    <div>
        <KNavbar />
        <DashboardAbout />
        <DashboardMainBox />
        <DashboardTable />
    </div>
  )
}

export default KaryawanDashboard