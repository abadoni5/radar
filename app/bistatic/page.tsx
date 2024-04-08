"use client";
import React, { useState } from "react";

const RadarCalculator: React.FC = () => {
  const [pt, setPt] = useState<string>(""); // Default is kilo watts
  const [pmin, setPmin] = useState<string>(""); // Default is micro watts
  const [g, setG] = useState<string>("");
  const [sigma, setSigma] = useState<string>("");
  const [f, setF] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [x, setX] = useState<string>("");
  const [theta, setTheta] = useState<string>("");
  const [apertureArea, setApertureArea] = useState<string>("");

  const [powerUnit, setPowerUnit] = useState<string>("kW"); // Default is kilo watts
  const [pminUnit, setPminUnit] = useState<string>("μW"); // Default is micro watts
  const [areaUnit, setAreaUnit] = useState<string>("sq meters");
  const [frequencyUnit, setFrequencyUnit] = useState<string>("GHz");

  const [range, setRange] = useState<string>("");
  const [minResolution, setMinResolution] = useState<string>("");
  const [avgPowerTransmitted, setAvgPowerTransmitted] = useState<string>("");
  const [energy, setEnergy] = useState<string>("");
  const [hitsPerScan, setHitsPerScan] = useState<string>("");
  const [pulseWidth, setPulseWidth] = useState<string>("");

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const calculate = () => {
    // Convert input values to numbers
    const Pt = parseFloat(pt) * getPowerMultiplier(powerUnit);
    const Pmin = parseFloat(pmin) * getPowerMultiplier(pminUnit);
    const G = parseFloat(g);
    const Sigma = parseFloat(sigma);
    const F = parseFloat(f) * getFrequencyMultiplier(frequencyUnit);
    const B = parseFloat(b);
    const X = parseFloat(x);
    const Theta = parseFloat(theta);
    const Ae = parseFloat(apertureArea) * getAreaMultiplier(areaUnit);

    if (
      pt.trim() === "" ||
      pmin.trim() === "" ||
      g.trim() === "" ||
      sigma.trim() === "" ||
      f.trim() === "" ||
      b.trim() === "" ||
      x.trim() === "" ||
      theta.trim() === "" ||
      apertureArea.trim() === ""
    ) {
      setShowModal(true);
      setModalMessage("Please fill in all the input fields.");
      return;
    }

    // Check for invalid inputs
    if (
      isNaN(Pt) ||
      isNaN(Pmin) ||
      isNaN(G) ||
      isNaN(Sigma) ||
      isNaN(F) ||
      isNaN(B) ||
      isNaN(X) ||
      isNaN(Theta) ||
      isNaN(Ae)
    ) {
      alert("Invalid input. Please enter valid numbers.");
      return;
    }

    // Speed of light in meters per second
    const c = 3e8;

    // Calculate Range (R)
    const R = Math.pow(
      (Pt * G * Ae * Sigma) / (Math.pow(4 * Math.PI, 2) * Pmin),
      1 / 4
    );

    // Handle case where minimum detectable power is 0
    if (Pmin === 0) {
      setRange("Out of radar range");
      setMinResolution("");
      setAvgPowerTransmitted("");
      setEnergy("");
      setHitsPerScan("");
      setPulseWidth("");
      return;
    }

    // Calculate Minimum Resolution (Mr)
    const Mr = c / (2 * B);

    // Calculate Pulse Width (z)
    const z = 1 / B;

    // Calculate Average Power Transmitted (Pavg)
    const Tp = (2 * R) / c;
    const Pavg = (Pt * z) / Tp;

    // Calculate Energy (E)
    const E = Pt * z;

    // Calculate Hits Per Scan (n)
    const Tps = 6 * X * Tp;
    const n = Theta / Tps;

    // Set calculated values to state
    setRange(R.toFixed(2));
    setMinResolution(Mr.toFixed(2));
    setAvgPowerTransmitted(Pavg.toFixed(2));
    setEnergy(E.toFixed(2));
    setHitsPerScan(n.toFixed(2));
    setPulseWidth(z.toFixed(2));
  };

  // Helper function to get multiplier for power unit
  const getPowerMultiplier = (unit: string) => {
    switch (unit) {
      case "mW":
        return 1e-3;
      case "W":
        return 1;
      case "kW":
        return 1e3;
      case "MW":
        return 1e6;
      case "μW":
        return 1e-6;
      default:
        return 1;
    }
  };

  // Helper function to get multiplier for frequency unit
  const getFrequencyMultiplier = (unit: string) => {
    switch (unit) {
      case "MHz":
        return 1e6;
      case "kHz":
        return 1e3;
      case "Hz":
        return 1;
      case "GHz":
        return 1e9;
      default:
        return 1;
    }
  };

  // Helper function to get multiplier for area unit
  const getAreaMultiplier = (unit: string) => {
    switch (unit) {
      case "sq inches":
        return 0.00064516; // Convert from square inches to square meters
      case "sq feet":
        return 0.092903; // Convert from square feet to square meters
      case "sq cm":
        return 0.0001; // Convert from square centimeters to square meters
      case "sq meters":
        return 1;
      default:
        return 1;
    }
  };

  // Handler to restrict input to only numbers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const pattern = /^[0-9.]*$/; // Regex to allow only numbers and dot
    if (value === "" || pattern.test(value)) {
      switch (e.target.id) {
        case "pt":
          setPt(value);
          break;
        case "pmin":
          setPmin(value);
          break;
        case "g":
          setG(value);
          break;
        case "sigma":
          setSigma(value);
          break;
        case "f":
          setF(value);
          break;
        case "b":
          setB(value);
          break;
        case "x":
          setX(value);
          break;
        case "theta":
          setTheta(value);
          break;
        case "apertureArea":
          setApertureArea(value);
          break;
        default:
          break;
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black pt-8">
          Bistatic Radar Calculator
        </h1>
      </div>

      <div className="flex justify-center items-center h-screen pt-48">
        <div className="max-w-4xl p-6 bg-gray-100 rounded-lg">
          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              <div className="bg-white p-8 rounded-lg z-50">
                <p className="text-lg text-red-600">{modalMessage}</p>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-6">
            {/* Inputs for all parameters */}
            {/* Power Transmitted */}
            <div className="mb-4">
              <label
                htmlFor="pt"
                className="block text-gray-700 font-bold mb-2"
              >
                Power Transmitted
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="pt"
                  className="w-full px-3 py-2 border rounded-md mr-2"
                  value={pt}
                  onChange={handleInputChange}
                />
                <select
                  value={powerUnit}
                  onChange={(e) => setPowerUnit(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="MW">MW</option>
                  <option value="kW">kW</option>
                  <option value="W">W</option>
                </select>
              </div>
            </div>

            {/* Minimum Detectable Power */}
            <div className="mb-4">
              <label
                htmlFor="pmin"
                className="block text-gray-700 font-bold mb-2"
              >
                Minimum Detectable Power
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="pmin"
                  className="w-full px-3 py-2 border rounded-md mr-2"
                  value={pmin}
                  onChange={handleInputChange}
                />
                <select
                  value={pminUnit}
                  className="px-3 py-2 border rounded-md"
                  onChange={(e) => setPminUnit(e.target.value)}
                >
                  <option value="μW">μW</option>
                  <option value="mW">mW</option>
                  <option value="W">W</option>
                </select>
              </div>
            </div>

            {/* Other parameters */}
            {/* Gain */}
            <div className="mb-4">
              <label htmlFor="g" className="block text-gray-700 font-bold mb-2">
                Gain (linear) (G)
              </label>
              <input
                type="text"
                id="g"
                className="w-full px-3 py-2 border rounded-md"
                value={g}
                onChange={handleInputChange}
              />
            </div>

            {/* Radar Cross Section */}
            <div className="mb-4">
              <label
                htmlFor="sigma"
                className="block text-gray-700 font-bold mb-2"
              >
                Radar Cross Section
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="sigma"
                  className="w-full px-3 py-2 border rounded-md mr-2"
                  value={sigma}
                  onChange={handleInputChange}
                />
                <select
                  value={areaUnit}
                  onChange={(e) => setAreaUnit(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="sq meters">sq meters</option>
                  <option value="sq inches">sq inches</option>
                  <option value="sq feet">sq feet</option>
                  <option value="sq cm">sq cm</option>
                </select>
              </div>
            </div>

            {/* Operating Frequency */}
            <div className="mb-4">
              <label htmlFor="f" className="block text-gray-700 font-bold mb-2">
                Operating Frequency
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="f"
                  className="w-full px-3 py-2 border rounded-md mr-2"
                  value={f}
                  onChange={handleInputChange}
                />
                <select
                  value={frequencyUnit}
                  onChange={(e) => setFrequencyUnit(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="GHz">GHz</option>
                  <option value="MHz">MHz</option>
                  <option value="kHz">kHz</option>
                  <option value="Hz">Hz</option>
                </select>
              </div>
            </div>

            {/* Bandwidth of Radar */}
            <div className="mb-4">
              <label htmlFor="b" className="block text-gray-700 font-bold mb-2">
                Bandwidth of Radar
              </label>
              <input
                type="text"
                id="b"
                className="w-full px-3 py-2 border rounded-md"
                value={b}
                onChange={handleInputChange}
              />
            </div>

            {/* RPM */}
            <div className="mb-4">
              <label htmlFor="x" className="block text-gray-700 font-bold mb-2">
                RPM
              </label>
              <input
                type="text"
                id="x"
                className="w-full px-3 py-2 border rounded-md"
                value={x}
                onChange={handleInputChange}
              />
            </div>

            {/* Antenna Half Power Beamwidth */}
            <div className="mb-4">
              <label
                htmlFor="theta"
                className="block text-gray-700 font-bold mb-2"
              >
                Antenna Half Power Beamwidth
              </label>
              <input
                type="text"
                id="theta"
                className="w-full px-3 py-2 border rounded-md"
                value={theta}
                onChange={handleInputChange}
              />
            </div>

            {/* Aperture Area */}
            <div className="mb-4">
              <label
                htmlFor="apertureArea"
                className="block text-gray-700 font-bold mb-2"
              >
                Aperture Area
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="apertureArea"
                  className="w-full px-3 py-2 border rounded-md mr-2"
                  value={apertureArea}
                  onChange={handleInputChange}
                />
                <select
                  value={areaUnit}
                  onChange={(e) => setAreaUnit(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="sq inches">sq inches</option>
                  <option value="sq feet">sq feet</option>
                  <option value="sq cm">sq cm</option>
                  <option value="sq meters">sq meters</option>
                </select>
              </div>
            </div>
          </div>

          {/* Calculate button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={calculate}
          >
            Calculate
          </button>

          {/* Display calculated results */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Results:
            </label>
            <div>
              <label className="text-gray-700 font-bold">
                Range (meters):{" "}
              </label>
              <input
                type="text"
                value={range || ""}
                disabled
                className="border rounded-md px-3 py-2 mb-2"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">
                Minimum Resolution (meters):{" "}
              </label>
              <input
                type="text"
                value={minResolution || ""}
                disabled
                className="border rounded-md px-3 py-2 mb-2"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">
                Average Power Transmitted (Watt):{" "}
              </label>
              <input
                type="text"
                value={avgPowerTransmitted || ""}
                disabled
                className="border rounded-md px-3 py-2 mb-2"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">
                Energy (Joule):{" "}
              </label>
              <input
                type="text"
                value={energy || ""}
                disabled
                className="border rounded-md px-3 py-2 mb-2"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">
                Hits Per Scan :{" "}
              </label>
              <input
                type="text"
                value={hitsPerScan || ""}
                disabled
                className="border rounded-md px-3 py-2 mb-2"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">
                Pulse Width (seconds):{" "}
              </label>
              <input
                type="text"
                value={pulseWidth || ""}
                disabled
                className="border rounded-md px-3 py-2 mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadarCalculator;
