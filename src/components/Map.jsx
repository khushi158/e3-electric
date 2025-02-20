import React from "react";
import mapImage from "../assets/Text.svg"; // Ensure the correct path

const Map = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Heading with responsive text size and padding */}
      <h1 className="text-[28px] md:text-[40px] font-semibold text-black leading-tight text-center mt-8 md:mt-16 px-4 md:px-0">
        Make your commute <br /> the best part of your day.
      </h1>

      {/* Image Container with responsive height */}
      <div
        className="relative w-full min-h-[400px] md:h-screen bg-cover bg-center mt-4 md:mt-6"
        style={{ backgroundImage: `url(${mapImage})` }}
      >
        {/* Button with responsive positioning and padding */}
        <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 w-full md:w-auto px-4 md:px-0">
          <button className="w-full md:w-auto bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition">
            View stores
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;