import React from "react";
import PDFViewer from "../components/PDFViewer";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import QuickLinksNavbar from "../components/quicklinks";

const Page = () => {
  return (
    <>
      <QuickLinksNavbar />
      <Navbar currentLessonIndex={9} />
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex justify-center items-center">
          <PDFViewer src="delay-line-cancellers" />
        </div>
      </div>
    </>
  );
};

export default Page;
