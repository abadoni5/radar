import React from "react";
import Link  from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 pb-24">
      <div className="flex space-x-8">
        <Link href="/monostatic">
          <div className="w-64 h-32 bg-blue-400 rounded-lg shadow-md flex justify-center items-center cursor-pointer hover:bg-blue-500 transition-colors duration-300">
            <span className="text-white text-xl font-semibold">Monostatic</span>
          </div>
        </Link>
        <Link href="/bistatic">
          <div className="w-64 h-32 bg-green-400 rounded-lg shadow-md flex justify-center items-center cursor-pointer hover:bg-green-500 transition-colors duration-300">
            <span className="text-white text-xl font-semibold">Bistatic</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
