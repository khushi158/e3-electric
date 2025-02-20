import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Img} from 'react-image'
import big from "../assets/image (6).svg";
import big1 from "../assets/1.svg";
import big2 from "../assets/2.svg";
import big3 from "../assets/3.svg";
import big4 from "../assets/4.svg";
const Colors = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const colorOptions = [
    { id: 1, src: big1, bigSrc: big1, color: "Blue", colorCode: "#3B82F6" },
    { id: 2, src: big2, bigSrc: big2, color: "Green", colorCode: "#10B981" },
    { id: 3, src: big3, bigSrc: big3, color: "Red", colorCode: "#EF4444" },
    { id: 4, src: big4, bigSrc: big4, color: "Black", colorCode: "#000000" },
  ];

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setSelectedImage((prev) => (prev + 1) % colorOptions.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoSlide, colorOptions.length]);

  const handleColorClick = (index) => {
    setSelectedImage(index);
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000);
  };

  const getBackgroundGradient = () => {
    const color = colorOptions[selectedImage].colorCode;
    return `linear-gradient(135deg, ${color}15, transparent 80%)`;
  };

  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-2 sm:py-2 min-h-screen"
      style={{ background: getBackgroundGradient() }}
    >
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Select Your Color
      </h1>

      <div className="w-full max-w-4xl mb-8 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative "
            style={{ aspectRatio: "9/2" }}
          >
            <Img
              src={colorOptions[selectedImage].src || "/placeholder.svg"}
              alt={`${colorOptions[selectedImage].color} Product`}
              layout="fill"
              objectFit="contain"
              priority
            />
            <motion.div
              className="absolute bottom-4 left-4 px-3 py-1 rounded-full backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-4 h-4 rounded-full border-2 border-white"
                  style={{ backgroundColor: colorOptions[selectedImage].colorCode }}
                />
                <span className="text-sm font-medium text-gray-800 dark:text-white">
                  {colorOptions[selectedImage].color}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {colorOptions.map((item, index) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center"
          >
            <motion.div
              className={`p-2 rounded-xl cursor-pointer transition-all duration-300 ${
                selectedImage === index
                  ? "ring-2 ring-indigo-500 bg-white dark:bg-gray-800 shadow-md"
                  : "ring-1 ring-gray-200 dark:ring-gray-700 bg-white/80 dark:bg-gray-800/80"
              }`}
              onClick={() => handleColorClick(index)}
              animate={{
                y: selectedImage === index ? -3 : 0,
                boxShadow: selectedImage === index ? "0px 5px 15px -3px rgba(0, 0, 0, 0.1)" : "none",
              }}
            >
              <div className="relative overflow-hidden rounded-lg w-24 h-24 sm:w-28 sm:h-28">
                <Img
                  src={item.src || "/placeholder.svg"}
                  alt={`Product ${item.color}`}
                  layout="fill"
                  objectFit="contain"
                  className="p-2"
                />
              </div>
            </motion.div>

            <motion.div
              className="mt-2 flex items-center gap-1"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <motion.span
                className="w-3 h-3 rounded-full border border-gray-200 dark:border-gray-600"
                style={{ backgroundColor: item.colorCode }}
                whileHover={{ scale: 1.2 }}
              />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {item.color}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Colors;
