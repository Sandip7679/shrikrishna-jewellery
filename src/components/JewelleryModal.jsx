import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JewelleryModal = ({ isOpen, onClose, jewellery }) => {
  const navigate = useNavigate();
  if (!jewellery) return null;

  const imageUrl = jewellery.image?.url || jewellery.image;
  const title = jewellery.name || jewellery.title;
  const description = jewellery.short_desc || jewellery.shortDescription;
  const slug = jewellery.slug;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-1/2 left-1/2 w-[92%] max-w-sm bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.88, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.88, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {/* Image */}
            {imageUrl && (
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition"
                >
                  <X size={16} />
                </button>
                <h2
                  className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h2>
              </div>
            )}

            {/* Content */}
            <div className="p-5">
              {!imageUrl && (
                <div className="flex items-start justify-between mb-4">
                  <h2 className="font-bold text-lg text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                    {title}
                  </h2>
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition ml-2 flex-shrink-0">
                    <X size={20} />
                  </button>
                </div>
              )}

              {description && (
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{description}</p>
              )}

              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition"
                >
                  Close
                </button>
                {slug && (
                  <button
                    onClick={() => { onClose(); navigate(`/collections/${slug}`); }}
                    className="flex-1 py-2.5 rounded-full bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default JewelleryModal;
