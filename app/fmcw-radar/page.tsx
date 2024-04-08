import React from "react";
import PDFViewer from "../components/PDFViewer";
import Navbar from "../components/navbar";

const Page = () => {
  return (
    <>
      <Navbar currentLessonIndex={7} />
      <div className="flex justify-center items-center bg-gray-100 min-h-screen pb-96 pb-96">
        <PDFViewer src="fmcw-radar" />
      </div>
    </>
  );
};

export default Page;
