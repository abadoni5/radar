import React from "react";

interface PDFViewerProps {
  src: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ src }) => {
  return (
    <iframe
      src={`${src}.pdf#toolbar=0`}
      title="PDF Viewer"
      className="border-gray-200 border shadow-lg rounded-lg"
      width="100%"
      height="100%"
    />
  );
};

export default PDFViewer;
