import React from "react";
import exampleDoc from "../Assets/exampleDoc.png";

const MTinjauDokumenCard = () => {
  return (
    <div className="doc__container mx-36 border border-gray-200 mt-8">
      <div className="doc__header flex justify-between items-center px-8 py-5">
        <div className="doc__name">
          <p className="file__name text-black font-medium text-base">
            Laporan-Kerja-Praktik.pdf
          </p>
        </div>

        <div className="doc__button flex gap-2">
          <div>
            <button
              type="button"
              className="transition duration-500 py-2 px-14 inline-block text-lg shadow-red-600 drop-shadow-md rounded-2xl border-2 border-red-600 bg-red-600 p-5 text-white font-bold ease-in-out hover:bg-white hover:text-red-600"
            >
              Tolak
            </button>
          </div>

          <div>
            <button className="landing__button px-14 py-2 text-lg font-bold text-white whitespace-nowrap bg-gray-300 rounded-2xl border-2 border-transparent cursor-not-allowed max-md:px-5 max-md:mt-10">
              Tandatangani
            </button>
          </div>
        </div>
      </div>

      <div className="doc__maincontent flex grid-cols-2">
        <div className="doc__view bg-gray-200 px-36 py-8 h-[690px] overflow-y-auto">
          <img src={exampleDoc} alt="document" />
        </div>

        <div className="doc__detail place-items-center py-12 px-8 space-y-1">
          <p className="doc__date text-black font-medium text-base">
            Tanggal Pengajuan: <span className="font-normal">24 Juli 2024</span>
          </p>
          <p className="doc__sender text-black font-medium text-base">
            Nama Pengirim: <span className="font-normal">Rina Susanti</span>
          </p>
          <p className="doc__title text-black font-medium text-base">
            Judul Dokumen:{" "}
            <span className="font-normal">Dokumen Kerja Praktek</span>
          </p>
          <p className="doc__type text-black font-medium text-base">
            Jenis Keperluan:{" "}
            <span className="font-normal">Surat Rekomendasi</span>
          </p>

          <div className="doc__signature pt-12 flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 16 16"
              id="signature"
            >
              <path
                fill="#212121"
                stroke="#212121"
                strokeWidth="0.5"
                d="M9.02146 1.77141C9.97611.816755 11.5239.816758 12.4786 1.77141 13.4332 2.72606 13.4332 4.27386 12.4786 5.22852L12.2071 5.49999 12.2929 5.58579C13.0739 6.36683 13.0739 7.63316 12.2929 8.41421L10.8536 9.85355C10.6583 10.0488 10.3417 10.0488 10.1464 9.85355 9.95118 9.65829 9.95118 9.34171 10.1464 9.14645L11.5858 7.70711C11.9763 7.31658 11.9763 6.68342 11.5858 6.29289L11.5 6.20709 5.85356 11.8535C5.78948 11.9176 5.70919 11.9631 5.62128 11.985L1.62128 12.985C1.44424 13.0293 1.25714 12.9736 1.13315 12.8397 1.00916 12.7058.96796 12.515 1.02567 12.3419L2.27567 8.59185C2.30022 8.51821 2.34157 8.4513 2.39646 8.39641L9.02146 1.77141zM11.7715 2.47852C11.2073 1.91439 10.2927 1.91439 9.72857 2.47852L3.18703 9.02006 2.26238 11.794 5.24439 11.0485 11.7715 4.52141C12.3356 3.95728 12.3356 3.04265 11.7715 2.47852zM4.96666 14.9999C3.73162 14.9999 2.75917 14.4334 2.11173 13.8932L3.39642 13.572C3.84174 13.8216 4.36919 13.9999 4.96666 13.9999 5.37205 13.9999 5.79005 13.8359 6.23585 13.543 6.6826 13.2494 7.11407 12.856 7.5497 12.4476L7.66313 12.3411C8.04752 11.9798 8.4472 11.6041 8.82928 11.3443 9.23733 11.0668 9.7781 10.8148 10.3462 11.0333 10.7215 11.1777 10.9652 11.4442 11.1371 11.7701 11.2983 12.0754 11.4093 12.4582 11.5173 12.8743 11.5667 13.0645 11.6504 13.2483 11.7463 13.3726 11.793 13.4332 11.8333 13.4675 11.8614 13.4848 11.8861 13.5 11.8971 13.5 11.8999 13.5 12.0218 13.5 12.231 13.4175 12.5299 13.2141 12.7153 13.0879 12.8736 12.9616 13.0321 12.8352 13.1304 12.7568 13.2288 12.6782 13.3338 12.5997 13.6127 12.3909 13.8544 12.2509 14.0314 12.1614 14.1198 12.1166 14.1922 12.0844 14.245 12.0626 14.2714 12.0517 14.2929 12.0434 14.3091 12.0373L14.3294 12.03 14.3365 12.0275 14.3392 12.0266 14.3404 12.0262C14.3405 12.0261 14.3414 12.0258 14.5 12.5L14.3414 12.0258C14.6033 11.9382 14.8866 12.0795 14.9742 12.3414 15.0614 12.6022 14.9217 12.8841 14.662 12.973L14.6581 12.9745C14.6527 12.9765 14.6422 12.9805 14.627 12.9868 14.5966 12.9993 14.5475 13.0209 14.4828 13.0537 14.3534 13.1191 14.1617 13.2291 13.9329 13.4003 13.8743 13.4441 13.7977 13.5049 13.7103 13.5742 13.529 13.7181 13.3012 13.8988 13.0925 14.0408 12.7816 14.2524 12.351 14.5 11.9 14.5 11.4644 14.5 11.1488 14.2353 10.9545 13.9834 10.7562 13.7264 10.6232 13.4102 10.5494 13.1256 10.4397 12.7031 10.3528 12.4264 10.2527 12.2367 10.1634 12.0675 10.0827 12.0034 9.98715 11.9666 9.90523 11.9351 9.74183 11.9331 9.39155 12.1712 9.07852 12.3841 8.73735 12.7043 8.33353 13.0834L8.23363 13.1772C7.8026 13.5813 7.31323 14.0316 6.78497 14.3787 6.25577 14.7264 5.64461 14.9999 4.96666 14.9999z"
              ></path>
            </svg>
            <p>Tanda Tangan Anda</p>
          </div>

          <div className="signature__upload">
            <p className="signature__caption italic pt-6 ">drag and drop file</p>
            {/* upload */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MTinjauDokumenCard;