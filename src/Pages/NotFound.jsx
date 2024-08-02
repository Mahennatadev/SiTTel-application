import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid space-y-6 place-content-center h-screen w-full">
        <div className="text-center">
          <h1 class="uppercase tracking-widest text-gray-500 font-black text-7xl">
            404 | Not Found
          </h1>
          <h2 className="font-black text-4xl text-black">
            Halaman Ga Ketemu Bro!👻
          </h2>

          <button
            onClick={() => navigate("/")}
            className="landing__button transition duration-500 px-16 py-5 mt-16 max-w-full text-2xl font-bold text-red-600 whitespace-nowrap bg-white rounded-3xl border-2 border-red-600 w-[324px] hover:bg-red-600 hover:text-white transform hover:-translate-y-1 hover:scale-110 active:bg-red-500 max-md:px-5 max-md:mt-10"
          >
            Landing
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
