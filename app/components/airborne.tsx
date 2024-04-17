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
      <h3 className="text-xl font-bold mt-8">Examples of this Radar:</h3>
      <ul className="list-disc pl-6">
        <li>Saab 2000 Erieye AEW&C</li>
        <li>GlobalEye AEW&C | Saab</li>
        <li>E-3 Sentry (AWACS)</li>
        <li>Airborne Early Warning & Control Aircraft - ELW-2090</li>
      </ul>
    </div>
  );
};

export default AirborneRadarComponent;
