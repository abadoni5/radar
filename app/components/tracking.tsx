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
      <h3 className="text-xl font-bold mt-8">Examples of this Radar:</h3>
      <ul className="list-disc pl-6">
        <li className="hover:text-blue-500">
          <a href="https://www.baesystems.com/en/product/compact-tracking-radar">
            Compact Tracking Radar | BAE Systems
          </a>
        </li>
        <li className="hover:text-blue-500">
          <a href="https://www.thalesgroup.com/en/pharos-multi-target-tracking-radar">
            PHAROS - Multi Target Tracking Radar | Thales Group
          </a>
        </li>
        <li className="hover:text-blue-500">
          <a href="https://www.baesystems.com/en/product/precision-tracking-radar">
            Precision Tracking Radar | BAE Systems
          </a>
        </li>
        <li className="hover:text-blue-500">
          <a href="https://www.reutechradar.com/products/defence/ground-based-surveillance-and-target-acquisition-radar/#rsr410">
            RSR 420 | Ground-Based Surveillance and Target Acquisition Radar
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TrackingRadarComponent;
