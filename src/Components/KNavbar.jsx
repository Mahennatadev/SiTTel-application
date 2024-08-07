import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import React from "react";
import Profile from "../Assets/Profile.png";

const KNavbar = () => {
  const avatarDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const goToDashboard = useNavigate();
  const goToLogin = useNavigate();
  const location = useLocation();

  const nav = useNavigate();

  const goToRiwayat = () => {
    nav('/karyawanRiwayat'); // Ganti dengan path halaman yang diinginkan
  };
  const navItems = [
    { name: "Unggah", path: "/karyawanUnggah" },
    { name: "Status", path: "/karyawanStatus" },
    { name: "Riwayat", path: "/karyawanRiwayat" },
  ];

  const toggleAvatarDropdown = () => {
    setIsAvatarDropdownOpen(!isAvatarDropdownOpen);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      avatarDropdownRef.current &&
      !avatarDropdownRef.current.contains(event.target)
    ) {
      setIsAvatarDropdownOpen(false);
    }
    if (
      notificationDropdownRef.current &&
      !notificationDropdownRef.current.contains(event.target)
    ) {
      setIsNotificationDropdownOpen(false);
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
        <button type="button" onClick={() => goToDashboard("/karyawanDashboard")}>
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
        <div className="bell__icon relative" ref={notificationDropdownRef}>
          <button
            type="button"
            id="dropdownUserNotification"
            onClick={toggleNotificationDropdown}
            className="flex items-center justify-center border border-transparent w-12 h-12 rounded-full hover:bg-gray-200 transition duration-300"
          >
            <span className="sr-only"> Notifikasi </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
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

          {/* Dropdown Menu */}
          {isNotificationDropdownOpen && (
            <div
              id="dropdownNotification"
              className="absolute z-20 mt-2 left-1/2 transform -translate-x-1/2 divide-y shadow-xl w-96 max-w-xs border border-gray-200 rounded-2xl"
            >
              <div className="text-center px-4 py-2 font-bold">
                Notification
              </div>

              {/* Notification-One */}
              <div className="notification__menu px-4 py-4 flex items-start gap-6 rounded-2xl transition duration-300 border-transparent bg-white hover:bg-gray-300 cursor-pointer">
                <div className="notification__avatar flex-shrink-0 rounded-full border border-gray-300 w-10 h-10 bg-transparent overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={Profile}
                    alt="Profile Avatar"
                  />
                </div>

                <div className="flex flex-col space-y-4">
                  <p className="notification__description text-black font-normal text-sm overflow-hidden break-words">
                    Maintenance Sistem SiTTel yang berlangsung pada tanggal
                    sekian hingga tanggal sekian akan mengakibatkan downtime.
                  </p>
                  <p className="notification__time text-blue-600 font-normal text-xs">
                    Senin, 5 Agustus pukul 07.30 WIB
                  </p>
                </div>
              </div>

              {/* Notification-Two */}
              <div className="notification__menu px-4 py-4 flex items-start rounded-2xl gap-6 transition duration-300 border-transparent bg-white hover:bg-gray-300 cursor-pointer" onClick={goToRiwayat}>
                <div className="notification__avatar flex-shrink-0 rounded-full border border-gray-300 w-10 h-10 bg-transparent overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={Profile}
                    alt="Profile Avatar"
                  />
                </div>

                <div className="flex flex-col space-y-4">
                  <p className="notification__description text-black font-normal text-sm overflow-hidden break-words">
                    Dokumen yang anda ajukan dengan judul "Dokumen Laporan Keuangan Perusahaan" telah disetujui
                  </p>
                  <p className="notification__time text-blue-600 font-normal text-xs">
                    Sabtu, 3 Agustus pukul 17.00 WIB
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="greetings__name flex-auto self-stretch my-auto">
          <p className="text-lg font-bold leading-none text-black">
            Welcome, Mrs. Rina
          </p>
        </div>

        <div className="profile__avatar relative" ref={avatarDropdownRef}>
          <button
            type="button"
            id="dropdownUserAvatar"
            onClick={toggleAvatarDropdown}
            className="rounded-full border border-gray-300 w-14 h-14 bg-white overflow-hidden"
          >
            <img
              className="object-cover w-full h-full"
              src={Profile}
              alt="Profile Avatar"
            />
          </button>

          {/* Dropdown Menu */}
          {isAvatarDropdownOpen && (
            <div
              id="dropdownAvatar"
              className="absolute z-10 mt-2 left-1/2 transform -translate-x-1/2 divide-y shadow-xl transition duration-300 border-transparent bg-white rounded-md hover:bg-gray-300 cursor-pointer"
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

export default KNavbar;
