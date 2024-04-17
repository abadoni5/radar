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
      <h3 className="text-xl font-bold mt-8">Examples of this Radar:</h3>
      <ul className="list-disc pl-6">
        <li>
          Airport Surveillance Radar (ASR-11) | Federal Aviation Administration
        </li>
        <li>
          <a href="https://www.indracompany.com/en/airport-route-surveillance-3d-radar-band">
            Indra - Airport Route Surveillance 3D Radar
          </a>
        </li>
        <li>
          <a href="https://www.indracompany.com/en/wam-mlat-systems-0">
            Indra - WAM MLAT Systems
          </a>
        </li>
        <li>
          <a href="https://www.indracompany.com/en/monopulse-secondary-surveillance-mode-s-radar-0">
            Indra - Monopulse Secondary Surveillance Mode S Radar
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AirportRadarComponent;
