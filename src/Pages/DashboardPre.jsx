import React from 'react'
import DashboardAbout from '../Components/DashboardAbout'
import Navbar from '../Components/Navbar'
import DashboardPrev from '../Components/DashboardPrev'
import DashboardPrevMainBox from '../Components/DashboardPrevMainBox'

const DashboardPre = () => {
  return (
    <div>
        <Navbar />
        <DashboardAbout />
        <DashboardPrevMainBox />
        <DashboardPrev />
    </div>
  )
}

export default DashboardPre