import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import useCollections from "../../hooks/useCollections";

const FeaturedCollections = () => {
  const { data: collections, loading } = useCollections();
  const featured = collections.filter((c) => c.isFeatured);
  const swiperRef = useRef(null);

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
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="gold-line" />
              <span className="text-amber-700 text-xs font-semibold tracking-[0.2em] uppercase">
                Curated for You
              </span>
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

          {/* Right: view all + custom nav */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <NavLink
              to="/collections"
              className="inline-flex items-center gap-1.5 text-amber-700 text-sm font-semibold hover:gap-3 transition-all duration-300 whitespace-nowrap"
            >
              View All <ArrowRight className="w-4 h-4" />
            </NavLink>
            <div className="flex gap-1.5">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous"
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-amber-700 hover:border-amber-300 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next"
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-amber-700 hover:border-amber-300 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={featured.length >= 4}
          style={{
            paddingBottom: "44px",
            "--swiper-pagination-color": "#b45309",
            "--swiper-pagination-bullet-inactive-color": "#d97706",
            "--swiper-pagination-bullet-inactive-opacity": "0.25",
            "--swiper-pagination-bullet-size": "7px",
          }}
        >
          {featured.map((item, index) => (
            <SwiperSlide key={item._id}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <NavLink
                  to={`/collections/${item.slug}`}
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-400">
                    {item.image?.url ? (
                      <img
                        src={item.image.url}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-amber-50 flex items-center justify-center">
                        <span className="text-amber-300 text-4xl">✦</span>
                      </div>
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3
                        className="text-white font-bold text-base sm:text-lg leading-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.name}
                      </h3>
                      {item.short_desc && (
                        <p className="text-white/65 text-xs mt-0.5 line-clamp-1">
                          {item.short_desc}
                        </p>
                      )}
                      <span className="mt-2 inline-flex items-center gap-1 text-xs text-amber-300 font-semibold group-hover:gap-2 transition-all duration-300">
                        Shop Now <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </NavLink>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedCollections;
