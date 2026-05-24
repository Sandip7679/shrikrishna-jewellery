import { Link } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useWishlist } from "../contexts/WishlistContext";
import ProductCard from "../components/products/ProductCard";

const Wishlist = () => {
  const { items, clear } = useWishlist();

  return (
    <div className="min-h-screen bg-[#fdf8f2]">
      {/* Header */}
      <div className="bg-amber-900 py-12 px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-amber-300 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
        >
          Saved Items
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          My Wishlist
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-5">
            <Heart className="w-16 h-16 text-gray-200" />
            <p className="text-gray-400 text-lg font-medium">Your wishlist is empty</p>
            <p className="text-gray-400 text-sm">
              Tap the heart icon on any product to save it here.
            </p>
            <Link
              to="/collections"
              className="mt-2 bg-amber-700 hover:bg-amber-800 text-white px-7 py-3 rounded-full text-sm font-semibold transition"
            >
              Browse Collections
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-500 text-sm">
                {items.length} {items.length === 1 ? "item" : "items"} saved
              </p>
              <button
                onClick={clear}
                className="flex items-center gap-1.5 text-sm text-red-400 hover:text-red-600 transition"
              >
                <Trash2 className="w-4 h-4" /> Clear all
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {items.map((product, i) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 text-sm mb-4">
                Bring this list when you visit us — we'll help you find the perfect piece.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-7 py-3 rounded-full text-sm font-semibold transition"
              >
                Contact Us
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
