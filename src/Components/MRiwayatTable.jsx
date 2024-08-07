import { useState } from "react";
import React from "react";
import MRiwayatPagination from "./MRiwayatPagination";

const MRiwayatTable = () => {
  const tableData = [
    {
      id: "232372",
      date: "10 Juli 2024",
      sender: "Rina",
      document: "Dokumen-A",
      type: "Keperluan-1",
      status: "Selesai",
      check: "Dokumen-A",
    },
    {
      id: "945847",
      date: "15 Juli 2024",
      sender: "Beni",
      document: "Dokumen-B",
      type: "Keperluan-2",
      status: "Ditolak",
      check: "Dokumen-B",
    },
    {
      id: "027374",
      date: "16 Juli 2024",
      sender: "Lina",
      document: "Dokumen-C",
      type: "Keperluan-3",
      status: "Selesai",
      check: "Dokumen-C",
    },
    {
      id: "974543",
      date: "17 Juli 2024",
      sender: "Azhar",
      document: "Dokumen-D",
      type: "Keperluan-4",
      status: "Selesai",
      check: "Dokumen-D",
    },
    {
      id: "023824",
      date: "20 Juli 2024",
      sender: "Beddy",
      document: "Dokumen-E",
      type: "Keperluan-5",
      status: "Selesai",
      check: "Dokumen-E",
    },
    {
      id: "232372",
      date: "10 Juli 2024",
      sender: "Rina",
      document: "Dokumen-A",
      type: "Keperluan-1",
      status: "Ditolak",
      check: "Dokumen-F",
    },
    {
      id: "945847",
      date: "15 Juli 2024",
      sender: "Beni",
      document: "Dokumen-B",
      type: "Keperluan-2",
      status: "Selesai",
      check: "Dokumen-G",
    },
    {
      id: "027374",
      date: "16 Juli 2024",
      sender: "Lina",
      document: "Dokumen-C",
      type: "Keperluan-3",
      status: "Selesai",
      check: "Dokumen-H",
    },
    {
      id: "974543",
      date: "17 Juli 2024",
      sender: "Azhar",
      document: "Dokumen-D",
      type: "Keperluan-4",
      status: "Selesai",
      check: "Dokumen-I",
    },
    {
      id: "023824",
      date: "20 Juli 2024",
      sender: "Beddy",
      document: "Dokumen-E",
      type: "Keperluan-5",
      status: "Selesai",
      check: "Dokumen-J",
    },
  ];

  const getStatusLabel = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-500 text-white";
      case "Menunggu":
        return "bg-orange-500 text-white";
      case "Ditolak":
        return "bg-red-500 text-white";
      default:
        return "";
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6; // Jumlah baris per halaman
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Mendapatkan data tabel untuk halaman saat ini
  const currentTableData = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="mx-36 mt-4">
      <div className="table__cards p-6 bg-white shadow-lg rounded-lg">
        <div className="riwayat__table">
          <table className="table-fixed border-collapse border border-gray-100 mt-6 shadow-md">
            <thead className="font-bold text-black">
              <tr>
                <th className="w-[160px] text-left py-3 px-2 border border-gray-100">
                  Id
                </th>
                <th className="w-[240px] text-left py-3 px-2 border border-gray-100">
                  Diajukan
                </th>
                <th className="w-[200px] text-left py-3 px-2 border border-gray-100">
                  Nama Pengirim
                </th>
                <th className="w-[600px] text-left py-3 px-2 border border-gray-100">
                  Judul Dokumen
                </th>
                <th className="w-[360px] text-left py-3 px-2 border border-gray-100">
                  Jenis Keperluan
                </th>
                <th className="w-[180px] text-left py-3 px-2 border border-gray-100">
                  Status
                </th>
                <th className="w-[180px] text-left py-3 px-2 border border-gray-100">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-100 flex items-center gap-2 py-3 px-2 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6h.008v.008H6V6Z"
                      />
                    </svg>
                    {row.id}
                  </td>
                  <td className="py-2 px-2 border-gray-100 border">
                    {row.date}
                  </td>
                  <td className="py-2 px-2 border-gray-100 border">
                    {row.sender}
                  </td>
                  <td className="py-2 px-2 border-gray-100 border">
                    {row.document}
                  </td>
                  <td className="py-2 px-2 border-gray-100 border">
                    {row.type}
                  </td>
                  <td className="py-2 px-2 border-gray-100 border">
                    <span
                      className={`inline-block px-4 py-1 rounded-full ${getStatusLabel(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="border border-gray-100 py-3 px-2 text-blue-700">
                    <button className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>

                      {row.check}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 flex">
        <MRiwayatPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MRiwayatTable;
