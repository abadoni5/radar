"use client";
import React, { useState, Suspense } from "react";

// Dynamic imports for the radar components
const AirborneRadar = React.lazy(() => import("./airborne"));
const WeatherRadar = React.lazy(() => import("./weather"));
const TrackingRadar = React.lazy(() => import("./tracking"));
const AutomotiveRadar = React.lazy(() => import("./automotive"));
const AirportRadar = React.lazy(() => import("./airport"));

const RadarComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Airborne Radar");

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const renderComponent = () => {
    switch (selectedTab) {
      case "Airborne Radar":
        return <AirborneRadar />;
      case "Weather Radar":
        return <WeatherRadar />;
      case "Tracking Radar":
        return <TrackingRadar />;
      case "Automotive Radar":
        return <AutomotiveRadar />;
      case "Airport Radar":
        return <AirportRadar />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          <TabButton
            tabName="Airborne Radar"
            selectedTab={selectedTab}
            handleClick={handleTabClick}
          />
          <TabButton
            tabName="Weather Radar"
            selectedTab={selectedTab}
            handleClick={handleTabClick}
          />
          <TabButton
            tabName="Tracking Radar"
            selectedTab={selectedTab}
            handleClick={handleTabClick}
          />
          <TabButton
            tabName="Automotive Radar"
            selectedTab={selectedTab}
            handleClick={handleTabClick}
          />
          <TabButton
            tabName="Airport Radar"
            selectedTab={selectedTab}
            handleClick={handleTabClick}
          />
        </div>
      </div>
      <div className="w-full mt-4 flex justify-center items-center">
        {" "}
        {/* Center loading */}
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
      className={`py-2 px-4 text-white rounded-full bg-blue-400 hover:bg-blue-500 focus:outline-none ${
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
