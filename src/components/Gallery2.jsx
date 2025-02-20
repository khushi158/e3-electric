import React from 'react';
import { motion } from 'framer-motion';
import scooter from '../assets/image (2).svg';
import build from '../assets/image (1).svg';
import parts from '../assets/image (3).svg';

const Gallery2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  const imageHover = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-4 max-h-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
            Product Gallery
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-600 origin-left"
            />
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore our premium electric scooter collection
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto"
        >
          {/* Main Feature Image */}
          <motion.div 
            variants={itemVariants} 
            className="col-span-2 row-span-2 relative group"
          >
            <motion.div
              whileHover="hover"
              className="bg-white rounded-lg shadow-md overflow-hidden h-full"
            >
              <motion.img
                variants={imageHover}
                src={scooter}
                alt="Premium Electric Scooter"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-white font-semibold text-lg">Premium Model X1</h3>
                <p className="text-gray-200 text-sm">Our flagship electric scooter</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Secondary Images */}
          <motion.div variants={itemVariants} className="relative group">
            <motion.div
              whileHover="hover"
              className="bg-white rounded-lg shadow-md overflow-hidden h-full"
            >
              <motion.img
                variants={imageHover}
                src={build}
                alt="Build Quality"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <h3 className="text-white font-medium text-sm">Premium Build</h3>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative group">
            <motion.div
              whileHover="hover"
              className="bg-white rounded-lg shadow-md overflow-hidden h-full"
            >
              <motion.img
                variants={imageHover}
                src={parts}
                alt="Quality Components"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <h3 className="text-white font-medium text-sm">Premium Parts</h3>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mt-4"
        >
          {['Eco-friendly', 'Fast Charging', 'Long Range', 'Smart Controls'].map((feature) => (
            <span key={feature} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery2;