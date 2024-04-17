import React from "react";

const WeatherRadarComponent: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Weather Radar</h2>
      <p className="mb-6">
        Weather radars are primarily used by meteorological agencies and weather
        forecasting services to gather real-time data on the state of the
        atmosphere. They can detect the presence, intensity, and movement of
        various types of precipitation, including rain, snow, and hail. Modern
        weather radars are mostly pulse-Doppler radars, capable of detecting the
        motion of rain droplets in addition to the intensity of the
        precipitation. They normally transmit in S-, C-, X-band (less often in
        L-band). The L-band is particularly suitable for long-range
        reconnaissance radar, as it is least affected by weather conditions.
      </p>
      <div className="flex justify-center mb-6">
        <img
          src="weather.png"
          alt="Weather Radar"
          className="max-w-full h-auto"
        />
      </div>
      <h3 className="text-xl font-bold mt-8">Examples of this Radar:</h3>
      <ul className="list-disc pl-6">
        <li>Vaisala Weather Radar WRS300</li>
        <li>X-Band Weather Radar WRS400</li>
        <li>C-band Weather Radars</li>
        <li>C-Band Polarimetric Doppler Weather Radar (DWR) - BEL</li>
      </ul>
    </div>
  );
};

export default WeatherRadarComponent;
