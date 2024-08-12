import React, { useState } from "react";
import exampleDoc from "../Assets/exampleDoc.png";
import MTinjauRejectedModal from "./MTinjauRejectedModal";
import { useNavigate } from "react-router-dom";
import exampleDoc0 from "../Assets/exampleDoc0.png"

const MTinjauDokumenCard = ({ documentData }) => {
  const goToReview = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedSignature, setUploadedSignature] = useState([]);
  const [isSignatureUploaded, setIsSignatureUploaded] = useState(false);
  const [droppedImages, setDroppedImages] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) =>
      file.type.match(/image\/(jpeg|png|gif|bmp|webp)/)
    );

    if (validFiles.length > 0) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
    } else {
      alert(
        "File yang diperbolehkan hanya file gambar seperti JPG, PNG, GIF, BMP, atau WEBP"
      );
    }
  };

  const handleRemoveFile = (fileToRemove) => {
    const updatedFiles = selectedFiles.filter((file) => file !== fileToRemove);
    setSelectedFiles(updatedFiles);
  };

  const handleRemoveUploadedFile = (index) => {
    const updatedFiles = uploadedSignature.filter((_, i) => i !== index);
    setUploadedSignature(updatedFiles);

    if (updatedFiles.length === 0) {
      setIsSignatureUploaded(false);
    }
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      setUploadedSignature((prevUploaded) => [
        ...prevUploaded,
        ...selectedFiles,
      ]);
      setIsSignatureUploaded(true);
      setSelectedFiles([]);
    } else {
      alert("Silakan pilih file tanda tangan terlebih dahulu.");
    }
  };

  const handleButtonClick = () => {
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleDragStart = (event, file) => {
    event.dataTransfer.setData("file", JSON.stringify(file));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = JSON.parse(event.dataTransfer.getData("file"));
    const dropX = event.clientX - event.target.offsetLeft;
    const dropY = event.clientY - event.target.offsetTop;

    setDroppedImages((prevImages) => [
      ...prevImages,
      { ...file, x: dropX, y: dropY },
    ]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="doc__container mx-36 border border-gray-200 mt-8">
      <div className="doc__header flex justify-between items-center px-8 py-5">
        <div className="doc__name">
          <p className="file__name text-black font-medium text-base">
            {documentData.name}
          </p>
        </div>

        <div className="doc__button flex gap-2">
          <div>
            <button
              type="button"
              className={`review__button transition duration-500 py-2 px-14 inline-block text-lg shadow-red-600 drop-shadow-md rounded-2xl border-2 border-red-600 p-5 font-bold ease-in-out ${
                isSignatureUploaded
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed border-transparent shadow-none"
                  : "bg-red-600 text-white hover:bg-white hover:text-red-600"
              }`}
              onClick={handleButtonClick}
              disabled={isSignatureUploaded} // Disable "Tolak" if signature is uploaded
            >
              Tolak
            </button>
          </div>

          <div>
            <button
              type="button"
              onClick={() => goToReview('/review-succes-document')}
              className={`review__button px-14 py-2 text-lg font-bold whitespace-nowrap rounded-2xl shadow-red-600 drop-shadow-md border-2 max-md:px-5 max-md:mt-10 ${
                isSignatureUploaded
                  ? "bg-red-600 text-white border-red-600 cursor-pointer hover:bg-white hover:text-red-600 transition duration-500"
                  : "bg-gray-300 text-gray-500 border-transparent cursor-not-allowed shadow-none"
              }`}
              disabled={!isSignatureUploaded} // Enable "Tandatangani" if signature is uploaded
            >
              Tandatangani
            </button>
          </div>

          {showNotification && (
            <div className="z-10 inset-0 flex fixed items-center justify-center bg-black bg-opacity-50">
              <MTinjauRejectedModal onClose={handleCloseNotification} />
            </div>
          )}
        </div>
      </div>

      <div
        className="doc__maincontent flex grid-cols-2"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="doc__view bg-gray-200 px-36 flex-col justify-center items-center py-8 max-h-screen overflow-y-auto relative">
          <img src={exampleDoc} alt="docEx" />

          {droppedImages.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt="docEx"
              style={{
                position: "absolute",
                left: `${image.x}px`,
                top: `${image.y}px`,
                width: "50px",
              }}
            />
          ))}

          <img src={exampleDoc0} alt="" className="mt-4"/>
        </div>

        <div className="doc__detail py-12 mx-auto w-[400px] items-center space-y-2">
          <p className="doc__date text-black font-medium text-base bg-gray-100 border border-transparent p-1 rounded-lg">
            Tanggal Pengajuan:{" "}
            <span className="font-normal">{documentData.date}</span>
          </p>

          <p className="doc__sender text-black font-medium text-base bg-gray-100 border border-transparent p-1 rounded-lg">
            Nama Pengirim:{" "}
            <span className="font-normal">{documentData.sender}</span>
          </p>

          <p className="doc__title text-black font-medium text-base bg-gray-100 border border-transparent p-1 rounded-lg">
            Judul Dokumen:{" "}
            <span className="font-normal">{documentData.title}</span>
          </p>

          <p className="doc__type text-black font-medium text-base bg-gray-100 border border-transparent p-1 rounded-lg">
            Jenis Keperluan:{" "}
            <span className="font-normal">{documentData.type}</span>
          </p>

          <div className="doc__signature flex-col">
            <div className="pt-12 flex gap-2">
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
              <p>Tanda Tangan Anda:</p>
            </div>

            {uploadedSignature.length === 0 ? (
              <div className="signature__preview flex justify-center items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  width="134.96"
                  height="121.13"
                  viewBox="0 0 647.63626 632.17383"
                >
                  <path
                    d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z"
                    transform="translate(-276.18187 -133.91309)"
                    fill="#f2f2f2"
                  />
                  <path
                    d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z"
                    transform="translate(-276.18187 -133.91309)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z"
                    transform="translate(-276.18187 -133.91309)"
                    fill="#e42313"
                  />
                  <circle cx="190.15351" cy="24.95465" r="20" fill="#e42313" />
                  <circle
                    cx="190.15351"
                    cy="24.95465"
                    r="12.66462"
                    fill="#fff"
                  />
                  <path
                    d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z"
                    transform="translate(-276.18187 -133.91309)"
                    fill="#e6e6e6"
                  />
                  <path
                    d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z"
                    transform="translate(-276.18187 -133.91309)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z"
                    transform="translate(-276.18187 -133.91309)"
                    fill="#e42313"
                  />
                  <circle cx="433.63626" cy="105.17383" r="20" fill="#e42313" />
                  <circle
                    cx="433.63626"
                    cy="105.17383"
                    r="12.18187"
                    fill="#fff"
                  />
                </svg>
              </div>
            ) : (
              uploadedSignature.map((file, index) => (
                <div
                  key={index}
                  className="relative grid grid-cols-2 gap-4 mt-2"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Signature Preview ${index + 1}`}
                    className="object-contain border-dashed border-gray-300 border-2 w-64 rounded-2xl cursor-grab"
                    draggable
                    onDragStart={(e) => handleDragStart(e, file)}
                  />
                  <button
                    type="button"
                    className=" text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveUploadedFile(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9L14.394 18M9.652 18L9.26 9M19.228 5.79C19.57 5.842 19.91 5.897 20.25 5.956M19.228 5.79L18.16 19.673A2.25 2.25 0 0115.916 21.75H8.084A2.25 2.25 0 015.84 19.673L4.772 5.79M19.228 5.79A48.108 48.108 0 0015.75 5.393M4.772 5.79A48.11 48.11 0 018.25 5.393M7.5 5.393V4.477C7.5 3.297 8.41 2.313 9.59 2.276A51.964 51.964 0 0112.91 2.276C14.09 2.313 15 3.297 15 4.477V5.393M7.5 5.393A48.667 48.667 0 0115 5.393"
                      />
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="signature__upload">
            <form action="">
              <div className="flex flex-col mt-4 justify-center items-center py-14 text-center border-2 border-dashed border-gray-300 bg-white rounded-2xl">
                <div className="flex flex-col justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.25}
                    stroke="currentColor"
                    className="w-12 h-12 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                    />
                  </svg>

                  <label
                    htmlFor="file-upload"
                    className="mt-1 cursor-pointer text-gray-400"
                  >
                    Telusuri tanda tangan anda
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    aria-label="Upload file"
                    accept="image/jpeg,image/png,image/gif,image/bmp,image/webp"
                    multiple
                    onChange={handleFileChange}
                  />
                </div>

                {selectedFiles.length > 0 && (
                  <ul className="selected-files mt-4 space-y-2">
                    {selectedFiles.map((file, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg"
                      >
                        <span className="truncate max-w-[200px]">
                          {file.name}
                        </span>
                        <button
                          type="button"
                          className="ml-2 text-red-500 hover:text-red-700"
                          onClick={() => handleRemoveFile(file)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </form>

            <div className="flex items-center justify-center mt-4">
              <button
                type="button"
                className="upload__button py-2 px-14 border-2 border-red-600 inline-block bg-red-600 text-white text-lg font-bold rounded-2xl shadow-lg transition duration-300 ease-in-out hover:bg-white hover:text-red-600"
                onClick={handleUpload}
              >
                Unggah
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MTinjauDokumenCard;
