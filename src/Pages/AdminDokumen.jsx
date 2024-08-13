import React from 'react'
import ANavbar from '../Components/ANavbar'
import ADokumenComp from '../Components/ADokumenComp'
import ADokumenTable from '../Components/ADokumenTable'

const AdminDokumen = () => {
  return (
    <div>
        <ANavbar />
        <ADokumenComp />
        <ADokumenTable />
    </div>
  )
}

export default AdminDokumen