import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import useProducts from "../../hooks/useProducts";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProductGrid = ({
  params = {},
  eyebrow = "Handcrafted with Love",
  heading = "Our Silver Collection",
  subheading = "Every piece crafted from 92.5% pure silver by master artisans.",
  showViewAll = true,
  columns = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
}) => {
  const mergedParams = { status: "true", limit: 8, ...params };
  const { data: products, loading } = useProducts(mergedParams);

  if (loading) {
    return (
      <section className="py-20 bg-[#fdf8f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="h-3 w-16 bg-amber-200 rounded mx-auto mb-4 animate-pulse" />
            <div className="h-8 w-64 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
          <div className={`grid ${columns} gap-4 sm:gap-6`}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!products.length) return null;

  return (
    <section className="py-20 bg-[#fdf8f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <span className="gold-line" />
            <span className="text-amber-700 text-xs font-semibold tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
            <span className="gold-line" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            {heading}
          </motion.h2>
          {subheading && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 mt-3 text-sm max-w-md mx-auto"
            >
              {subheading}
            </motion.p>
          )}
        </div>

        <div className={`grid ${columns} gap-4 sm:gap-6`}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <NavLink
              to="/collections"
              className="inline-flex items-center gap-2 border-2 border-amber-700 text-amber-800 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
            >
              Browse All Collections <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
