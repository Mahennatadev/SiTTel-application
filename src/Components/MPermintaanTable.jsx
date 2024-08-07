import React from "react";

const MPermintaanTable = () => {
  const tableData = [
    {
      id: "232372",
      date: "10 Juli 2024",
      sender: "Rina",
      document: "Dokumen-A",
      type: "Keperluan-1",
      status: "Menunggu",
      check: "Dokumen-A",
    },
    {
      id: "945847",
      date: "15 Juli 2024",
      sender: "Beni",
      document: "Dokumen-B",
      type: "Keperluan-2",
      status: "Menunggu",
      check: "Dokumen-B",
    },
    {
      id: "027374",
      date: "16 Juli 2024",
      sender: "Lina",
      document: "Dokumen-C",
      type: "Keperluan-3",
      status: "Menunggu",
      check: "Dokumen-C",
    },
    {
      id: "974543",
      date: "17 Juli 2024",
      sender: "Azhar",
      document: "Dokumen-D",
      type: "Keperluan-4",
      status: "Menunggu",
      check: "Dokumen-D",
    },
    {
      id: "023824",
      date: "20 Juli 2024",
      sender: "Beddy",
      document: "Dokumen-E",
      type: "Keperluan-5",
      status: "Menunggu",
      check: "Dokumen-E",
    },
    {
      id: "232372",
      date: "10 Juli 2024",
      sender: "Rina",
      document: "Dokumen-A",
      type: "Keperluan-1",
      status: "Menunggu",
      check: "Dokumen-F",
    },
    {
      id: "945847",
      date: "15 Juli 2024",
      sender: "Beni",
      document: "Dokumen-B",
      type: "Keperluan-2",
      status: "Menunggu",
      check: "Dokumen-G",
    },
    {
      id: "027374",
      date: "16 Juli 2024",
      sender: "Lina",
      document: "Dokumen-C",
      type: "Keperluan-3",
      status: "Menunggu",
      check: "Dokumen-H",
    },
    {
      id: "974543",
      date: "17 Juli 2024",
      sender: "Azhar",
      document: "Dokumen-D",
      type: "Keperluan-4",
      status: "Menunggu",
      check: "Dokumen-I",
    },
    {
      id: "023824",
      date: "20 Juli 2024",
      sender: "Beddy",
      document: "Dokumen-E",
      type: "Keperluan-5",
      status: "Menunggu",
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

  return (
    <div className="mx-36 mt-4">
      <div className="table__cards p-6 bg-white shadow-lg rounded-lg">
        <div className="permintaan__table">
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
                  Lihat
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
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
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
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
    </div>
  );
};

export default MPermintaanTable;
