import React from "react";

const DashboardGreeting = ({ name }) => {
  return (
    <h1 className="self-stretch text-lg font-normal leading-none">
      Selamat Datang Kembali, <span className="font-bold">{name}</span>
    </h1>
  );
};

export default DashboardGreeting;
