import { motion } from "framer-motion";
import ProductGrid from "../components/products/ProductGrid";

const Collections = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-amber-900 py-16 px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-amber-300 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
        >
          Handcrafted with Purity
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Silver Jewellery Collections
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-amber-200/70 mt-3 text-sm max-w-md mx-auto"
        >
          Explore our exclusive handcrafted Chandi designs that redefine elegance and purity.
        </motion.p>
      </div>

      {/* Products */}
      <ProductGrid />
    </div>
  );
};

export default Collections;
