import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import useSiteSettings from "../../hooks/useSiteSettings";

const Newsletter = () => {
  const { data: settings } = useSiteSettings();
  const [submitted, setSubmitted] = useState(false);

  const title = settings?.subscribe_title || "Stay in the Loop";
  const subtitle =
    settings?.subscribe_subtitle ||
    "Get exclusive access to new silver collections, special offers, and styling tips — straight to your inbox.";

  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Decorative blur spots */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-700/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-amber-700/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Mail className="w-5 h-5 text-amber-400" />
          <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Newsletter
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-amber-600/20 border border-amber-600/40 rounded-2xl py-6 px-8 text-amber-300 font-medium"
          >
            Thank you for subscribing! We'll be in touch.
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:bg-white/15 transition text-sm"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all whitespace-nowrap"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        )}

        <p className="text-gray-600 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
