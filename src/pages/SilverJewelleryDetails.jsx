import { useEffect, useState } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import {
  BadgeCheck, Gem, Weight, Tag, ChevronLeft, ChevronRight,
  MessageCircle, Share2, Ruler, Heart, Home, Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import axiosInstance from "../api/axiosInstance";
import ZoomOnHoverImage from "../components/common/ZoomOnHoverImage";
import ContactActions from "../components/ContactActions";
import SizeGuideModal from "../components/SizeGuideModal";
import ProductCard from "../components/products/ProductCard";
import useSiteSettings from "../hooks/useSiteSettings";
import useProducts from "../hooks/useProducts";
import { useWishlist } from "../contexts/WishlistContext";

const SilverJewelleryDetails = () => {
  const { id: slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const { data: settings } = useSiteSettings();
  const { toggle, isWishlisted } = useWishlist();

  useEffect(() => {
    if (!slug) { setLoading(false); return; }
    setLoading(true);
    axiosInstance
      .get(`/api/products/${slug}`)
      .then((res) => setProduct(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  const collectionSlug = product?.collection?.slug;
  const { data: relatedRaw } = useProducts(
    collectionSlug ? { collectionSlug, limit: 5, status: "true" } : {}
  );
  const related = relatedRaw.filter((p) => p.slug !== slug).slice(0, 4);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fdf8f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-12">
          <div className="aspect-square bg-gray-200 rounded-2xl animate-pulse" />
          <div className="space-y-4 pt-4">
            {[100, 60, 80, 40, 90, 50].map((w, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" style={{ width: `${w}%` }} />
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
  const wishlisted = isWishlisted(product._id);

  const whatsappNumber = (settings?.whatsapp || settings?.phone || "").replace(/\D/g, "");
  const priceText = product.min_price
    ? `₹${product.min_price.toLocaleString("en-IN")}`
    : "price on request";
  const enquiryMsg = `Hi! I'm interested in "${product.name}" (${priceText}). Please share more details.\n${window.location.href}`;
  const shareMsg = `Check out this beautiful "${product.name}" from Shree Krishna Silver!\n${window.location.href}`;

  return (
    <div className="min-h-screen bg-[#fdf8f2]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-amber-700 transition">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <Link to="/collections" className="hover:text-amber-700 transition">Collections</Link>
            {product.collection?.name && (
              <>
                <ChevronRight className="w-3 h-3 flex-shrink-0" />
                <Link
                  to={`/collections/${product.collection.slug}`}
                  className="hover:text-amber-700 transition"
                >
                  {product.collection.name}
                </Link>
              </>
            )}
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <span className="text-gray-600 truncate max-w-[180px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── Left: Images ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:sticky md:top-24"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <ZoomOnHoverImage src={mainImage} />
              {/* Wishlist button on image */}
              <button
                onClick={() => toggle(product)}
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition ${
                  wishlisted ? "bg-red-500 text-white" : "bg-white/90 text-gray-400 hover:text-red-400"
                }`}
              >
                <Heart className="w-5 h-5" fill={wishlisted ? "currentColor" : "none"} />
              </button>
            </div>

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
                    <img src={img.url} alt={img.alt || `View ${i + 1}`} className="w-full h-full object-cover" />
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

            {/* Action buttons: Enquire / Share / Size Guide / Wishlist */}
            <div className="flex flex-wrap gap-3 pt-2">
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiryMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
                </a>
              )}
              <button
                onClick={() => {
                  window.open(
                    `https://wa.me/?text=${encodeURIComponent(shareMsg)}`,
                    "_blank"
                  );
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
              >
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-300 text-amber-700 text-sm font-semibold hover:bg-amber-50 transition"
              >
                <Ruler className="w-4 h-4" /> Size Guide
              </button>
              <button
                onClick={() => toggle(product)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition ${
                  wishlisted
                    ? "border-red-300 bg-red-50 text-red-500"
                    : "border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Heart className="w-4 h-4" fill={wishlisted ? "currentColor" : "none"} />
                {wishlisted ? "Wishlisted" : "Wishlist"}
              </button>
            </div>

            {/* Care tips */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800">
              <p className="font-semibold mb-1">Care Tips</p>
              <p className="text-blue-700 text-xs leading-relaxed whitespace-pre-line">
                {product.careTips?.trim()
                  ? product.careTips
                  : "Store in an airtight pouch. Avoid contact with perfume, lotion, and water. Wipe with a soft dry cloth after use to maintain shine."}
              </p>
            </div>

            {/* Custom order CTA */}
            <Link
              to="/custom-order"
              className="flex items-center justify-between gap-4 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 hover:bg-amber-100 transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-amber-800" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-900">Want something similar but personalised?</p>
                  <p className="text-xs text-amber-700 mt-0.5">Request a custom design — we'll craft it just for you.</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-amber-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Contact actions */}
            <ContactActions />
          </motion.div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16 pt-10 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h2
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                You May Also Like
              </h2>
              {product.collection?.slug && (
                <NavLink
                  to={`/collections/${product.collection.slug}`}
                  className="text-amber-700 text-sm font-semibold hover:underline flex items-center gap-1"
                >
                  View Collection <ChevronRight className="w-4 h-4" />
                </NavLink>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p, i) => (
                <motion.div
                  key={p._id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

      <SizeGuideModal isOpen={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </div>
  );
};

export default SilverJewelleryDetails;
