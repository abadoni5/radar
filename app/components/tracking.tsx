import React from "react";

const TrackingRadarComponent: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Tracking Radar</h2>
      <p className="mb-6">
        Tracking radars are ground-based systems used for cued tracking of
        targets, often in military or specialized applications. The L-band
        frequency range offers the necessary combination of range and resolution
        to effectively track targets at long distances.
      </p>
      <div className="flex justify-center mb-6">
        <img
          src="tracking.png"
          alt="Tracking Radar"
          className="max-w-full h-auto"
        />
      </div>
      <h3 className="text-2xl font-bold mb-4">Advantages</h3>
      <ul className="list-disc pl-6">
        <li className="text-green-600 mb-2">
          Suitable for long range tracking applications
        </li>
        <li className="text-green-600 mb-2">
          Very high power for long range and resolution
        </li>
        <li className="text-green-600 mb-2">
          Elevated, to achieve better coverage and line of sight
        </li>
        <li className="text-green-600 mb-2">
          Usually mechanical or electronically scanned antenna
        </li>
      </ul>
    </div>
  );
};

export default TrackingRadarComponent;
