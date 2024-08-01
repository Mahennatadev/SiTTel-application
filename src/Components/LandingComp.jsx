import { useNavigate } from "react-router-dom";
import React from "react";

const LandingComp = () => {
  const goToLogin = useNavigate();

  return (
    <section className="landing section" id="landing">
      <main className="landing__container flex flex-col items-center mt-28 mx-36 max-md:mt-10 max-md:max-w-full">
        <h1 className="landing__title text-6xl font-black text-center text-black uppercase max-md:max-w-full max-md:text-4xl">
          Digitalisasi Tanda Tangan
        </h1>

        <h2 className="landing__subtitle mt-4 text-5xl font-medium text-center text-red-600 max-md:max-w-full max-md:text-4xl">
          Efisien dan Terpantau
        </h2>

        <p className="landing__description mt-4 text-lg font-semibold px-64 text-center text-black max-md:max-w-full">
          "Aplikasi Manajemen Tanda Tangan Dokumen Mempermudah Pengajuan dan
          Persetujuan Dokumen Secara Digital, Mengatasi Kendala Jarak dan Waktu,
          serta Memastikan Proses yang Cepat dan Aman."
        </p>

        <button
          onClick={() => goToLogin("/login")}
          className="landing__button transition duration-500 px-16 py-5 mt-16 max-w-full text-2xl font-bold text-red-600 whitespace-nowrap bg-white rounded-3xl border-2 border-red-600 w-[324px] hover:bg-red-600 hover:text-white transform hover:-translate-y-1 hover:scale-110 active:bg-red-500 max-md:px-5 max-md:mt-10"
        >
          Mulai
        </button>

        <div className="landing__illustrations mt-16 max-md:mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="654.85"
            height="289.64"
            viewBox="0 0 949.85 463.64"
          >
            <path
              d="m0,418.39c0,.94,1.07,1.69,2.41,1.69h945.03c1.33,0,2.41-.75,2.41-1.69s-1.07-1.69-2.41-1.69H2.41c-1.33,0-2.41.75-2.41,1.69Z"
              fill="#2f2e43"
              strokeWidth="0"
            />
            <path
              d="m789.19,420.78H162.66V17.31c0-9.54,7.76-17.31,17.31-17.31h591.91c9.54,0,17.31,7.76,17.31,17.31v403.47Z"
              fill="#2f2e41"
              strokeWidth="0"
            />
            <path
              d="m841.34,463.64H108.95c-2.53,0-4.6-1.57-5.29-4.01-.68-2.43.27-4.86,2.43-6.17l57.09-34.83h626.22l.18.11,54.72,34.77c2.11,1.34,3.03,3.76,2.33,6.17-.7,2.4-2.77,3.96-5.27,3.96Z"
              fill="#dfdfdf"
              strokeWidth="0"
            />
            <rect
              x="179.09"
              y="25.72"
              width="592.95"
              height="368.63"
              fill="#fff"
              strokeWidth="0"
            />
            <polygon
              points="794.9 441.5 159.09 441.5 190.52 416 764.9 416 794.9 441.5"
              fill="#2f2e41"
              strokeWidth="0"
            />
            <polygon
              points="626.31 458.64 324.83 458.64 336.26 441.5 614.88 441.5 626.31 458.64"
              fill="#2f2e41"
              strokeWidth="0"
            />
            <path
              d="m653.28,171.49h-31.41c-2.73,0-4.95-2.22-4.95-4.95s2.22-4.95,4.95-4.95h31.41c2.73,0,4.95,2.22,4.95,4.95s-2.22,4.95-4.95,4.95Z"
              fill="#dfdfdf"
              strokeWidth="0"
            />
            <path
              d="m689.4,171.49h-14.66c-2.73,0-4.95-2.22-4.95-4.95s2.22-4.95,4.95-4.95h14.66c2.73,0,4.95,2.22,4.95,4.95s-2.22,4.95-4.95,4.95Z"
              fill="#dfdfdf"
              strokeWidth="0"
            />
            <path
              d="m338.8,175.27h-95.6c-4.88,0-8.85-3.97-8.85-8.85s3.97-8.85,8.85-8.85h95.6c4.88,0,8.85,3.97,8.85,8.85s-3.97,8.85-8.85,8.85Z"
              fill="#e42313"
              strokeWidth="0"
            />
            <path
              d="m286.97,198.88h-46.07c-2.97,0-5.4-2.42-5.4-5.4s2.42-5.4,5.4-5.4h46.07c2.97,0,5.4,2.42,5.4,5.4s-2.42,5.4-5.4,5.4Z"
              fill="#dfdfdf"
              strokeWidth="0"
            />
            <path
              d="m540.95,220.19H239.74c-2.97,0-5.4-2.42-5.4-5.4s2.42-5.4,5.4-5.4h301.21c2.97,0,5.4,2.42,5.4,5.4s-2.42,5.4-5.4,5.4Z"
              fill="#dfdfdf"
              strokeWidth="0"
            />
            <path
              d="m515.04,234.59H239.74c-2.97,0-5.4-2.42-5.4-5.4s2.42-5.4,5.4-5.4h275.29c2.97,0,5.4,2.42,5.4,5.4s-2.42,5.4-5.4,5.4Z"
              fill="#dfdfdf"
              strokeWidth="0"
            />
            <polygon
              points="838.74 152.18 824.02 157.02 824.02 135.82 837.38 135.82 838.74 152.18"
              fill="#f2a7aa"
              strokeWidth="0"
            />
            <circle
              cx="825.84"
              cy="127.02"
              r="14.67"
              fill="#f2a7aa"
              strokeWidth="0"
            />
            <path
              d="m829.87,125.57c-2.46-.07-4.07-2.56-5.02-4.82-.95-2.27-1.94-4.87-4.21-5.81-1.86-.77-5.15,4.4-6.62,3.03-1.53-1.43-.04-8.81,1.59-10.13s3.85-1.58,5.95-1.68c5.11-.24,10.26.18,15.27,1.22,3.1.65,6.29,1.62,8.53,3.86,2.83,2.84,3.56,7.13,3.76,11.14.21,4.1-.03,8.4-2.02,11.98-1.99,3.59-6.17,6.24-10.17,5.32-.4-2.18,0-4.41.16-6.62.15-2.21,0-4.59-1.35-6.35s-4.23-2.45-5.8-.89"
              fill="#36344e"
              strokeWidth="0"
            />
            <path
              d="m847.92,130.65c1.47-1.08,3.22-1.97,5.03-1.75,1.95.24,3.6,1.85,4.1,3.75s-.06,4-1.27,5.55c-1.21,1.55-3,2.58-4.9,3.1-1.1.3-2.3.42-3.35-.03-1.54-.66-2.37-2.64-1.77-4.2"
              fill="#36344e"
              strokeWidth="0"
            />
            <rect
              x="820.09"
              y="388"
              width="13.79"
              height="19.56"
              fill="#f2a7aa"
              strokeWidth="0"
            />
            <path
              d="m806.66,419.41c-1.45,0-2.74-.04-3.71-.13-3.66-.34-7.16-3.04-8.92-4.62-.79-.71-1.04-1.84-.63-2.82h0c.29-.7.88-1.22,1.61-1.43l9.68-2.77,15.67-10.58.17.31c.07.12,1.6,2.89,2.12,4.76.2.71.14,1.31-.15,1.77-.21.32-.49.5-.73.61.28.3,1.17.9,3.91,1.34,3.99.64,4.84-3.51,4.87-3.68l.03-.14.12-.08c1.9-1.23,3.07-1.78,3.48-1.66.25.08.67.2,1.81,11.49.11.35.91,2.95.37,5.43-.59,2.7-12.39,1.77-14.75,1.56-.07,0-8.9.64-14.96.64Z"
              fill="#36344e"
              strokeWidth="0"
            />
            <rect
              x="865.58"
              y="374.8"
              width="13.79"
              height="19.56"
              transform="translate(-71.35 519.94) rotate(-31.95)"
              fill="#f2a7aa"
              strokeWidth="0"
            />
            <path
              d="m857.61,416.73c-1.62,0-3.11-.19-4.17-.38-1.04-.18-1.86-1.01-2.03-2.06h0c-.12-.75.1-1.5.61-2.07l6.75-7.47,7.7-17.27.31.17c.12.06,2.89,1.6,4.32,2.92.54.5.81,1.03.8,1.58,0,.38-.15.69-.29.9.4.1,1.47.14,4.03-.94,3.73-1.57,2.25-5.54,2.19-5.71l-.05-.13.06-.13c.97-2.05,1.66-3.14,2.07-3.25.25-.07.68-.18,7.61,8.79.28.24,2.33,2.02,3.19,4.42.93,2.6-9.58,8.06-11.69,9.13-.07.05-11.06,8.04-15.57,10.31-1.79.9-3.91,1.18-5.84,1.18Z"
              fill="#36344e"
              strokeWidth="0"
            />
            <path
              d="m844.04,224.38h-38.61l-3.5,35.92,15.33,132.71h19.71l-7.88-76.65,31.97,69.2,17.52-12.26-24.97-64.6s8.92-56.28,1.91-70.3c-7.01-14.02-11.48-14.02-11.48-14.02Z"
              fill="#36344e"
              strokeWidth="0"
            />
            <polygon
              points="863.24 226.57 801.92 226.57 820.32 147.3 847.03 147.3 863.24 226.57"
              fill="#e42313"
              strokeWidth="0"
            />
            <path
              id="uuid-52db3307-ec3e-496d-a5d4-9d1f33ffc652-45-45-44-44-1772"
              d="m786.69,145.73c-.98-4.82.81-9.23,4-9.84,3.19-.61,6.56,2.8,7.54,7.63.42,1.92.35,3.91-.19,5.81l3.88,20.49-10.02,1.58-2.76-20.36c-1.24-1.55-2.08-3.37-2.45-5.31h0Z"
              fill="#f2a7aa"
              strokeWidth="0"
            />
            <path
              d="m846.38,147.3h-23.56l-15.88,31.77-5.99-23.8-13.16,1.4s3.11,46.51,16.73,44.94c13.61-1.57,45.36-43.48,41.87-54.3Z"
              fill="#e42313"
              strokeWidth="0"
            />
            <path
              id="uuid-2800d917-a06e-4fc6-b661-0f9df9cadefc-46-46-45-45-1773"
              d="m872.7,268.11c.98,4.82-.81,9.23-4,9.84-3.19.61-6.56-2.8-7.54-7.63-.42-1.92-.35-3.91.19-5.81l-3.88-20.49,10.02-1.58,2.76,20.36c1.24,1.55,2.08,3.37,2.45,5.31,0,0,0,0,0,0Z"
              fill="#f2a7aa"
              strokeWidth="0"
            />
            <path
              d="m832.95,147.3s13.39-.57,14.08,0c3.65,2.99,25.09,110.66,25.09,110.66h-13.58s-25.6-110.66-25.6-110.66Z"
              fill="#e42313"
              strokeWidth="0"
            />
          </svg>
        </div>
      </main>
    </section>
  );
};

export default LandingComp;
