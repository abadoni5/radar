import React from "react";
import PDFViewer from "../components/PDFViewer";
import Navbar from "../components/navbar";

const Page = () => {
  return (
    <>
      <Navbar currentLessonIndex={12} />
      <div className="flex justify-center items-center bg-gray-100 min-h-screen pb-96">
        <PDFViewer src="radar-antennas" />
      </div>
    </>
  );
};

export default Page;
