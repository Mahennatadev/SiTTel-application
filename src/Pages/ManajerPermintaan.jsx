import React from 'react'
import { useNavigate } from 'react-router-dom'
import { tableData } from '../Components/DummyData'
import MNavbar from '../Components/MNavbar'
import MPermintaanComp from '../Components/MPermintaanComp'
import MPermintaanTable from '../Components/MPermintaanTable'

const ManajerPermintaan = () => {
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
      <MPermintaanComp />
      <MPermintaanTable onCheckClick={handleCheckClick} />
    </div>
  )
}

export default ManajerPermintaan