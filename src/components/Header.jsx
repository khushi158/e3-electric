import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    whatsappUpdates: false,
  });

  const WORKER_URL = "https://electricai.khushibanchhor21.workers.dev/"; // Replace with your actual worker URL

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for missing fields
    if (!formData.name || !formData.phone || !formData.pincode) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setError("");
        // Optionally, reset form fields here if you wish
        // setFormData({ name: "", phone: "", pincode: "", whatsappUpdates: false });
      } else {
        setError("Failed to send data. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  // Close modal and reset states
  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitted(false);
    setError("");
    setFormData({ name: "", phone: "", pincode: "", whatsappUpdates: false });
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8" />
            <span className="text-xl font-bold text-white">Electric Scooter</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-gray-300 transition">
              Home
            </a>
            <a href="#features" className="text-white hover:text-gray-300 transition">
              Features
            </a>
            <a href="#contact" className="text-white hover:text-gray-300 transition">
              Contact
            </a>
          </nav>

          {/* "I'm Interested" Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white px-5 py-2 rounded-md shadow hover:bg-gray-900 transition"
          >
            I'm Interested
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-gray-300 transition">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative transform transition-all duration-300">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            {submitted ? (
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Thank you for your interest!
                </h2>
                <p className="mb-4">We will get back to you soon.</p>
                <button
                  onClick={closeModal}
                  className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Interested in getting this Electric Scooter delivered to your home?
                </h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />

                  {/* Checkbox */}
                  <label className="flex items-center space-x-2 text-gray-600 mb-4">
                    <input
                      type="checkbox"
                      name="whatsappUpdates"
                      checked={formData.whatsappUpdates}
                      onChange={handleChange}
                      className="w-5 h-5 accent-black"
                    />
                    <span>Get updates on WhatsApp</span>
                  </label>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
                  >
                    I'm Interested
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
