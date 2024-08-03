import React from "react";

const CompanyInfo = ({ icon, name, type }) => {
  const widthClass = type === "company" ? "w-auto max-w-full" : "w-auto max-w-full";

  return (
    <div
      className={`flex items-center justify-center px-3 py-1 mt-2 border border-gray-300 rounded-lg ${widthClass}`}
    >
      <div className="cards__info flex gap-1">
        <div
          className={`shrink-0 self-start mr-2 ${
            type === "company" ? "w-[23px] aspect-[1.15]" : "w-6 aspect-[1.26]"
          }`}
        >
          {icon}
        </div>
        <div className="text-black font-normal text-sm overflow-hidden text-ellipsis whitespace-nowrap">
          {name}
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
