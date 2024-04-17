import React from "react";

const AutomotiveRadarComponent: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Automotive Radar</h2>
      <p className="mb-6">
        Automotive radars are designed for use in advanced driver-assistance
        systems (ADAS) like collision avoidance, adaptive cruise control, blind
        spot detection, etc. By operating in the W-band, these radars can
        provide detailed information about the vehicle's immediate surroundings,
        allowing for precise detection and tracking of objects, such as other
        vehicles, pedestrians, and obstacles.
      </p>
      <div className="flex justify-center mb-6">
        <img
          src="automotive.png"
          alt="Automotive Radar"
          className="max-w-full h-auto"
        />
      </div>
      <h3 className="text-xl font-bold mt-8">Examples of this Radar:</h3>
      <ul className="list-disc pl-6">
        <li>Continental Automotive | Advanced Radar Sensor – ARS51x</li>
        <li>Bosch Mobility Front radar sensor</li>
        <li>
          Safety and Cockpit Systems | Products & Services | What we do | DENSO
          Global Website
        </li>
        <li>Automotive Radar Systems | NXP Semiconductors</li>
      </ul>
    </div>
  );
};

export default AutomotiveRadarComponent;
