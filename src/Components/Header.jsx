import React from "react";
import Logo from "../Assets/Logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const goToLogin = useNavigate();
  const goToLanding = useNavigate();

  return (
    <header className="mt-7 mx-36 gap-5 flex justify-between items-center self-stretch max-md:flex-wrap max-md:max-w-full max-sm:max-w-full max-sm:mx-5">
      <div className="landing__logo flex justify-center items-center self-stretch p-2">
        <button type="button" onClick={() => goToLanding("/")}>
        <img
          src={Logo}
          alt="Company Logo"
          className="w-[138px] h-[40px]"
        />
        </button>
      </div>

      <div className="landing__slogan self-stretch my-auto max-md:max-w-full">
        <p className="text-gray-500 font-semibold text-base">
          Solusi Tanda Tangan Digital Perusahaan Anda
        </p>
      </div>

      <nav className="landing__button flex flex-col justify-center my-auto self-stretch whitespace-nowrap">
        <button
          type="button"
          onClick={() => goToLogin("/login")}
          className="transition duration-500 py-2 px-12 inline-block text-base shadow-red-600 drop-shadow-md rounded-xl border-2 border-red-600 bg-red-600 p-5 text-white font-bold ease-in-out hover:bg-white hover:text-red-600"
        >
          Masuk
        </button>
      </nav>
    </header>
  );
};

export default Header;
