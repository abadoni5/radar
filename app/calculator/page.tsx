"use client"
import React, { useState } from "react";

const RadarCalculator: React.FC = () => {
  const [powerOutput, setPowerOutput] = useState<string>("");
  const [powerOutputUnit, setPowerOutputUnit] = useState<string>("mW");

  const [radarCrossSection, setRadarCrossSection] = useState<string>("");
  const [radarCrossSectionUnit, setRadarCrossSectionUnit] =
    useState<string>("m²");

  const [radarAntennaGain, setRadarAntennaGain] = useState<string>("");

  const [radarSignalFrequency, setRadarSignalFrequency] = useState<string>("");
  const [radarSignalFrequencyUnit, setRadarSignalFrequencyUnit] =
    useState<string>("GHz");

  const [minDetectablePower, setMinDetectablePower] = useState<string>("");
  const [minDetectablePowerUnit, setMinDetectablePowerUnit] =
    useState<string>("mW");

  const [result, setResult] = useState<string>("");

  const validateInput = (input: string): boolean => {
    return input === "" || /^\d*\.?\d+$/.test(input);
  };

  const calculate = () => {
    if (
      !validateInput(powerOutput) ||
      !validateInput(radarCrossSection) ||
      !validateInput(radarAntennaGain) ||
      !validateInput(radarSignalFrequency) ||
      !validateInput(minDetectablePower)
    ) {
      setResult("Invalid input");
      return;
    }

    const c = 299792458; // Speed of light
    let Pr = parseFloat(powerOutput);
    let Pmin = parseFloat(minDetectablePower);

    if (powerOutputUnit === "mW") Pr /= 1000;
    if (minDetectablePowerUnit === "mW") Pmin /= 1000;

    let sigma = parseFloat(radarCrossSection);

    if (radarCrossSectionUnit === "sqft") σ *= 0.092903;
    if (radarCrossSectionUnit === "in²") σ *= 0.00064516;
    if (radarCrossSectionUnit === "cm²") σ /= 10000;

    const Gr = parseFloat(radarAntennaGain);
    let f0 = parseFloat(radarSignalFrequency);

    if (radarSignalFrequencyUnit === "GHz") f0 *= 1e9;

    const calculatedResult = Math.pow(
      ((Pr * Gr * sigma * Math.pow(c, 2) * Math.pow(Gr, 2)) /
        (Math.pow(4 * Math.PI, 3) * Math.pow(f0, 2) * Pmin)),
      1 / 4
    );

    setResult(
      isNaN(calculatedResult) ? "Invalid input" : calculatedResult.toFixed(2)
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-xl p-6 bg-gray-100 rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="powerOutput"
            className="block text-gray-700 font-bold mb-2"
          >
            Power Output
          </label>
          <div className="flex items-center">
            <input
              type="text"
              inputMode="numeric"
              id="powerOutput"
              className={`w-full px-3 py-2 border rounded-md ${
                powerOutput !== "" && !validateInput(powerOutput)
                  ? "border-red-500"
                  : ""
              }`}
              onChange={(e) => setPowerOutput(e.target.value)}
              value={powerOutput}
            />
            <select
              className="ml-2 px-3 py-2 border rounded-md"
              value={powerOutputUnit}
              onChange={(e) => setPowerOutputUnit(e.target.value)}
            >
              <option value="mW">mW (milliwatts)</option>
              <option value="W">W (watts)</option>
              <option value="dBm">
                dBm (decibels relative to 1 milliwatt)
              </option>
              <option value="dBW">dBW (decibels relative to 1 watt)</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="radarCrossSection"
            className="block text-gray-700 font-bold mb-2"
          >
            Radar Cross Section
          </label>
          <div className="flex items-center">
            <input
              type="text"
              inputMode="numeric"
              id="radarCrossSection"
              className={`w-full px-3 py-2 border rounded-md ${
                radarCrossSection !== "" && !validateInput(radarCrossSection)
                  ? "border-red-500"
                  : ""
              }`}
              onChange={(e) => setRadarCrossSection(e.target.value)}
              value={radarCrossSection}
            />
            <select
              className="ml-2 px-3 py-2 border rounded-md"
              value={radarCrossSectionUnit}
              onChange={(e) => setRadarCrossSectionUnit(e.target.value)}
            >
              <option value="m²">m² (square meters)</option>
              <option value="sqft">sqft (square feet)</option>
              <option value="in²">in² (square inches)</option>
              <option value="cm²">cm² (square centimeters)</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="radarAntennaGain"
            className="block text-gray-700 font-bold mb-2"
          >
            Radar Antenna Gain (linear)
          </label>
          <input
            type="text"
            inputMode="numeric"
            id="radarAntennaGain"
            className={`w-full px-3 py-2 border rounded-md ${
              radarAntennaGain !== "" && !validateInput(radarAntennaGain)
                ? "border-red-500"
                : ""
            }`}
            onChange={(e) => setRadarAntennaGain(e.target.value)}
            value={radarAntennaGain}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="radarSignalFrequency"
            className="block text-gray-700 font-bold mb-2"
          >
            Radar Signal Frequency
          </label>
          <div className="flex items-center">
            <input
              type="text"
              inputMode="numeric"
              id="radarSignalFrequency"
              className={`w-full px-3 py-2 border rounded-md ${
                radarSignalFrequency !== "" &&
                !validateInput(radarSignalFrequency)
                  ? "border-red-500"
                  : ""
              }`}
              onChange={(e) => setRadarSignalFrequency(e.target.value)}
              value={radarSignalFrequency}
            />
            <select
              className="ml-2 px-3 py-2 border rounded-md"
              value={radarSignalFrequencyUnit}
              onChange={(e) => setRadarSignalFrequencyUnit(e.target.value)}
            >
              <option value="Hz">Hz (hertz)</option>
              <option value="kHz">kHz (kilohertz)</option>
              <option value="MHz">MHz (megahertz)</option>
              <option value="GHz">GHz (gigahertz)</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="minDetectablePower"
            className="block text-gray-700 font-bold mb-2"
          >
            Minimum Detectable Power
          </label>
          <div className="flex items-center">
            <input
              type="text"
              inputMode="numeric"
              id="minDetectablePower"
              className={`w-full px-3 py-2 border rounded-md ${
                minDetectablePower !== "" && !validateInput(minDetectablePower)
                  ? "border-red-500"
                  : ""
              }`}
              onChange={(e) => setMinDetectablePower(e.target.value)}
              value={minDetectablePower}
            />
            <select
              className="ml-2 px-3 py-2 border rounded-md"
              value={minDetectablePowerUnit}
              onChange={(e) => setMinDetectablePowerUnit(e.target.value)}
            >
              <option value="mW">mW (milliwatts)</option>
              <option value="W">W (watts)</option>
              <option value="dBm">
                dBm (decibels relative to 1 milliwatt)
              </option>
              <option value="dBW">dBW (decibels relative to 1 watt)</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={calculate}
          >
            Calculate
          </button>
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Result:</label>
          <input
            type="text"
            id="result"
            className="w-full px-3 py-2 border rounded-md"
            readOnly
            value={result}
          />
        </div>
      </div>
    </div>
  );
};

export default RadarCalculator;

