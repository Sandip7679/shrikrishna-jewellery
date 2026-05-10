import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import JewelleryModal from "../JewelleryModal";
import useCollections from "../../hooks/useCollections";

const FeaturedCollections = () => {
  const { data: collections, loading } = useCollections();
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const featured = collections.filter((c) => c.isFeatured);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="h-3 w-16 bg-amber-200 rounded mx-auto mb-4 animate-pulse" />
            <div className="h-8 w-72 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!featured.length) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <span className="gold-line" />
            <span className="text-amber-700 text-xs font-semibold tracking-[0.2em] uppercase">
              Curated for You
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
            Featured Collections
          </motion.h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={featured.length >= 4}
          style={{ paddingBottom: "44px" }}
        >
          {featured.map((item, index) => (
            <SwiperSlide key={item._id}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onClick={() => { setSelectedItem(item); setModalOpen(true); }}
                className="cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100 shadow-sm">
                  <img
                    src={item.image?.url}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />

                  {/* Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3
                      className="text-white font-semibold text-base sm:text-lg leading-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.name}
                    </h3>
                    {item.short_desc && (
                      <p className="text-white/70 text-xs mt-0.5 line-clamp-1">
                        {item.short_desc}
                      </p>
                    )}
                    <span className="mt-2 inline-block text-xs text-amber-300 font-medium tracking-wide group-hover:underline">
                      View Collection →
                    </span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <JewelleryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          jewellery={selectedItem}
        />
      </div>
    </section>
  );
};

export default FeaturedCollections;
