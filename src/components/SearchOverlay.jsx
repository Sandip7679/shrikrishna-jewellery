import { useEffect, useRef, useState } from "react";
import { Search, X, Package, SlidersHorizontal, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useProducts from "../hooks/useProducts";
import useCollections from "../hooks/useCollections";

function useDebounce(value, delay = 350) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const inputRef = useRef(null);

  const debouncedQuery = useDebounce(query);
  const debouncedMin = useDebounce(minPrice, 500);
  const debouncedMax = useDebounce(maxPrice, 500);

  const { data: collections } = useCollections();

  const hasQuery = debouncedQuery.trim().length >= 2;
  const hasFilters = selectedCollection || debouncedMin || debouncedMax;
  const canSearch = hasQuery || hasFilters;

  const activeFilterCount = [selectedCollection, debouncedMin, debouncedMax].filter(Boolean).length;

  const { data: products, loading } = useProducts(
    canSearch
      ? {
          ...(debouncedQuery.trim() ? { search: debouncedQuery.trim() } : {}),
          ...(selectedCollection ? { collection: selectedCollection } : {}),
          ...(debouncedMin ? { minPrice: debouncedMin } : {}),
          ...(debouncedMax ? { maxPrice: debouncedMax } : {}),
          sort,
          limit: 12,
          status: "true",
        }
      : {}
  );

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const clearAll = () => {
    setQuery("");
    setSelectedCollection("");
    setMinPrice("");
    setMaxPrice("");
    setSort("newest");
  };

  return (
    <div className="fixed inset-0 z-[999] flex flex-col" onClick={onClose}>
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative bg-white w-full shadow-2xl max-h-[90vh] flex flex-col"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Search input row ── */}
        <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-4 flex items-center gap-3 border-b border-gray-100">
          <Search className="w-5 h-5 text-amber-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search rings, necklaces, earrings..."
            className="flex-1 text-base text-gray-800 outline-none placeholder-gray-400 bg-transparent"
          />
          {(query || activeFilterCount > 0) && (
            <button
              onClick={clearAll}
              className="text-xs text-gray-400 hover:text-amber-700 transition font-medium whitespace-nowrap"
            >
              Clear all
            </button>
          )}
          <button
            onClick={() => setShowFilters((v) => !v)}
            className={`relative flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border transition-colors ${
              showFilters || activeFilterCount > 0
                ? "border-amber-400 text-amber-700 bg-amber-50"
                : "border-gray-200 text-gray-500 hover:border-gray-300"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
            {activeFilterCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-amber-600 text-white text-[10px] font-bold flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""}`}
            />
          </button>
          <button
            onClick={onClose}
            className="ml-1 text-gray-400 hover:text-gray-700 transition p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── Filter panel ── */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-b border-gray-100"
            >
              <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-4 flex flex-col gap-4">

                {/* Collection chips */}
                {collections.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                      Collection
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedCollection("")}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                          !selectedCollection
                            ? "bg-amber-700 border-amber-700 text-white"
                            : "border-gray-200 text-gray-600 hover:border-amber-300 hover:text-amber-700"
                        }`}
                      >
                        All
                      </button>
                      {collections.map((col) => (
                        <button
                          key={col._id}
                          onClick={() =>
                            setSelectedCollection(
                              selectedCollection === col._id ? "" : col._id
                            )
                          }
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                            selectedCollection === col._id
                              ? "bg-amber-700 border-amber-700 text-white"
                              : "border-gray-200 text-gray-600 hover:border-amber-300 hover:text-amber-700"
                          }`}
                        >
                          {col.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price range + Sort */}
                <div className="flex flex-wrap items-end gap-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                      Price Range (₹)
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        placeholder="Min"
                        className="w-24 text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-amber-400 bg-gray-50 transition-colors"
                      />
                      <span className="text-gray-300">—</span>
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder="Max"
                        className="w-24 text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-amber-400 bg-gray-50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                      Sort By
                    </p>
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      className="text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-amber-400 bg-gray-50 cursor-pointer"
                    >
                      <option value="newest">Newest First</option>
                      <option value="price_asc">Price: Low to High</option>
                      <option value="price_desc">Price: High to Low</option>
                    </select>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Results ── */}
        <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 overflow-y-auto flex-1">
          <AnimatePresence mode="wait">
            {!canSearch ? (
              <motion.p
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs text-gray-400 py-4"
              >
                Search by name, or use filters to browse
              </motion.p>
            ) : loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-10 flex justify-center"
              >
                <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
              </motion.div>
            ) : products.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-10 text-center"
              >
                <Package className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">No products found</p>
                <p className="text-gray-300 text-xs mt-1">Try different keywords or filters</p>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-xs text-gray-400 pt-3 pb-3">
                  {products.length} result{products.length !== 1 ? "s" : ""}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-6">
                  {products.map((product) => (
                    <NavLink
                      key={product._id}
                      to={`/jewllery-details/${product.slug}`}
                      onClick={onClose}
                      className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all duration-200"
                    >
                      <div className="aspect-square bg-gray-50 overflow-hidden">
                        {product.images?.[0]?.url ? (
                          <img
                            src={product.images[0].url}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-amber-200 text-3xl">
                            ✦
                          </div>
                        )}
                      </div>
                      <div className="p-2.5">
                        <p className="text-xs font-semibold text-gray-800 line-clamp-2 leading-snug group-hover:text-amber-800 transition-colors">
                          {product.name}
                        </p>
                        {product.collection?.name && (
                          <p className="text-[10px] text-gray-400 mt-0.5">{product.collection.name}</p>
                        )}
                        <p className="text-amber-700 font-bold text-xs mt-1">
                          {product.min_price || product.price
                            ? `₹${(product.min_price || product.price).toLocaleString("en-IN")}`
                            : "Price on request"}
                        </p>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
