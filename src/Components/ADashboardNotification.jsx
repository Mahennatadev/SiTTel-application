import React from "react";

const ADashboardNotification = () => {
  return (
    <div className="dashboard__notification flex flex-col mx-36 bg-white transition duration-300 shadow-xl rounded-2xl p-4 mt-10 transform hover:-translate-y-0.5 hover:shadow-2xl">
      <p className="text__title font-bold text-2xl pb-6">5 Notifikasi Terbaru</p>
      <div className="notification__content space-y-3 text-lg bg-white shadow-lg rounded-2xl p-6">
        <div className="flex justify-between border-b-2 border-dashed">
          <p className="text-black">Dokumen A ditolak</p>
          <button type="button" className="text-red-600 font-medium">
            Lihat
          </button>
        </div>
        <div className="flex justify-between border-b-2 border-dashed">
          <p className="text-black">Pengguna B telah ditambahkan</p>
          <button type="button" className="text-red-600 font-medium">
            Lihat
          </button>
        </div>
        <div className="flex justify-between border-b-2 border-dashed">
          <p className="text-black">Dokumen C telah selesai</p>
          <button type="button" className="text-red-600 font-medium">
            Lihat
          </button>
        </div>
        <div className="flex justify-between border-b-2 border-dashed">
          <p className="text-black">Pengguna D telah dihapus</p>
          <button type="button" className="text-red-600 font-medium">
            Lihat
          </button>
        </div>
        <div className="flex justify-between border-b-2 border-dashed">
          <p className="text-black">Dokumen E ditolak</p>
          <button type="button" className="text-red-600 font-medium">
            Lihat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ADashboardNotification;
