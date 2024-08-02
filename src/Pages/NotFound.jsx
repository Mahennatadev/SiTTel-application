import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid place-content-center h-screen w-full">
        <div className="text-center space-y-7">
          <div className="notfound__title">
            <h1 className="uppercase tracking-widest text-gray-500 font-black text-7xl">
              404 | Not Found
            </h1>
          </div>

          <div className="notfound__subtitle">
            <h2 className="font-black text-4xl text-black">
              Halaman Ga Ketemu Bro!👻
            </h2>
            <p className="text-black text-base pt-4">kencangkan sabuk pengaman, kita akan dialihkan ke Landing page</p>
          </div>

          <div className="notfound__button pt-20">
            <button
              onClick={() => navigate("/")}
              className="landing__button transition duration-500 px-16 py-5 max-w-full text-2xl font-bold text-red-600 whitespace-nowrap bg-white rounded-3xl border-2 border-red-600 w-[324px] hover:bg-red-600 hover:text-white transform hover:-translate-y-1 hover:scale-110 active:bg-red-500 max-md:px-5 max-md:mt-10"
            >
              Landing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
