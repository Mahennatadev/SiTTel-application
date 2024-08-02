import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import React from "react";
import Profile from "../Assets/Profile.png";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const goToDashboard = useNavigate();
  const goToLogin = useNavigate();
  const location = useLocation();
  const navItems = [
    { name: "Unggah", path: "/karyawanUnggah" },
    { name: "Status", path: "/karyawanStatus" },
    { name: "Riwayat", path: "/karyawanRiwayat" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="mt-7 mx-36 gap-5 flex justify-between items-center self-stretch max-md:flex-wrap max-md:max-w-full max-sm:max-w-full max-sm:mx-5">
      <div className="dashboard__logo flex items-center self-stretch p-2 w-[299px]">
        <button type="button" onClick={() => goToDashboard("/dashboard")}>
          <img src={Logo} alt="Company Logo" className="w-[138px] h-[40px]" />
        </button>
      </div>

      <nav className="dashboard__navItems flex gap-14 items-center self-stretch my-auto text-base font-medium leading-none text-black whitespace-nowrap">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`self-stretch my-auto transition duration-300 ${
              location.pathname === item.path
                ? "text-red-600 underline underline-offset-8 decoration-2"
                : "hover:underline hover:decoration-2 hover:underline-offset-8 hover:text-black"
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>

      <div className="dashboard__profile flex gap-5 items-center self-stretch my-auto">
        <button className="bell__icon" type="button">
          <span className="sr-only"> Notifikasi </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </button>

        <div className="greetings__name flex-auto self-stretch my-auto">
          <p className="text-lg font-bold leading-none text-black">
            Welcome, Mrs. Rina
          </p>
        </div>

        <div className="profile__avatar relative" ref={dropdownRef}>
          <button
            type="button"
            id="dropdownUserAvatar"
            onClick={toggleDropdown}
            className="box-border rounded-full border border-gray-300 w-14 h-14 bg-white overflow-hidden"
          >
            <img className="object-cover" src={Profile} alt="Profile Avatar" />
          </button>

          {isDropdownOpen && (
            <div
              id="dropdownAvatar"
              className="absolute z-10 mt-2 left-1/2 transform -translate-x-1/2 divide-y shadow-xl border-transparent bg-white rounded-md hover:bg-gray-300 cursor-pointer"
              style={{ minWidth: "150px" }}
            >
              <div
                className="px-4 py-2 flex justify-between items-center"
                onClick={() => goToLogin("/login")}
              >
                <p className="block text-base text-black font-semibold">
                  Logout
                </p>

                <button type="button">
                  <span className="sr-only"> Keluar </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
