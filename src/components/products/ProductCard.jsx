import { NavLink } from "react-router-dom";
import { Star, Eye } from "lucide-react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { name, min_price, price, images, slug, isFeatured, metalType } = product;
  const displayPrice = min_price || price;
  const image = images?.[0]?.url;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-400 border border-gray-100"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
          style={{ transition: "transform 0.6s ease" }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {isFeatured && (
            <span className="bg-amber-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
              Featured
            </span>
          )}
          {metalType && (
            <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-medium px-2 py-0.5 rounded-full">
              {metalType}
            </span>
          )}
        </div>

        {/* Hover overlay with quick view */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <NavLink
            to={`/jewllery-details/${slug}`}
            className="flex items-center gap-2 bg-white text-gray-900 text-xs font-semibold px-4 py-2.5 rounded-full shadow-md hover:bg-amber-50 transition translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </NavLink>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3
          className="font-semibold text-gray-900 text-sm sm:text-base leading-snug mb-1 line-clamp-2 group-hover:text-amber-800 transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {name}
        </h3>

        <div className="flex items-center justify-between mt-2">
          {displayPrice ? (
            <span className="text-amber-800 font-bold text-base">
              ₹{displayPrice.toLocaleString("en-IN")}
            </span>
          ) : (
            <span className="text-gray-400 text-sm italic">Price on request</span>
          )}

          <NavLink
            to={`/jewllery-details/${slug}`}
            className="text-xs font-semibold text-amber-700 hover:text-amber-900 border border-amber-300 hover:border-amber-500 px-3 py-1.5 rounded-full transition"
          >
            Details
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
