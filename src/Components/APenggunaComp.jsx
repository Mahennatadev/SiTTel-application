import React from "react";
import { useState } from "react";
import ATambahPenggunaModal from "./ATambahPenggunaModal";

const APenggunaComp = () => {
  const [showNotification, setShowNotification] = useState(false);
  
  const handleButtonClick = () => {
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="pengguna__header flex justify-between mx-36 mt-14">
      <div className="text__status space-y-1">
        <p className="pengguna__title text-black font-black text-2xl">
          Pengelolaan Pengguna
        </p>

        <p className="pengguna__description text-black text-sm font-normal">
          Anda dapat{" "}
          <span className="font-bold text-red-600">menambah, mengedit, </span>
          dan <span className="font-bold text-red-600">menghapus </span>pengguna
        </p>
      </div>

      <div className="status__button">
        <button
          type="button"
          onClick={handleButtonClick}
          className="flex gap-2 self-end px-10 py-3 mt-16 font-bold transition duration-500 text-base shadow-red-600 drop-shadow-md rounded-2xl border-2 border-red-600 bg-red-600 text-white hover:bg-white hover:text-red-600"
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
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
          Tambah Pengguna Baru
        </button>
      </div>

      {showNotification && (
        <div className="z-10 inset-0 flex fixed items-center justify-center bg-black bg-opacity-50">
          <ATambahPenggunaModal onClose={handleCloseNotification} />
        </div>
      )}
    </div>
  );
};

export default APenggunaComp;
