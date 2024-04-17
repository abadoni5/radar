import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 ">
        <h1 className="text-4xl pt-8 font-bold mb-8 text-center">Radars</h1>
        <div className="h-screen flex justify-center items-center flex-col">
          <div className="pb-96 flex justify-between w-2/3">
            <Link
              href="/overview"
              className="w-1/3 p-6 bg-blue-200 rounded-lg hover:bg-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-4 flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold mb-2 text-center">
                Learn Radar
              </h2>
              <p>Discover how radar works and its applications.</p>
            </Link>
            <Link
              href="/buyRadar"
              className="w-1/3 p-6 bg-green-200 rounded-lg hover:bg-green-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 mx-4 flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold mb-2 text-center">
                Radar Parameters
              </h2>
              <p>Explore configurations of various real life radars.</p>
            </Link>
            <Link
              href="/calculator"
              className="w-1/3 p-6 bg-yellow-200 rounded-lg hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 ml-4 flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold mb-2 text-center">
                Radar Calculator
              </h2>
              <p>Experiment with our radar calculator tool.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
