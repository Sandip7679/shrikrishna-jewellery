import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Sparkles } from "lucide-react";
import axiosInstance from "../api/axiosInstance";

const BUDGET_OPTIONS = [
  "Under ₹500",
  "₹500 – ₹1,000",
  "₹1,000 – ₹2,000",
  "₹2,000 – ₹5,000",
  "Above ₹5,000",
];

const OCCASION_OPTIONS = [
  "Wedding",
  "Engagement",
  "Birthday",
  "Anniversary",
  "Festival / Pooja",
  "Daily Wear",
  "Gift",
  "Other",
];

const empty = {
  name: "",
  phone: "",
  email: "",
  occasion: "",
  budget: "",
  description: "",
  referenceLink: "",
};

const CustomOrder = () => {
  const [form, setForm] = useState(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosInstance.post("/api/enquiry", { ...form, type: "custom_order" });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none text-sm transition bg-gray-50 focus:bg-white";
  const labelClass =
    "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2";

  return (
    <div className="min-h-screen bg-[#fdf8f2]">
      {/* Page header */}
      <div className="bg-amber-900 py-14 px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-amber-300 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
        >
          Made just for you
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Custom Order Request
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-amber-200/70 text-sm mt-3 max-w-md mx-auto"
        >
          Describe your dream silver jewellery and we'll craft it for you.
        </motion.p>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <CheckCircle className="w-14 h-14 text-green-500" />
              <h3
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Request Received!
              </h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Thank you! We'll review your custom order request and get back
                to you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Tell us about your design
                  </h3>
                  <p className="text-gray-400 text-xs">
                    Fill in as much detail as you can — the more we know, the better we can craft it.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Your Name *</label>
                    <input
                      name="name"
                      required
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={handle}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone *</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handle}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handle}
                    className={inputClass}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Occasion</label>
                    <select
                      name="occasion"
                      value={form.occasion}
                      onChange={handle}
                      className={inputClass}
                    >
                      <option value="">Select occasion</option>
                      {OCCASION_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Budget Range</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handle}
                      className={inputClass}
                    >
                      <option value="">Select budget</option>
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Design Description *</label>
                  <textarea
                    name="description"
                    required
                    rows={5}
                    placeholder="Describe what you have in mind — type of jewellery (ring, necklace, bangle...), style, any specific design elements, stone preferences, etc."
                    value={form.description}
                    onChange={handle}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className={labelClass}>Reference Image Link (optional)</label>
                  <input
                    name="referenceLink"
                    type="url"
                    placeholder="https://pinterest.com/pin/... or any image URL"
                    value={form.referenceLink}
                    onChange={handle}
                    className={inputClass}
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Paste a link to any image that inspires your design.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 disabled:bg-amber-400 text-white py-4 rounded-xl font-semibold text-sm tracking-wide transition"
                >
                  {loading ? "Sending..." : <><Send className="w-4 h-4" /> Submit Request</>}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;
