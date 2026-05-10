import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import useGallery from "../hooks/useGallery";

export default function Gallery() {
  const { data: galleryItems, loading } = useGallery();
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-amber-900 py-14 px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-amber-300 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
        >
          Pure Silver Artistry
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Silver Creations
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : !galleryItems.length ? (
          <p className="text-center text-gray-400 py-20">No gallery items yet.</p>
        ) : (
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={item._id || i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                onClick={() => setSelected(item)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square bg-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.image?.url}
                  alt={item.image?.alt || item.title || `Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300" />
                </div>
                {item.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-medium">{item.title}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-3xl w-full"
            >
              <img
                src={selected.image?.url}
                alt={selected.image?.alt || selected.title || "Preview"}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              {selected.title && (
                <p className="text-white/70 text-center text-sm mt-4">{selected.title}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
