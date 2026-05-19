import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowUpDown, Package } from "lucide-react";
import useCollection from "../hooks/useCollection";
import useProducts from "../hooks/useProducts";
import useCollections from "../hooks/useCollections";
import ProductCard from "../components/products/ProductCard";

const CollectionDetail = () => {
  const { slug } = useParams();
  const [sort, setSort] = useState("newest");

  const { data: collection, loading: collectionLoading } = useCollection(slug);
  const { data: products, loading: productsLoading, pagination } = useProducts({
    collectionSlug: slug,
    sort,
    status: "true",
    limit: 24,
  });
  const { data: allCollections } = useCollections();
  const otherCollections = allCollections.filter((c) => c.slug !== slug && c.isFeatured).slice(0, 4);

  if (collectionLoading) {
    return (
      <div className="min-h-screen bg-[#fdf8f2]">
        <div className="h-64 bg-gray-200 animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#fdf8f2]">
        <Package className="w-16 h-16 text-gray-300" />
        <p className="text-gray-400 text-lg">Collection not found.</p>
        <NavLink to="/collections" className="text-amber-700 text-sm font-semibold hover:underline">
          ← Browse All Collections
        </NavLink>
      </div>
    );
  }

  const totalCount = pagination?.total ?? products.length;

  return (
    <div className="min-h-screen bg-[#fdf8f2]">
      {/* Hero */}
      <div className="relative bg-amber-900 py-20 sm:py-28 px-4 overflow-hidden">
        {collection.image?.url && (
          <img
            src={collection.image.url}
            alt={collection.name}
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/60 to-amber-900/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <NavLink
            to="/collections"
            className="inline-flex items-center gap-1.5 text-amber-300/80 text-xs font-medium mb-6 hover:text-white transition"
          >
            <ChevronLeft className="w-4 h-4" /> All Collections
          </NavLink>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="gold-line" />
            <span className="text-amber-300 text-xs font-semibold tracking-[0.2em] uppercase">
              Silver Jewellery
            </span>
            <span className="gold-line" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {collection.name}
          </motion.h1>
          {collection.short_desc && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-amber-200/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            >
              {collection.short_desc}
            </motion.p>
          )}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-amber-400/60 text-xs mt-4 font-medium tracking-wide"
          >
            {totalCount} {totalCount === 1 ? "piece" : "pieces"} available
          </motion.p>
        </div>
      </div>

      {/* Sort / filter bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">{totalCount}</span> products
          </p>
          <div className="flex items-center gap-2 text-gray-500">
            <ArrowUpDown className="w-4 h-4" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm text-gray-700 border-0 outline-none bg-transparent cursor-pointer font-medium"
            >
              <option value="newest">Newest First</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {productsLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-24">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-2">No products in this collection yet.</p>
            <p className="text-gray-300 text-sm mb-6">Check back soon — new pieces are added regularly.</p>
            <NavLink
              to="/collections"
              className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition"
            >
              Browse Other Collections
            </NavLink>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {products.map((product, i) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Description (if long form description exists) */}
      {collection.description && (
        <div className="bg-white py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div
              className="text-gray-600 text-sm leading-relaxed prose max-w-none"
              dangerouslySetInnerHTML={{ __html: collection.description }}
            />
          </div>
        </div>
      )}

      {/* Explore other collections */}
      {otherCollections.length > 0 && (
        <section className="bg-[#fdf8f2] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <h3
                className="text-xl font-bold text-gray-800"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Explore More Collections
              </h3>
              <NavLink
                to="/collections"
                className="text-amber-700 text-sm font-semibold hover:underline"
              >
                View All →
              </NavLink>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {otherCollections.map((col, i) => (
                <motion.div
                  key={col._id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={`/collections/${col.slug}`}
                    className="group block relative aspect-[3/2] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    {col.image?.url ? (
                      <img
                        src={col.image.url}
                        alt={col.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-amber-50 flex items-center justify-center">
                        <span className="text-amber-300 text-3xl">✦</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                    <p
                      className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm leading-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {col.name}
                    </p>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CollectionDetail;
