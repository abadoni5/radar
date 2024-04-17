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
        <li className="hover:text-blue-500">
          <a href="https://www.saab.com/products/saab-2000-erieye-aewc">
            Saab 2000 Erieye AEW&C
          </a>
        </li>
        <li className="hover:text-blue-500">
          <a href="https://www.saab.com/products/globaleye">
            GlobalEye AEW&C | Saab
          </a>
        </li>
        <li className="hover:text-blue-500">
          <a href="https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104504/e-3-sentry-awacs/">
            {" "}
            E-3 Sentry (AWACS)
          </a>
        </li>
        <li className="hover:text-blue-500">
          {" "}
          <a href="https://www.iai.co.il/p/elw-2090">
            Airborne Early Warning & Control Aircraft - ELW-2090
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AirborneRadarComponent;
