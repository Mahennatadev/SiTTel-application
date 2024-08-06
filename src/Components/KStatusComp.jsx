import React from "react";
import { useNavigate } from "react-router-dom";

const KStatusComp = () => {
  const goToUpload = useNavigate();

  return (
    <div className="status__header flex justify-between mx-36 mt-14">
      <div className="text__status space-y-1">
        <p className="status__title text-black font-black text-2xl">
          Status Tanda Tangan Dokumen
        </p>

        <p className="status__description text-black text-sm font-normal italic">
          Dokumen terdahulu dapat dilihat dan diunduh pada menu{" "}
          <span className="font-bold text-red-600 not-italic">Riwayat</span>
        </p>
      </div>

      <div className="status__button">
        <button
          type="button"
          className="self-end px-10 py-3 mt-16 font-bold transition duration-500 text-base shadow-red-600 drop-shadow-md rounded-2xl border-2 border-red-600 bg-red-600 text-white hover:bg-white hover:text-red-600"
          onClick={() => goToUpload("/karyawanUnggah")}
        >
          Unggah Dokumen Lainnya
        </button>
      </div>
    </div>
  );
};

export default KStatusComp;
