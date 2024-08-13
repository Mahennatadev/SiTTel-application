import React from "react";
import { useNavigate } from "react-router-dom";

const ADashboardButton = () => {
  const goToUpload = useNavigate();
  return (
    <div>
      <button
        className="upload__button self-end px-16 py-3 mt-14 font-bold transition duration-500 text-base shadow-red-600 drop-shadow-md rounded-2xl border-2 border-red-600 bg-red-600 text-white hover:bg-white hover:text-red-600"
        type="button"
        onClick={() => goToUpload("/")}
      >
        Kirim Notifikasi Baru
      </button>
    </div>
  );
};

export default ADashboardButton;