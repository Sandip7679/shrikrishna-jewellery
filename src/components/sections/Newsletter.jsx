import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stay Updated with JewelAura
        </h2>
        <p className="text-gray-600 mb-8">
          Get exclusive access to new silver collections, special offers, and
          styling tips — straight to your inbox.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
