import React from "react";

const AirportRadarComponent: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Airport Radar</h2>
      <p className="mb-6">
        Airport radars are used to monitor and track aircraft during takeoff,
        landing, and taxiing operations within the airport's airspace. These
        radars are essential for air traffic control, ensuring the safe and
        efficient management of aircraft movements on and around the airport.
        The S-band frequency range offers the necessary resolution to detect and
        track individual aircraft, while also providing sufficient range to
        cover the terminal area.
      </p>
      <div className="flex justify-center mb-6">
        <img
          src="airport.png"
          alt="Airport Radar"
          className="max-w-full h-auto"
        />
      </div>
      <h3 className="text-2xl font-bold mb-4">Advantages</h3>
      <ul className="list-disc pl-6">
        <li className="text-green-600 mb-2">
          Provides good resolution and range for airport surveillance
        </li>
        <li className="text-green-600 mb-2">
          Optimized for the airport environment
        </li>
        <li className="text-green-600 mb-2">
          High power for reliable detection of aircraft around the airport
        </li>
        <li className="text-green-600 mb-2">
          Relatively low, to focus on airport area
        </li>
        <li className="text-green-600 mb-2">
          Suitable for the more static airport environment
        </li>
      </ul>
    </div>
  );
};

export default AirportRadarComponent;
