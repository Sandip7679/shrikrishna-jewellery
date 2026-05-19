import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useCollections from "../hooks/useCollections";

const Collections = () => {
  const { data: collections, loading } = useCollections();

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="relative bg-amber-900 py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, #f0c96e 0%, transparent 50%), radial-gradient(circle at 70% 50%, #c9922a 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="gold-line" />
            <span className="text-amber-300 text-xs font-semibold tracking-[0.2em] uppercase">
              Handcrafted with Purity
            </span>
            <span className="gold-line" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Silver Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-amber-200/70 text-sm sm:text-base max-w-md mx-auto"
          >
            Choose a collection and explore our exclusive handcrafted Chandi designs.
          </motion.p>
        </div>
      </div>

      {/* Collections grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : collections.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg">No collections available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {collections.map((collection, i) => (
              <motion.div
                key={collection._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <NavLink
                  to={`/collections/${collection.slug}`}
                  className="group block relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-400"
                >
                  {collection.image?.url ? (
                    <img
                      src={collection.image.url}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-amber-50 flex items-center justify-center">
                      <span className="text-amber-300 text-5xl">✦</span>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  {/* Featured badge */}
                  {collection.isFeatured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-amber-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3
                      className="text-white font-bold text-lg sm:text-xl leading-tight mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {collection.name}
                    </h3>
                    {collection.short_desc && (
                      <p className="text-white/65 text-xs mb-3 line-clamp-2 leading-relaxed">
                        {collection.short_desc}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-semibold group-hover:gap-3 transition-all duration-300">
                      Browse Collection <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </NavLink>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;
