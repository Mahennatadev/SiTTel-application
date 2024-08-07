import React from 'react'
import MNavbar from '../Components/MNavbar'
import MDashboardMainBox from '../Components/MDashboardMainBox'
import MDashboardAbout from '../Components/MDashboardAbout'
import MDashboardTable from '../Components/MDashboardTable'

const ManajerDashboard = () => {
  return (
    <div>
      <MNavbar />
      <MDashboardAbout />
      <MDashboardMainBox />
      <MDashboardTable />
    </div>
  )
}

export default ManajerDashboard