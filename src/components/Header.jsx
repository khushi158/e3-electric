import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

    if (!formData.name || !formData.phone || !formData.pincode) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Successfully submitted!");
        setIsModalOpen(false);
        setFormData({ name: "", phone: "", pincode: "", whatsappUpdates: false });
      } else {
        alert("Failed to send data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          <img src={logo} alt="Logo" className="h-8" />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-gray-600">
          <a href="#products" className="hover:text-black transition">PRODUCTS</a>
          <a href="#gallery" className="hover:text-black transition">GALLERY</a>
          <a href="#contact" className="hover:text-black transition">CONTACT</a>
        </nav>

        {/* "I'm Interested" Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-5 py-2 rounded-md shadow hover:bg-gray-900 transition"
        >
          I'm Interested
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 hover:text-black transition">
          <Menu size={24} />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Are you interested to get home this electric Scooter?
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mb-3"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mb-3"
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md mb-3"
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
                className="w-full bg-gray-700 text-white py-3 rounded-md hover:bg-gray-800 transition"
              >
                I'm Interested
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
