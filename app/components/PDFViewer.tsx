import React from "react";

interface PDFViewerProps {
  src: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ src }) => {
  return (
    <iframe
      src={`${src}.pdf#toolbar=0`}
      title="PDF Viewer"
      className="m-16 border-gray-200 border shadow-lg rounded-lg"
      width="56%"
      height="500px"
    />
  );
};

export default PDFViewer;
