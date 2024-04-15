import React from "react";

interface Lecture {
  title: string;
  link: string;
}

const Sidebar: React.FC = () => {
  const lectures: Lecture[] = [
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

  return (
    <div className="w-64 bg-gray-200 p-4">
      <h3 className="text-lg font-semibold mb-2">Lecture Links</h3>
      <ul className="space-y-2">
        {lectures.map((lecture, index) => (
          <li key={index}>
            <a
              href={lecture.link}
              className="block bg-white hover:bg-gray-300 rounded-lg py-2 px-4 transition duration-300"
            >
              {lecture.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
