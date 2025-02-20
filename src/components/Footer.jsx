import { Facebook, Twitter, Instagram, ChevronUp, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import p from '../assets/image (12).svg';
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const socialVariants = {
    hover: { scale: 1.2, rotate: [0, -10, 10, 0] },
    tap: { scale: 0.9 }
  };

  useEffect(() => {
    const checkScrollTop = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setSubscriptionStatus('invalid');
      return;
    }
    
    setIsSubmitting(true);
    setSubscriptionStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscriptionStatus('success');
      setEmail("");
    } catch (error) {
      setSubscriptionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const SubscriptionMessage = () => {
    if (!subscriptionStatus) return null;
    
    const messages = {
      success: '🎉 Thank you for subscribing!',
      error: '❌ Subscription failed. Please try again.',
      invalid: '⚠️ Please enter a valid email address'
    };

    return (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-sm mt-2 text-center ${
          subscriptionStatus === 'success' ? 'text-green-400' :
          subscriptionStatus === 'error' ? 'text-red-400' : 'text-yellow-400'
        }`}
      >
        {messages[subscriptionStatus]}
      </motion.p>
    );
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gray-900 text-white py-12 overflow-hidden relative"
      style={{ y }}
    >
      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 shadow-lg z-50 backdrop-blur-sm hover:bg-indigo-700 transition-colors"
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 300 }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </motion.button>

      <div className="container mx-auto px-6 lg:px-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start"
        >
          {/* Image Section */}
         

          {/* Links Sections */}
          {['About', 'Resources', 'Legals'].map((section, index) => (
            <motion.div key={section} variants={itemVariants} className="col-span-1">
              <motion.h3 
                className="text-lg font-semibold mb-4"
                whileHover={{ x: 5 }}
              >
                {section}
              </motion.h3>
              <ul className="text-gray-400 space-y-2">
                {getSectionItems(section).map((item, idx) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="hover:text-white transition-colors duration-300 flex items-center"
                      aria-label={`Navigate to ${item}`}
                    >
                      <span className={`w-2 h-2 ${getBulletColor(index)} mr-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          className="mt-12 border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="max-w-xl mx-auto">
            <motion.h3 
              className="text-2xl font-bold text-center mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Stay Updated
            </motion.h3>
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubscriptionStatus(null);
                }}
                placeholder="Enter your email"
                className="w-full p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                whileFocus={{ scale: 1.02 }}
                aria-label="Email input for newsletter subscription"
                required
              />
              <motion.button
                type="submit"
                className="px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                aria-label="Subscribe to newsletter"
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                ) : (
                  <>
                    <Mail size={20} />
                    Subscribe
                  </>
                )}
              </motion.button>
            </form>
            <SubscriptionMessage />
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <motion.p 
              className="text-gray-400 text-sm"
              whileHover={{ scale: 1.02 }}
            >
              &copy; {new Date().getFullYear()} Electric. All rights reserved.
            </motion.p>
            <div className="flex gap-4">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                  aria-label={`View ${item} policy`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <motion.div 
            className="flex space-x-4 mt-4 md:mt-0"
            variants={containerVariants}
          >
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Instagram, label: 'Instagram' }
            ].map(({ Icon, label }, index) => (
              <motion.a 
                key={label}
                href={`https://www.${label.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white relative p-2 group"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label={`Visit our ${label} page`}
              >
                <Icon size={20} />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white bg-gray-800 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </span>
                <motion.span
                  className="absolute inset-0 bg-current rounded-full opacity-0 hover:opacity-10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.footer>
  );
};

// Helper functions
const getSectionItems = (section) => {
  switch (section) {
    case 'About':
      return ['Company', 'Teams', 'Profile', 'Careers'];
    case 'Resources':
      return ['Contact', 'Application', 'FQA Features'];
    case 'Legals':
      return ['Copyright', 'Privacy Policy', 'Terms of Service'];
    default:
      return [];
  }
};

const getBulletColor = (index) => {
  const colors = ['bg-indigo-500', 'bg-purple-500', 'bg-pink-500'];
  return colors[index % colors.length];
};

export default Footer;