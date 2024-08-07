import React from "react";

const MRiwayatPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (event) => {
    const selectedPage = parseInt(event.target.value);
    onPageChange(selectedPage);
  };

  return (
    <div className="flex items-center space-x-2 text-black">
      <span className="font-semibold">Page</span>
      <div className="relative">
        <select
          value={currentPage}
          onChange={handlePageChange}
          className="appearance-none bg-white border border-gray-300 text-black py-2 pl-3 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline"
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      <span className="font-semibold">of {totalPages}</span>
    </div>
  );
};

export default MRiwayatPagination;
