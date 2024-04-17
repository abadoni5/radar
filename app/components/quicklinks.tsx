import React from "react";
import Link from "next/link";

const QuickLinksNavbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex justify-between w-full space-x-4">
            <Link
              href="/"
              className="flex-1 text-white hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium block text-center"
            >
              Home
            </Link>
            <Link
              href="/overview"
              className="flex-1 text-white hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium block text-center"
            >
              Learn Radar
            </Link>
            <Link
              href="/buyRadar"
              className="flex-1 text-white hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium block text-center"
            >
              Radar Parameters
            </Link>
            <Link
              href="/calculator"
              className="flex-1 text-white hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium block text-center"
            >
                Try Scientific Calculator
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default QuickLinksNavbar;
