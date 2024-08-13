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
          className="flex gap-2 self-end px-10 py-3 mt-16 font-bold transition duration-500 text-base shadow-red-600 drop-shadow-md rounded-2xl border-2 border-red-600 bg-red-600 text-white hover:bg-white hover:text-red-600"
          onClick={() => goToUpload("/karyawanUnggah")}
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
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          Unggah Dokumen Lainnya
        </button>
      </div>
    </div>
  );
};

export default KStatusComp;
