"use client";
import React, { useState, Suspense } from "react";

// Dynamic imports for the radar components
const BistaticRadar = React.lazy(() => import("./bistatic"));
const MonostaticRadar = React.lazy(() => import("./monostatic"));

const RadarComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Monostatic Radar");

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const renderComponent = () => {
    switch (selectedTab) {
      case "Bistatic Radar":
        return <BistaticRadar onSubmit={function (results: any): void {
            throw new Error("Function not implemented.");
        } } />;
      case "Monostatic Radar":
        return <MonostaticRadar onSubmit={function (results: any): void {
            throw new Error("Function not implemented.");
        } } />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center">
        <div className="flex items-center space-x-8">
          {/* Increased space between items */}
          <TabButton
            tabName="Monostatic Radar"
            selectedTab={selectedTab}
            handleClick={handleTabClick}
          />
          <TabButton
            tabName="Bistatic Radar"
            selectedTab={selectedTab}
            handleClick={handleTabClick}
          />
        </div>
      </div>
      <div className="w-full mt-4 flex justify-center items-center">
        {" "}
        {/* Increased top margin */}
        <Suspense fallback={<div>Loading...</div>}>
          {renderComponent()}
        </Suspense>
      </div>
    </div>
  );
};

interface TabButtonProps {
  tabName: string;
  selectedTab: string;
  handleClick: (tabName: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  tabName,
  selectedTab,
  handleClick,
}) => {
  return (
    <button
      className={`py-4 px-8 text-white rounded-full bg-blue-400 hover:bg-blue-500 focus:outline-none ${
        selectedTab === tabName
          ? "bg-green-500"
          : "bg-blue-700 hover:bg-blue-500"
      }`}
      onClick={() => handleClick(tabName)}
    >
      {tabName}
    </button>
  );
};

export default RadarComponent;
