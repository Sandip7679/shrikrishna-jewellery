import { useEffect, useState } from "react";
import { Search, ArrowUpDown, SlidersHorizontal, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

// filters: { search, minPrice, maxPrice, sort }
// onFilterChange: (partial) => void
// totalCount: number
export default function ProductFilterBar({ filters, onFilterChange, totalCount }) {
  const [localSearch, setLocalSearch] = useState(filters.search || "");
  const [localMin, setLocalMin] = useState(filters.minPrice || "");
  const [localMax, setLocalMax] = useState(filters.maxPrice || "");
  const [mobileOpen, setMobileOpen] = useState(false);

  const debouncedSearch = useDebounce(localSearch, 400);
  const debouncedMin = useDebounce(localMin, 600);
  const debouncedMax = useDebounce(localMax, 600);

  // Sync debounced values up
  useEffect(() => {
    if (debouncedSearch !== filters.search) {
      onFilterChange({ search: debouncedSearch });
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (debouncedMin !== filters.minPrice) {
      onFilterChange({ minPrice: debouncedMin });
    }
  }, [debouncedMin]);

  useEffect(() => {
    if (debouncedMax !== filters.maxPrice) {
      onFilterChange({ maxPrice: debouncedMax });
    }
  }, [debouncedMax]);

  const activeCount = [filters.search, filters.minPrice, filters.maxPrice].filter(Boolean).length;

  const clearAll = () => {
    setLocalSearch("");
    setLocalMin("");
    setLocalMax("");
    onFilterChange({ search: "", minPrice: "", maxPrice: "" });
    setMobileOpen(false);
  };

  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">

        {/* Desktop layout */}
        <div className="hidden md:flex items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 flex-1 max-w-xs bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus-within:border-amber-400 transition-colors">
            <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search in collection..."
              className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
            {localSearch && (
              <button onClick={() => setLocalSearch("")} className="text-gray-400 hover:text-gray-600">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Price range */}
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <span className="text-xs font-medium text-gray-400 whitespace-nowrap">₹ Price</span>
            <input
              type="number"
              value={localMin}
              onChange={(e) => setLocalMin(e.target.value)}
              placeholder="Min"
              className="w-20 text-sm text-gray-700 border border-gray-200 rounded-lg px-2.5 py-2 outline-none focus:border-amber-400 bg-gray-50 transition-colors"
            />
            <span className="text-gray-300">—</span>
            <input
              type="number"
              value={localMax}
              onChange={(e) => setLocalMax(e.target.value)}
              placeholder="Max"
              className="w-20 text-sm text-gray-700 border border-gray-200 rounded-lg px-2.5 py-2 outline-none focus:border-amber-400 bg-gray-50 transition-colors"
            />
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Product count */}
          <p className="text-sm text-gray-400 whitespace-nowrap">
            <span className="font-semibold text-gray-700">{totalCount}</span> products
          </p>

          {/* Sort */}
          <div className="flex items-center gap-1.5 text-gray-500">
            <ArrowUpDown className="w-4 h-4" />
            <select
              value={filters.sort}
              onChange={(e) => onFilterChange({ sort: e.target.value })}
              className="text-sm text-gray-700 border-0 outline-none bg-transparent cursor-pointer font-medium"
            >
              <option value="newest">Newest First</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>

          {/* Clear filters */}
          {activeCount > 0 && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-900 border border-amber-200 hover:border-amber-400 px-3 py-1.5 rounded-full transition-colors"
            >
              <X className="w-3 h-3" /> Clear ({activeCount})
            </button>
          )}
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden items-center gap-2">
          {/* Search */}
          <div className="flex items-center gap-2 flex-1 min-w-0 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus-within:border-amber-400 transition-colors">
            <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search..."
              className="flex-1 min-w-0 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
            {localSearch && (
              <button onClick={() => setLocalSearch("")} className="text-gray-400 hover:text-gray-600 shrink-0">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`relative shrink-0 flex items-center justify-center w-9 h-9 rounded-lg border transition-colors ${
              mobileOpen || activeCount > 0
                ? "border-amber-400 text-amber-700 bg-amber-50"
                : "border-gray-200 text-gray-600 bg-gray-50"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            {activeCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-600 text-white text-[10px] font-bold flex items-center justify-center">
                {activeCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile expanded panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden md:hidden"
            >
              <div className="pt-3 pb-1 flex flex-col gap-3">
                {/* Price range */}
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5">Price Range (₹)</p>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={localMin}
                      onChange={(e) => setLocalMin(e.target.value)}
                      placeholder="Min"
                      className="flex-1 min-w-0 text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-amber-400 bg-gray-50"
                    />
                    <span className="text-gray-300 text-sm shrink-0">—</span>
                    <input
                      type="number"
                      value={localMax}
                      onChange={(e) => setLocalMax(e.target.value)}
                      placeholder="Max"
                      className="flex-1 min-w-0 text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-amber-400 bg-gray-50"
                    />
                  </div>
                </div>

                {/* Sort + clear row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-gray-500 min-w-0">
                    <ArrowUpDown className="w-4 h-4 shrink-0" />
                    <select
                      value={filters.sort}
                      onChange={(e) => onFilterChange({ sort: e.target.value })}
                      className="text-sm text-gray-700 border border-gray-200 rounded-lg px-2.5 py-1.5 outline-none bg-gray-50 cursor-pointer font-medium min-w-0"
                    >
                      <option value="newest">Newest</option>
                      <option value="price_asc">Price: Low → High</option>
                      <option value="price_desc">Price: High → Low</option>
                    </select>
                  </div>
                  {activeCount > 0 && (
                    <button
                      onClick={clearAll}
                      className="shrink-0 text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1"
                    >
                      <X className="w-3 h-3" /> Clear
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
