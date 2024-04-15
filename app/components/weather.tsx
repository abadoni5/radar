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
      <h3 className="text-2xl font-bold mb-4">Advantages</h3>
      <ul className="list-disc pl-6">
        <li className="text-green-600 mb-2">
          A common frequency for weather radar due to its ability to detect
          precipitation and atmospheric conditions
        </li>
        <li className="text-green-600 mb-2">
          Narrow bandwidth as weather radar is focused on detecting large scale
          atmospheric changes
        </li>
        <li className="text-green-600 mb-2">
          High power to detect distant weather phenomena
        </li>
        <li className="text-green-600 mb-2">
          Compromise between coverage and ground clutter
        </li>
        <li className="text-green-600 mb-2">
          Suitable for the relatively static nature of weather monitoring
        </li>
      </ul>
    </div>
  );
};

export default WeatherRadarComponent;
