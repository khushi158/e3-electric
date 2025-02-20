import React from "react";

const Newsletter = () => {
  return (
    <section className="py-10 bg-white text-center">
      <div className="max-w-lg mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Subscribe To Newsletter
        </h2>
        <p className="text-gray-600 mt-2">
          Subscribe to our newsletter to get amazing offers in future.
        </p>

        {/* Input & Button */}
        <div className="mt-6 flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email."
            className="px-4 py-2 w-full max-w-xs border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="px-4 py-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-700">
            Get start
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
