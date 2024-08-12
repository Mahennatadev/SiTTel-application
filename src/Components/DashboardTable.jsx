import React from "react";
import { tableKaryawanData } from './DummyData';

const DashboardTable = () => {
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

  const filterData = (data) => {
    return data.filter(row => row.status === "Diajukan" || row.status === "Diproses").slice(0,5)
  }

  // Filter data menggunakan fungsi filterData
  const filteredData = filterData(tableKaryawanData);

  return (
    <div className="table__cards mx-36 mt-1 p-6 bg-white shadow-lg rounded-lg">
      <div className="dashboard__table">
        <div className="table__title">
          <p className="text-black font-bold">Status 5 dokumen terbaru:</p>
        </div>

        <table className="table-fixed border-collapse border border-gray-100 mt-6 shadow-md">
          <thead className="font-bold text-black">
            <tr>
              <th className="w-[160px] text-left py-3 px-2 border border-gray-100">Id</th>
              <th className="w-[240px] text-left py-3 px-2 border border-gray-100">Pengajuan</th>
              <th className="w-[600px] text-left py-3 px-2 border border-gray-100">Judul Dokumen</th>
              <th className="w-[360px] text-left py-3 px-2 border border-gray-100">Jenis Keperluan</th>
              <th className="w-[200px] text-left py-3 px-2 border border-gray-100">Penerima</th>
              <th className="w-[180px] text-left py-3 px-2 border border-gray-100">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
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
                <td className="py-2 px-2 border-gray-100 border">{row.date}</td>
                <td className="py-2 px-2 border-gray-100 border">
                  {row.document}
                </td>
                <td className="py-2 px-2 border-gray-100 border">{row.type}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
