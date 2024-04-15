import React from "react";
import RadarComponent from "../components/buyRadarTab";
import QuickLinksNavbar from "../components/quicklinks";

const Page = () => {
  return (
    <>
      <QuickLinksNavbar />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Radar Parameters</h2>
        <p className="mb-6">
          The parameter values for radars are generally chosen to optimize their
          performance for the specific application and environment they are
          designed for. Factors like frequency, bandwidth, power, antenna
          characteristics, and scanning mechanisms are carefully selected to
          balance the trade-offs between range, resolution, sensitivity, and
          other operational requirements.
        </p>
        <p className="mb-6">
          The radar parameter values presented here are for general reference
          and should not be considered definitive or exhaustive for any specific
          radar system. Use these as a starting point.
        </p>
      </div>
      <RadarComponent />
    </>
  );
};

export default Page;
