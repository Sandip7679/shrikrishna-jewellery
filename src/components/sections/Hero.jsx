import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, Award } from "lucide-react";
import useSiteSettings from "../../hooks/useSiteSettings";
import bannerFallback from "../../assets/images/banner.jpg";

const badges = [
  { icon: Shield, label: "92.5% Pure Silver" },
  { icon: Star, label: "Hallmarked" },
  { icon: Award, label: "Handcrafted" },
];

const Hero = () => {
  const { data: settings } = useSiteSettings();

  const bannerImg = settings?.bannerImg?.url || bannerFallback;
  const title = settings?.banner_title || "Where Tradition Meets Timeless Beauty";
  const subtitle =
    settings?.banner_subtitle ||
    "Discover pure handcrafted Chandi jewellery — necklaces, bangles, rings and more — inspired by India's timeless artistry.";

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#fdf8f2]">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          key={bannerImg}
          src={bannerImg}
          alt="Silver jewellery"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        {/* Gradient overlay — darker on right for text contrast on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="gold-line" />
            <span className="text-amber-300 text-sm font-medium tracking-[0.2em] uppercase">
              Pure Silver Jewellery
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-200 text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <NavLink
              to="/collections"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-amber-900/30 active:scale-95"
            >
              Explore Collections <ArrowRight className="w-4 h-4" />
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/60 text-white hover:bg-white/10 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all"
            >
              Enquire Now
            </NavLink>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-amber-200 text-xs font-medium">
                <Icon className="w-4 h-4 text-amber-400" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
