import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full bg-white/30 backdrop-blur-xl rounded-3xl shadow-xl p-10 border border-white/40"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have a question or want to know more about our silver collection? We’d love to hear from you!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-700" />
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-700" />
              <p className="text-gray-700">contact@jewelaura.in</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-700" />
              <p className="text-gray-700">Kolkata, West Bengal, India</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-5">
              <a href="#" className="text-gray-700 hover:text-pink-500 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex-1 bg-white/50 rounded-2xl p-6 shadow-inner space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none bg-white/80"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none bg-white/80"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none bg-white/80"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-800 to-gray-600 text-white py-3 rounded-lg font-semibold tracking-wide hover:from-gray-700 hover:to-gray-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
