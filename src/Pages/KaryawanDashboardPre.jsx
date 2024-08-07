import React from 'react'
import DashboardAbout from '../Components/DashboardAbout'
import DashboardPrev from '../Components/DashboardPrev'
import DashboardPrevMainBox from '../Components/DashboardPrevMainBox'
import KNavbar from '../Components/KNavbar'

const KaryawanDashboardPre = () => {
  return (
    <div>
        <KNavbar />
        <DashboardAbout />
        <DashboardPrevMainBox />
        <DashboardPrev />
    </div>
  )
}

export default KaryawanDashboardPre