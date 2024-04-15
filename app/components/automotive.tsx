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
      <h3 className="text-2xl font-bold mb-4">Advantages</h3>
      <ul className="list-disc pl-6">
        <li className="text-green-600 mb-2">
          Provides high resolution and accuracy for short range automotive
          applications
        </li>
        <li className="text-green-600 mb-2">
          Wide bandwidth for high resolution imaging of the surrounding
          environment
        </li>
        <li className="text-green-600 mb-2">
          Relatively low power as these radars are designed for short range low
          power operation in vehicles
        </li>
        <li className="text-green-600 mb-2">
          Mounted close to the vehicle's body for optimal coverage
        </li>
        <li className="text-green-600 mb-2">
          Usually using a phased array or other scanning mechanism to provide a
          wide field of view
        </li>
      </ul>
    </div>
  );
};

export default AutomotiveRadarComponent;
