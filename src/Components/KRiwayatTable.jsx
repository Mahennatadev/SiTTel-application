import React from "react";
import { useState } from "react";
import KRiwayatPagination from "./KRiwayatPagination";
import KRiwayatNotificationDone from "./KRiwayatNotificationDone";
import KRiwayatNotificationFailed from "./KRiwayatNotificationFailed";
import { tableKaryawanData } from "./DummyData";

const KRiwayatTable = ({ row }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [status, setStatus] = useState(null); // "sukses" or "gagal"
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Jumlah baris per halaman

  const getStatusLabel = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-500 text-white";
      case "Diproses":
        return "bg-orange-500 text-white";
      case "Ditolak":
        return "bg-red-500 text-white";
      case "Diajukan":
        return "bg-blue-500 text-white";
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

  // Filter data hanya untuk status "Diajukan" dan "Diproses"
  const filteredData = tableKaryawanData.filter(
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
      row.document.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.recipient.toLowerCase().includes(searchQuery.toLowerCase())
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
              placeholder="Cari berdasarkan judul, jenis keperluan, penerima"
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
                  Pengajuan
                </th>
                <th className="w-[240px] text-left py-3 px-2 border border-gray-100">
                  Selesai
                </th>
                <th className="w-[400px] text-left py-3 px-2 border border-gray-100">
                  Judul Dokumen
                </th>
                <th className="w-[360px] text-left py-3 px-2 border border-gray-100">
                  Jenis Keperluan
                </th>
                <th className="w-[200px] text-left py-3 px-2 border border-gray-100">
                  Penerima
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
                    {row.done}
                  </td>
                  <td className="py-2 px-2 border-gray-100 border">
                    {row.document}
                  </td>
                  <td className="py-2 px-2 border-gray-100 border">
                    {row.type}
                  </td>
                  <td className="py-2 px-2 border-gray-100 border">
                    {row.recipient}
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
                          d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
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
        <KRiwayatPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {showNotification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {status === "Selesai" ? (
            <KRiwayatNotificationDone onClose={handleCloseNotification} />
          ) : (
            <KRiwayatNotificationFailed onClose={handleCloseNotification} />
          )}
        </div>
      )}
    </div>
  );
};

export default KRiwayatTable;
