import React from "react";
import Sidebar from "../components/sidebar"; // Import the Sidebar component
import PDFViewer from "../components/PDFViewer";
import Navbar from "../components/navbar";
import QuickLinksNavbar from "../components/quicklinks"; 

const Page = () => {
  return (
    <>
      <QuickLinksNavbar />
      <Navbar currentLessonIndex={0} />
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex justify-center items-center">
          <PDFViewer src="overview" />
        </div>
      </div>
    </>
  );
};

export default Page;
