import React from "react";
import { useLocation } from "react-router-dom";
import MTinjauDokumenCard from "./MTinjauDokumenCard";
import MTinjauComp from "./MTinjauComp";

const ReviewDocumentPage = () => {
  const location = useLocation();
  const { documentData } = location.state;

  return (
    <div>
      <MTinjauComp />
      <MTinjauDokumenCard documentData={documentData} />
    </div>
  );
};

export default ReviewDocumentPage;
