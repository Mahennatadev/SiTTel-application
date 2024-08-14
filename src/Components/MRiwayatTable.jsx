import { useState } from "react";
import { tableData } from "./DummyData";
import React from "react";
import MRiwayatPagination from "./MRiwayatPagination";
import MRiwayatNotificationDone from "./MRiwayatNotificationDone";
import MRiwayatNotificationFailed from "./MRiwayatNotificationFailed";

const MRiwayatTable = ({ row }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [status, setStatus] = useState(null); // "sukses" or "gagal"
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6; // Jumlah baris per halaman

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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleButtonClick = (status) => {
    setStatus(status);
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
    setStatus(null);
  };

  const filteredData = tableData.filter(
    (row) => row.status === "Selesai" || row.status === "Ditolak"
  );

  // Filter data lebih lanjut berdasarkan kategori yang dipilih
  const categoryFilteredData = filteredData.filter((row) => {
    if (selectedCategory === "Semua") {
      return true;
    }
    return row.status === selectedCategory;
  });

  // Filter data berdasarkan query pencarian
  const finalFilteredData = categoryFilteredData.filter(
    (row) =>
      row.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(finalFilteredData.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Mendapatkan data tabel untuk halaman saat ini
  const currentTableData = finalFilteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="mx-36 mt-4">
      <div className="table__cards p-6 bg-white shadow-lg rounded-lg">
        <div className="riwayat__table">
          <div className="relative mb-4 flex items gap-4">
            <input
              type="text"
              placeholder="Cari berdasarkan judul, jenis keperluan, pengirim"
              className="p-2 pl-10 border-2 rounded-full w-[460px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="appearance-none py-2 px-5 border-2 rounded-full w-48"
            >
              <option value="Semua">Semua Status</option>
              <option value="Selesai">Selesai</option>
              <option value="Ditolak">Ditolak</option>
            </select>
          </div>
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
                  Detail Dokumen
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
                    <button
                      className="flex items-center gap-2"
                      onClick={() => handleButtonClick(row.status)}
                    >
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
                      Detail
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

      {showNotification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {status === "Selesai" ? (
            <MRiwayatNotificationDone onClose={handleCloseNotification} />
          ) : (
            <MRiwayatNotificationFailed onClose={handleCloseNotification} />
          )}
        </div>
      )}
    </div>
  );
};

export default MRiwayatTable;
