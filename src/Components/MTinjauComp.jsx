import React from "react";
import { useNavigate } from "react-router-dom";

const MTinjauComp = () => {
  const goToPermintaan = useNavigate();

  return (
    <div className="tinjau__component flex gap-8 mt-8 mx-36">
      <div className="back__button flex items-center justify-center">
        <button
          type="button"
          className="transition duration-500 inline-block rounded-full shadow-red-600 drop-shadow-md border-2 border-red-600 p-4 text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
          onClick={() => goToPermintaan('/manajerPermintaan')}
        >
          <span className="sr-only"> Kembali </span>

          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
      </div>

      <div className="tinjau__text space-y-1">
        <p className="tinjau__title font-black text-black text-2xl">Tandatangani Dokumen</p>
        <p className="tinjau__description">Silahkan tandatangani dokumen ini jika anda setujui, silahkan<span className="font-bold italic text-red-600">upload</span> <br />tanda tangan digital anda terlebih dahulu</p>
      </div>
    </div>
  );
};

export default MTinjauComp;
