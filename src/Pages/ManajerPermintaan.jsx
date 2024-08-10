import React from 'react'
import { useNavigate } from 'react-router-dom'
import MNavbar from '../Components/MNavbar'
import MPermintaanComp from '../Components/MPermintaanComp'
import MPermintaanTable from '../Components/MPermintaanTable'

const ManajerPermintaan = () => {
  const navigate = useNavigate();
  const tableData = [
    {
      id: "232372",
      date: "10 Juli 2024",
      sender: "Rina",
      name: "Dokumen-A",
      title: "Dokumen-A",
      type: "Keperluan-1",
      status: "Menunggu",
      check: "Dokumen-A",
      fileUrl: "../Assets/exampleDoc.png",
    },
    {
      id: "945847",
      date: "15 Juli 2024",
      sender: "Beni",
      name: "Dokumen-B",
      title: "Dokumen-A",
      type: "Keperluan-2",
      status: "Menunggu",
      check: "Dokumen-B",
      fileUrl: "../Assets/exampleDoc.png",
    },
    {
      id: "027374",
      date: "16 Juli 2024",
      sender: "Lina",
      name: "Dokumen-C",
      title: "Dokumen-A",
      type: "Keperluan-3",
      status: "Menunggu",
      check: "Dokumen-C",
      fileUrl: "../Assets/exampleDoc.png",
    },
    {
      id: "974543",
      date: "17 Juli 2024",
      sender: "Azhar",
      name: "Dokumen-D",
      title: "Dokumen-A",
      type: "Keperluan-4",
      status: "Menunggu",
      check: "Dokumen-D",
      fileUrl: "../Assets/exampleDoc.png",
    },
    {
      id: "023824",
      date: "20 Juli 2024",
      sender: "Beddy",
      name: "Dokumen-E",
      title: "Dokumen-A",
      type: "Keperluan-5",
      status: "Menunggu",
      check: "Dokumen-E",
      fileUrl: "../Assets/exampleDoc.png",
    },
    {
      id: "232372",
      date: "10 Juli 2024",
      sender: "Rina",
      name: "Dokumen-A",
      title: "Dokumen-A",
      type: "Keperluan-1",
      status: "Menunggu",
      check: "Dokumen-F",
      fileUrl: "../Assets/exampleDoc.png",
    },
    {
      id: "945847",
      date: "15 Juli 2024",
      sender: "Beni",
      name: "Dokumen-B",
      title: "Dokumen-A",
      type: "Keperluan-2",
      status: "Menunggu",
      check: "Dokumen-G",
      fileUrl: "../Assets/exampleDoc.png",
    },
    {
      id: "027374",
      date: "16 Juli 2024",
      sender: "Lina",
      name: "Dokumen-C",
      title: "Dokumen-A",
      type: "Keperluan-3",
      status: "Menunggu",
      check: "Dokumen-H",
      fileUrl: "../Assets/exampleDoc.png",
    },
    {
      id: "974543",
      date: "17 Juli 2024",
      sender: "Azhar",
      name: "Dokumen-D",
      title: "Dokumen-A",
      type: "Keperluan-4",
      status: "Menunggu",
      check: "Dokumen-I",
      fileUrl: "../Assets/exampleDoc.png",
    },
    {
      id: "023824",
      date: "20 Juli 2024",
      sender: "Beddy",
      name: "Dokumen-E",
      title: "Dokumen-A",
      type: "Keperluan-5",
      status: "Menunggu",
      check: "Dokumen-J",
      fileUrl: "../Assets/exampleDoc.png",
    },
  ];

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