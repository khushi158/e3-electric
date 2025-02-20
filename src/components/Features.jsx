import React from 'react';
import { Zap, Shield, Smartphone, CheckCircle } from 'lucide-react';
import herobike from '../assets/image (13).svg';
import { motion, useInView } from 'framer-motion';

// Optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.4
    }
  },
  hover: {
    y: -3,
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

const imageVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 60,
      duration: 0.8
    }
  },
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Compact feature card with smaller padding and font sizes
const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    variants={cardVariants}
    whileHover="hover"
    className="group backdrop-blur-sm p-3 rounded-lg shadow hover:shadow-md transition-all duration-300 flex items-start gap-3 border border-gray-100 hover:border-indigo-100 hover:bg-white"
  >
    <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-md shadow-sm">
      {React.cloneElement(icon, { className: "text-white w-4 h-4" })}
    </div>
    <div>
      <h3 className="text-sm font-bold mb-1 text-gray-800 group-hover:text-indigo-700 transition-colors">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 text-xs leading-tight group-hover:text-gray-800">
          {description}
        </p>
      )}
    </div>
  </motion.div>
);

const Features = () => {
  // Consolidated feature list with concise descriptions
  const features = [
    { icon: <Zap />, title: 'Lightning Fast', description: 'Blazing fast performance' },
    { icon: <Shield />, title: 'Secure', description: 'Industry-leading security' },
    { icon: <Smartphone />, title: 'Mobile Friendly', description: 'Seamless on all devices' },
    { icon: <CheckCircle />, title: 'Aluminium Frame', description: 'Lightweight & durable' },
    { icon: <CheckCircle />, title: 'Lithium Battery', description: 'Long-lasting power' },
    { icon: <CheckCircle />, title: 'Self-Balanced', description: 'Effortless riding' },
  ];

  return (
    <section id="features" className="h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-6 max-h-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 relative inline-block">
            Premium Features
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-600 origin-left"
            />
          </h2>
          <p className="text-lg text-gray-600 mt-4">Innovative technology meets elegant design</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Image Section - Now smaller and optimized */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate="float"
            className="relative hidden md:block"
          >
            <div className="absolute -inset-4 bg-indigo-100/50 rounded-xl -rotate-3" />
            <img 
              src={herobike} 
              alt="Premium Features"
              className="relative z-10 rounded-xl w-full max-h-[300px] object-contain shadow-lg"
            />
          </motion.div>

          {/* Features Grid - Now more compact */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;