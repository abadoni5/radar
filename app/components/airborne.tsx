import React from "react";

const AirborneRadarComponent: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Airborne Radar</h2>
      <p className="mb-6">
        Airborne radars, like those on AEW&C (Airborne Early Warning and
        Control) systems, are advanced surveillance systems using pulse-doppler
        radar. They are used for long-range detection, tracking, and
        identification of targets, both on the ground and in the air.
      </p>
      <div className="flex justify-center">
        <img
          src="airborne.png"
          alt="Airborne Radar"
          className="max-w-full h-auto"
        />
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Advantages</h3>
        <ul className="list-disc pl-6">
          <li className="text-green-600 mb-2">
            Provides good range and resolution characteristics for airborne
            surveillance
          </li>
          <li className="text-green-600 mb-2">
            High power to achieve long-range detection
          </li>
          <li className="text-green-600 mb-2">
            Long pulse width to enhance detection range
          </li>
          <li className="text-green-600 mb-2">
            High antenna elevation for better coverage
          </li>
          <li className="text-green-600 mb-2">
            Electronic, allowing for rapid scanning and tracking of targets
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AirborneRadarComponent;
