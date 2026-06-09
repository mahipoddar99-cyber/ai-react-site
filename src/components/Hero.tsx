import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 text-white flex items-center">
      <div className="container-max w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sustainable Living Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-50">
            Discover eco-friendly products that help reduce waste and protect our planet. Join thousands making a difference.
          </p>
          <div className="flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Shop Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;