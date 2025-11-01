import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/30 backdrop-blur-xl p-10 rounded-3xl shadow-lg border border-white/50 max-w-md"
      >
        <motion.h1
          className="text-7xl font-bold text-gray-800 mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          404
        </motion.h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-500 transition"
        >
          Back to Home
        </Link>
      </motion.div>

      {/* Floating silver ornament */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-gray-200 to-white opacity-30 blur-3xl -z-10"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default NotFound;
