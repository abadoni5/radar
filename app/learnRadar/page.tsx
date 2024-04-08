import React from "react";

const lectures = [
  {
    title: "Radars - Overview",
    link: "/overview",
  },
  {
    title: "Radars - Range Equation",
    link: "/range-equation",
  },
  {
    title: "Performance Factors",
    link: "/performance-factors",
  },
  {
    title: "Radars - Types of Radars",
    link: "/types-of-radars",
  },
  {
    title: "Radars - Pulse Radar",
    link: "/pulse-radar",
  },
  {
    title: "Radars - Doppler Effect",
    link: "/doppler-effect",
  },
  {
    title: "Radars - CW Radar",
    link: "/cw-radar",
  },
  {
    title: "Radars - FMCW Radar",
    link: "/fmcw-radar",
  },
  {
    title: "Radars - MTI Radar",
    link: "/mti-radar",
  },
  {
    title: "Delay Line Cancellers",
    link: "/delay-line-cancellers",
  },
  {
    title: "Radars - Tracking Radar",
    link: "/tracking-radar",
  },
  {
    title: "Antenna Parameters",
    link: "/antenna-parameters",
  },
  {
    title: "Radars - Radar Antennas",
    link: "/radar-antennas",
  },
  {
    title: "Matched Filter Receiver",
    link: "/matched-filter-receiver",
  },
  {
    title: "Radars - Radar Displays",
    link: "/radar-displays",
  },
  {
    title: "Radars - Duplexers",
    link: "/radar-duplexers",
  },
  {
    title: "Phased Array Antennas",
    link: "/phased-array-antennas",
  },
];

const RadarSystemsTable: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Click on the lecture to learn </h1>
        <div className="grid grid-cols-3 gap-4">
          {lectures.map((lecture, index) => (
            <a key={index} href={lecture.link}>
              <button
                className={`w-full h-24 text-white font-semibold py-4 px-6 rounded-lg bg-blue-400 shadow-md transition duration-300 ease-in-out transform hover:scale-105`}
              >
                {lecture.title}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadarSystemsTable;
