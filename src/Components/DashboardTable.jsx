import React from "react";

const DashboardTable = () => {
  return (
    <div className="dashboard__table mt-14 mx-36">
      <div className="table__title">
        <p className="text-black font-bold">Status 5 dokumen terbaru:</p>
      </div>

      <table className="table-fixed border-gray-200 border-b-2 mt-6 shadow-lg">
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
          <tr>
            <td className="flex items-center gap-2 py-3 px-2">
              {" "}
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
              232372
            </td>
            <td className="py-3 px-2">20 Juli 2024</td>
            <td className="py-3 px-2">Dokumen-A</td>
            <td className="py-3 px-2">Keperluan-1</td>
            <td className="py-3 px-2">Eko</td>
            <td className="py-3 px-2"></td>
          </tr>
          <tr>
            <td className="flex items-center gap-2 py-3 px-2">
              {" "}
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
              232372
            </td>
            <td className="py-3 px-2">20 Juli 2024</td>
            <td className="py-3 px-2">Dokumen-A</td>
            <td className="py-3 px-2">Keperluan-1</td>
            <td className="py-3 px-2">Eko</td>
            <td className="py-3 px-2"></td>
          </tr>
          <tr>
            <td className="flex items-center gap-2 py-3 px-2">
              {" "}
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
              232372
            </td>
            <td className="py-3 px-2">20 Juli 2024</td>
            <td className="py-3 px-2">Dokumen-A</td>
            <td className="py-3 px-2">Keperluan-1</td>
            <td className="py-3 px-2">Eko</td>
            <td className="py-3 px-2"></td>
          </tr>
          <tr>
            <td className="flex items-center gap-2 py-3 px-2">
              {" "}
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
              232372
            </td>
            <td className="py-3 px-2">20 Juli 2024</td>
            <td className="py-3 px-2">Dokumen-A</td>
            <td className="py-3 px-2">Keperluan-1</td>
            <td className="py-3 px-2">Eko</td>
            <td className="py-3 px-2"></td>
          </tr>
          <tr>
            <td className="flex items-center gap-2 py-3 px-2">
              {" "}
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
              232372
            </td>
            <td className="py-3 px-2">20 Juli 2024</td>
            <td className="py-3 px-2">Dokumen-A</td>
            <td className="py-3 px-2">Keperluan-1</td>
            <td className="py-3 px-2">Eko</td>
            <td className="py-3 px-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
