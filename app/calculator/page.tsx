import React from "react";
import QuickLinksNavbar from "../components/quicklinks";
import RadarComponent from "../components/calcSelecter";

const HomePage: React.FC = () => {
  // List of units
  const unitsList = [
    "Linear Gain (Gain)",
    "Rotation Speed (x)",
    "Antenna Half Power Beamwidth (Theta(B))",
    "Power Transmitted",
    "Radar Cross Section",
    "Bandwidth",
    "Effective Aperture Area (for bistatic)",
    "Min Detectable Power",
    "Wavelength (Lambda)",
    "Pulse Width",
    "Hits per scan"
  ];

  return (
    <>
      <QuickLinksNavbar />
      <div className="bg-gray-200 p-4">
        <div className="bg-white rounded-lg shadow-lg py-2 px-4 mb-4 text-center mx-auto max-w-lg">
          <p className="text-sm font-bold"> Note: Units must be greater than or equal to 0 unless otherwise specified.</p>
          <br />
          <p className="text-sm font-bold"> >= 0: Linear Gain (Gain), Rotation Speed (x), Antenna Half Power Beamwidth (Theta(B)), Power Transmitted, Radar Cross Section, Bandwidth, Effective Aperture Area (for bistatic), Wavelength.</p>
          <br />
          <p className="text-sm font-bold"> >0: Min Detectable Power</p>
        </div>
      </div>
      <RadarComponent />
    </>
  );
};

export default HomePage;
