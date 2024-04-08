import React from "react";
import PDFViewer from "../components/PDFViewer";

const Page = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen pb-96">
      <PDFViewer src="radar-displays" />
    </div>
  );
};

export default Page;
