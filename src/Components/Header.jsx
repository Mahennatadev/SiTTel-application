import React from "react";
import Logo from "../Assets/Logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const goToLogin = useNavigate();
  const goToLanding = useNavigate();

  return (
    <header className="mt-7 mx-36 gap-5 flex justify-between items-center max-lg:mx-20 max-md:flex-wrap max-md:mx-10 max-sm:mx-5">
      <div className="landing__logo flex justify-center items-center p-2">
        <button type="button" onClick={() => goToLanding("/")}>
          <img
            src={Logo}
            alt="Company Logo"
            className="w-[138px] h-[40px] max-md:w-[120px] max-md:h-[35px] max-sm:w-[100px] max-sm:h-[30px]"
          />
        </button>
      </div>

      <div className="landing__slogan max-md:mt-4 text-center">
        <p className="text-gray-500 font-semibold text-base max-md:text-sm max-sm:text-xs">
          Solusi Tanda Tangan Digital Perusahaan Anda
        </p>
      </div>

      <nav className="landing__button flex justify-center mt-4 max-md:w-full">
        <button
          type="button"
          onClick={() => goToLogin("/login")}
          className="transition duration-500 py-2 px-12 text-base shadow-red-600 drop-shadow-md rounded-xl border-2 border-red-600 bg-red-600 text-white font-bold ease-in-out hover:bg-white hover:text-red-600 max-md:px-8 max-sm:px-6 max-sm:py-2 max-sm:text-sm"
        >
          Masuk
        </button>
      </nav>
    </header>
  );
};

export default Header;
