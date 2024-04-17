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
        <li className="hover:text-blue-500">
          <a href="https://www.continental-automotive.com/en/components/radars/long-range-radars/advanced-radar-sensor-ars51x.html">
            Continental Automotive | Advanced Radar Sensor – ARS51x
          </a>
        </li>
        <li className="hover:text-blue-500">
          <a href="https://www.bosch-mobility.com/en/solutions/sensors/front-radar-sensor/">
            Bosch Mobility Front radar sensor
          </a>
        </li>
        <li className="hover:text-blue-500">
          <a href="https://www.denso.com/global/en/business/products-and-services/mobility/safety-cockpit/">
            Safety and Cockpit Systems | Products & Services | What we do |
            DENSO Global Website
          </a>
        </li>
        <li className="hover:text-blue-500">
          <a href="https://www.nxp.com/applications/automotive/adas-and-safe-driving/automotive-radar-systems:RADAR-SYSTEMS">
            Automotive Radar Systems | NXP Semiconductors
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AutomotiveRadarComponent;
