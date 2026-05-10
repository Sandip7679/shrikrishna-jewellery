import { motion } from "framer-motion";
import { Shield, Award, Users, Sparkles } from "lucide-react";
import useAbout from "../hooks/useAbout";
import useSiteSettings from "../hooks/useSiteSettings";

const stats = [
  { icon: Shield, value: "92.5%", label: "Pure Silver" },
  { icon: Award, value: "100%", label: "Hallmarked" },
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: Sparkles, value: "Hand", label: "Crafted" },
];

const About = () => {
  const { data: about, loading: aboutLoading } = useAbout();
  const { data: settings, loading: settingsLoading } = useSiteSettings();

  if (aboutLoading || settingsLoading) {
    return (
      <div>
        <div className="h-64 bg-gray-200 animate-pulse" />
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
          <div className="h-80 bg-gray-200 rounded-2xl animate-pulse" />
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" style={{ width: `${80 - i * 10}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const siteName = settings?.siteName || "Shree Krishna Silver";
  const bannerImage = about?.bannerImage?.url || settings?.bannerImg?.url;
  const title = about?.title || `About ${siteName}`;
  const description = about?.description;
  const mission = about?.mission;
  const vision = about?.vision;
  const storyImage = about?.gallery?.[0]?.url;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-amber-900 py-24 px-4 text-center overflow-hidden">
        {bannerImage && (
          <img
            src={bannerImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        )}
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-300 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-amber-200/80 mt-4 text-sm sm:text-base max-w-lg mx-auto"
          >
            {settings?.site_desc}
          </motion.p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-amber-800">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="w-5 h-5 text-amber-300 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                {value}
              </p>
              <p className="text-amber-300/80 text-xs tracking-wide mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story section */}
      {(description || storyImage) && (
        <section className="py-20 bg-[#fdf8f2]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
            {storyImage && (
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  <img
                    src={storyImage}
                    alt="Our story"
                    className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-700 rounded-2xl -z-10" />
                </div>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="gold-line" />
                <span className="text-amber-700 text-xs font-semibold tracking-[0.2em] uppercase">
                  Who We Are
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Story
              </h2>
              <div
                className="text-gray-600 leading-relaxed prose max-w-none text-sm sm:text-base"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Mission + Vision */}
      {(mission || vision) && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
            {mission && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-amber-50 border border-amber-100 rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center mb-5">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Our Mission
                </h3>
                <div
                  className="text-gray-600 text-sm leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: mission }}
                />
              </motion.div>
            )}
            {vision && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-900 rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center mb-5">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Our Vision
                </h3>
                <div
                  className="text-gray-400 text-sm leading-relaxed prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: vision }}
                />
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Gallery grid */}
      {about?.gallery?.length > 1 && (
        <section className="py-16 bg-[#fdf8f2]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="gold-line" />
                <span className="text-amber-700 text-xs font-semibold tracking-[0.2em] uppercase">
                  Our Work
                </span>
                <span className="gold-line" />
              </div>
              <h2 className="section-title">Glimpses of Our Craft</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {about.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="overflow-hidden rounded-xl aspect-square"
                >
                  <img
                    src={img.url}
                    alt={img.alt || `Craft ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default About;
