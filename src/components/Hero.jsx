import React, { useEffect } from "react";
import { motion, useTransform, useMotionValue, animate } from "framer-motion";
import { Check, BatteryCharging, Zap } from "lucide-react";
import HeroBike from "../assets/HeroBike.svg";

const Hero = () => {
  // Data Arrays
  const stats = [
    { id: 1, label: "0-60 kph", value: 4, unit: "Sec", icon: Zap },
    { id: 2, label: "Full Charge", value: 80, unit: "KM", icon: BatteryCharging },
    { id: 3, label: "Charge Time", value: 4, unit: "Hrs", icon: Check },
    { id: 4, label: "Weight", value: 22, unit: "kg", icon: Check }
  ];

  const features = [
    "Smart LED Display",
    "GPS Tracking",
    "Mobile App Control",
    "Water Resistant",
    "Anti-Theft System",
    "Regenerative Braking"
  ];

  const techSpecs = [
    { label: "Motor Power", value: "500W Brushless" },
    { label: "Battery Type", value: "Li-ion 48V" },
    { label: "Max Load", value: "120 kg" },
    { label: "IP Rating", value: "IP67 Waterproof" }
  ];

  // Animated Number Component
  const AnimatedNumber = ({ value }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
      animate(count, value, { duration: 2 });
    }, [value, count]);

    return <motion.span>{rounded}</motion.span>;
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-16 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-10">
            {/* Headline */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold">
                Revolutionize Your<br />Urban Commute
              </h1>
              <p className="text-xl text-gray-600 mt-6 max-w-2xl leading-relaxed">
                Experience the future of eco-friendly transportation with our smart electric scooter. 
                Designed for performance, comfort, and style in modern cities.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <motion.div 
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <stat.icon className="w-8 h-8 text-indigo-600 mb-3" />
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    <AnimatedNumber value={stat.value} />
                    <span className="text-base font-medium ml-1">{stat.unit}</span>
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Pre-Order Now</span>
              </motion.button>
              <button className="px-8 py-4 bg-white text-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200">
                Compare Models
              </button>
            </motion.div>
          </div>

          {/* Right Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img src={HeroBike} alt="Electric Scooter" className="w-full transition-transform duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Floating Elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-100 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
