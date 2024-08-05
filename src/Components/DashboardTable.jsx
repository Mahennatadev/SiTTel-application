import React from "react";

const DashboardTable = () => {
  const tableData = [
    {
      id: "232372",
      date: "20 Juli 2024",
      document: "Dokumen-A",
      type: "Keperluan-1",
      recipient: "Eko",
      status: "Diproses",
    },
    {
      id: "945847",
      date: "17 Juli 2024",
      document: "Dokumen-B",
      type: "Keperluan-2",
      recipient: "Erwin",
      status: "Diproses",
    },
    {
      id: "027374",
      date: "16 Juli 2024",
      document: "Dokumen-C",
      type: "Keperluan-3",
      recipient: "Deddy",
      status: "Diproses",
    },
    {
      id: "974543",
      date: "15 Juli 2024",
      document: "Dokumen-D",
      type: "Keperluan-4",
      recipient: "Budi",
      status: "Diproses",
    },
    {
      id: "023824",
      date: "10 Juli 2024",
      document: "Dokumen-E",
      type: "Keperluan-5",
      recipient: "Bachtiar",
      status: "Diajukan",
    },
  ];

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

  return (
    <div className="dashboard__table mt-14 mx-36">
      <div className="table__title">
        <p className="text-black font-bold">Status 5 dokumen terbaru:</p>
      </div>

      <table className="table-fixed border-gray-200 border-b-2 mt-6 shadow-md">
        <thead className="font-bold text-black">
          <tr>
            <th className="w-[160px] text-left py-3 px-2">Id</th>
            <th className="w-[240px] text-left py-3 px-2">Pengajuan</th>
            <th className="w-[600px] text-left py-3 px-2">Judul Dokumen</th>
            <th className="w-[360px] text-left py-3 px-2">Jenis Keperluan</th>
            <th className="w-[200px] text-left py-3 px-2">Penerima</th>
            <th className="w-[180px] text-left py-3 px-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="flex items-center gap-2 py-3 px-2 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
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
              <td className="py-2 px-2 border-gray-100 border">{row.document}</td>
              <td className="py-2 px-2 border-gray-100 border">{row.type}</td>
              <td className="py-2 px-2 border-gray-100 border">{row.recipient}</td>
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
  );
};

export default DashboardTable;
