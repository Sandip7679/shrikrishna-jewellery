import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { BadgeCheck, Gem, Weight, Tag, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import axiosInstance from "../api/axiosInstance";
import ZoomOnHoverImage from "../components/common/ZoomOnHoverImage";
import ContactActions from "../components/ContactActions";

const SilverJewelleryDetails = () => {
  const { id: slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (!slug) { setLoading(false); return; }
    setLoading(true);
    axiosInstance
      .get(`/api/products/${slug}`)
      .then((res) => setProduct(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fdf8f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-12">
          <div className="aspect-square bg-gray-200 rounded-2xl animate-pulse" />
          <div className="space-y-4 pt-4">
            {[100, 60, 80, 40, 90, 50].map((w, i) => (
              <div key={i} className={`h-4 bg-gray-200 rounded animate-pulse`} style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-gray-400 text-lg">Product not found.</p>
        <NavLink to="/collections" className="text-amber-700 text-sm font-medium hover:underline">
          ← Back to Collections
        </NavLink>
      </div>
    );
  }

  const images = product.images || [];
  const mainImage = images[activeImg]?.url || images[0]?.url;

  return (
    <div className="min-h-screen bg-[#fdf8f2]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <NavLink
            to="/collections"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-amber-700 transition"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Collections
          </NavLink>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── Left: Images ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <ZoomOnHoverImage src={mainImage} />
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition ${
                      activeImg === i
                        ? "border-amber-600 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt || `View ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* ── Right: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Title */}
            <div>
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-widest mb-2">
                {product.collection?.name || "Silver Jewellery"}
              </p>
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {product.name}
              </h1>
            </div>

            {/* Price */}
            {(product.min_price || product.price) && (
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-5 py-4 inline-block">
                <p className="text-2xl font-bold text-amber-800">
                  ₹{(product.min_price || product.price).toLocaleString("en-IN")}
                  {product.max_price && product.max_price !== product.min_price && (
                    <span className="text-base font-normal text-amber-600 ml-1">
                      – ₹{product.max_price.toLocaleString("en-IN")}
                    </span>
                  )}
                </p>
                <p className="text-xs text-amber-600 mt-0.5">Inclusive of all taxes</p>
              </div>
            )}

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {product.metalType && (
                <span className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-700">
                  <Gem className="w-3.5 h-3.5 text-amber-600" /> {product.metalType}
                </span>
              )}
              <span className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-700">
                <BadgeCheck className="w-3.5 h-3.5 text-amber-600" /> Hallmarked
              </span>
              {product.weight && (
                <span className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-700">
                  <Weight className="w-3.5 h-3.5 text-amber-600" /> ~{product.weight}g
                </span>
              )}
            </div>

            {/* Short description */}
            {product.shortDescription && (
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-5">
                {product.shortDescription}
              </p>
            )}

            {/* Full description */}
            {product.description && (
              <div
                className="text-gray-600 text-sm leading-relaxed prose max-w-none"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}

            {/* Tags */}
            {product.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                <Tag className="w-4 h-4 text-gray-400 mt-0.5" />
                {product.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 hover:bg-amber-50 text-gray-500 hover:text-amber-700 text-xs rounded-full transition cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Care tips */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800">
              <p className="font-semibold mb-1">Care Tips</p>
              <p className="text-blue-700 text-xs leading-relaxed whitespace-pre-line">
                {product.careTips?.trim()
                  ? product.careTips
                  : "Store in an airtight pouch. Avoid contact with perfume, lotion, and water. Wipe with a soft dry cloth after use to maintain shine."}
              </p>
            </div>

            {/* Contact actions */}
            <ContactActions />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SilverJewelleryDetails;
