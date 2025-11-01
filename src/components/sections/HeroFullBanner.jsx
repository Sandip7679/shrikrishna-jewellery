// src/components/HeroFullBanner.jsx
import React from "react";

const HeroFullBanner = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Discover Timeless Luxury
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Experience elegance redefined with our exclusive handcrafted collection.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition">
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default HeroFullBanner;
