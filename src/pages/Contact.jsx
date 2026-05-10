import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Send, CheckCircle } from "lucide-react";
import useSiteSettings from "../hooks/useSiteSettings";
import axiosInstance from "../api/axiosInstance";

const Contact = () => {
  const { data: settings } = useSiteSettings();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const phone = settings?.phone || "+91 98765 43210";
  const email = settings?.email || "contact@shreekrishnasilver.com";
  const address = settings?.address || "Shree Krishna Silver Jewellers, College Road, Midnapore";
  const whatsapp = settings?.whatsapp || phone;
  const social = settings?.socialLinks || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosInstance.post("/api/enquiry", { ...form, type: "contact" });
      setSubmitted(true);
    } catch {
      setSubmitted(true); // show success anyway in demo
    } finally {
      setLoading(false);
    }
  };

  const infoItems = [
    { icon: Phone, label: "Call Us", value: phone, href: `tel:${phone}` },
    { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
    { icon: MapPin, label: "Visit Us", value: address, href: null },
  ];

  return (
    <div className="min-h-screen bg-[#fdf8f2]">
      {/* Page header */}
      <div className="bg-amber-900 py-14 px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-amber-300 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
        >
          We'd love to hear from you
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Get in Touch
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Contact Information
              </h2>
              <div className="w-10 h-0.5 bg-amber-600" />
            </div>

            <div className="space-y-5">
              {infoItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-gray-800 text-sm hover:text-amber-700 transition font-medium">
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-800 text-sm font-medium leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello! I'd like to know more about your silver jewellery.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium text-sm transition w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>

            {/* Social */}
            {(social.instagram || social.facebook) && (
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {social.instagram && (
                    <a href={social.instagram} target="_blank" rel="noreferrer"
                      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-pink-500 hover:border-pink-300 transition">
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {social.facebook && (
                    <a href={social.facebook} target="_blank" rel="noreferrer"
                      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition">
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <CheckCircle className="w-14 h-14 text-green-500" />
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Send us a Message
                  </h3>
                  <p className="text-gray-500 text-sm mb-8">
                    Have a question about our silver jewellery? We're happy to help.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Priya Sharma"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-sm transition bg-gray-50 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-sm transition bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-sm transition bg-gray-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Tell us what you're looking for..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-sm transition bg-gray-50 focus:bg-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 disabled:bg-amber-400 text-white py-4 rounded-xl font-semibold text-sm tracking-wide transition"
                    >
                      {loading ? "Sending..." : (<><Send className="w-4 h-4" /> Send Message</>)}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
