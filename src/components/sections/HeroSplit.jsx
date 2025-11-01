// src/components/HeroSplit.jsx
import React from "react";

const HeroSplit = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-8 md:px-20 py-12 bg-gray-50">
      {/* Left: Text */}
      <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Redefining Modern Luxury
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-lg">
          Crafted for those who appreciate elegance and precision — our products
          embody sophistication and timeless design.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      {/* Right: Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          // src="https://images.unsplash.com/photo-1606813909355-a09c9c3a9cc9?auto=format&fit=crop&w=900&q=80"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Product"
          className="w-full md:w-[80%] rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSplit;
