import React from 'react'
import { useNavigate } from 'react-router-dom'
import { tableData } from '../Components/DummyData'
import MNavbar from '../Components/MNavbar'
import MDashboardMainBox from '../Components/MDashboardMainBox'
import MDashboardAbout from '../Components/MDashboardAbout'
import MDashboardTable from '../Components/MDashboardTable'

const ManajerDashboard = () => {
  const navigate = useNavigate();

  const handleCheckClick = (id) => {
    const selectedDocument = tableData.find((doc) => doc.id === id);
    if (selectedDocument) {
      navigate("/review-document", { state: { documentData: selectedDocument } });
    }
  };

  return (
    <div>
      <MNavbar />
      <MDashboardAbout />
      <MDashboardMainBox />
      <MDashboardTable onCheckClick={handleCheckClick} />
    </div>
  )
}

export default ManajerDashboard