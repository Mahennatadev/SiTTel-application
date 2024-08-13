import React from "react";
import { useNavigate } from "react-router-dom";

const AReviewDocComp = () => {
  const goToRiwayat = useNavigate();

  return (
    <div className="tinjau__component mt-8 mx-36">
      <div className="review__header flex gap-8">
        <div className="back__button flex items-center justify-center">
          <button
            type="button"
            className="transition duration-500 inline-block rounded-full shadow-red-600 drop-shadow-md border-2 border-red-600 p-4 text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
            onClick={() => goToRiwayat("/adminRiwayat")}
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
          <p className="tinjau__title font-black text-black text-2xl">
            Rincian Dokumen
          </p>
          <p className="tinjau__description">
            Anda dapat melihat detail dokumen yang diajukan oleh{" "}
            <span className="font-bold italic text-red-600">
              {" "}
              user kepada manajer
            </span>{" "}
            <br />
            yang dituju
          </p>
        </div>
      </div>

      <div className="detail__dokumen mt-16 bg-white border-transparent transition duration-300 rounded-lg shadow-xl hover:shadow-2xl p-4 hover:-translate-y-0.5">
        <p className="text__title text-black font-bold text-2xl pb-6">
          Detail Dokumen
        </p>
        <div className="text__data space-y-2 bg-gray-100 border border-transparent p-4 rounded-lg shadow-xl">
          <p className="text-black font-medium text-base">
            Id Dokumen: <span className="font-normal">235713</span>
          </p>
          <p className="text-black font-medium text-base">
            Pengirim: <span className="font-normal">Wahyu Nata Mahendra</span>
          </p>
          <p className="text-black font-medium text-base">
            Pengajuan: <span className="font-normal">1 Agustus 2024</span>
          </p>
          <p className="text-black font-medium text-base">
            Judul Dokumen:{" "}
            <span className="font-normal">
              Dokumen Rencana Pengembangan Aplikasi
            </span>
          </p>
          <p className="text-black font-medium text-base">
            Penerima: <span className="font-normal">Erwin</span>
          </p>
        </div>
      </div>

      <div className="notes__dokumen mt-14 bg-white border-transparent transition duration-300 rounded-lg shadow-xl hover:shadow-2xl p-4 hover:-translate-y-0.5">
        <p className="text__title text-black font-bold text-2xl pb-6">
          Catatan Oleh Manajer
        </p>
        <div className="text__data space-y-2 bg-gray-100 border border-transparent p-4 rounded-lg shadow-xl h-[180px]">
          <p>Isi catatan oleh manajer...</p>
        </div>
      </div>
    </div>
  );
};

export default AReviewDocComp;
