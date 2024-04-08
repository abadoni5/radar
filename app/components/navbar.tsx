"use client"
import React from "react";

interface NavbarProps {
  currentLessonIndex: number;
}

interface Lecture {
  title: string;
  link: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentLessonIndex }) => {
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

  const goToHome = () => {
    window.location.href = "/";
  };

  const goToPrevious = () => {
    if (currentLessonIndex > 0) {
      window.location.href = lectures[currentLessonIndex - 1].link;
    }
  };

  const goToNext = () => {
    if (currentLessonIndex < lectures.length - 1) {
      window.location.href = lectures[currentLessonIndex + 1].link;
    }
  };

  const goToLearnAgain = () => {
    window.location.href = "/learnRadar";
  };

  return (
    <div className="flex justify-between items-center bg-blue-400 text-white p-4">
      <div className="flex items-center">
        <span className="text-lg mr-4">{`Lesson ${
          currentLessonIndex + 1
        }:`}</span>
        <span className="text-xl font-semibold">
          {lectures[currentLessonIndex].title}
        </span>
      </div>
      <div className="flex items-center">
        <button
          className="bg-indigo-50 hover:bg-neutral-200 text-black font-bold py-2 px-4 rounded mr-2"
          onClick={goToPrevious}
          disabled={currentLessonIndex === 0}
        >
          Previous Lecture
        </button>
        <button
          className="bg-indigo-50 hover:bg-neutral-200 text-black font-bold py-2 px-4 rounded mr-2"
          onClick={goToNext}
          disabled={currentLessonIndex === lectures.length - 1}
        >
          Next Lecture
        </button>
        <button
          className="bg-indigo-50 hover:bg-neutral-200 text-black font-bold py-2 px-4 rounded"
          onClick={goToLearnAgain}
        >
          Learn Again
        </button>
      </div>
    </div>
  );
};

export default Navbar;
