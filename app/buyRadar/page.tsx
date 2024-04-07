import React from "react";

function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-wrap justify-center gap-8 p-8 pb-96 ">
        <div className="bg-blue-200 hover:bg-blue-300 rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
          <h2 className="text-xl font-semibold mb-2">
            Physical Education Classroom Equipment
          </h2>
          <p>Speed Radar Gun (Q3)</p>
        </div>
        <div className="bg-green-200 hover:bg-green-300 rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
          <h2 className="text-xl font-semibold mb-2">
            Indicating And Recording Instruments
          </h2>
          <p>Level Transmitter Radar Type (Q3)</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
