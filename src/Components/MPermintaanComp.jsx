import React from "react";

const MPermintaanComp = () => {

  return (
    <div className="status__header flex justify-between mx-36 mt-14">
      <div className="text__status space-y-1">
        <p className="status__title text-black font-black text-2xl">
          Permintaan Tanda Tangan Dokumen
        </p>

        <p className="status__description text-black text-sm font-normal italic">
          Dokumen yang telah anda tandatangani dapat diunduh pada menu{" "}
          <span className="font-bold text-red-600 not-italic">Riwayat</span>
        </p>
      </div>
    </div>
  );
};

export default MPermintaanComp;
