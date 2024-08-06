import React from "react";

const KRiwayatComp = () => {
  return (
    <div className="status__header flex flex-col mx-36 mt-14">
      <div className="text__status space-y-1">
        <p className="status__title text-black font-black text-2xl">
          Riwayat Tanda Tangan Dokumen
        </p>

        <p className="status__description text-black text-sm font-normal italic">
        Unduh dan lihat catatan dokumen pada kolom “Detail Dokumen” 
        </p>
      </div>

      <div className="flex">
        <div className="riwayat__illustrations"></div>
        <div className="riwayat__text">
            <p className="text__title text-black font-black text-xl">Dokumen Telah Selesai</p>
            <p className="text__subtitle">Selamat melanjutkan aktivitas anda kembali</p>
        </div>
      </div>
    </div>
  );
};

export default KRiwayatComp;
