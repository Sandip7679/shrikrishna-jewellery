import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import useTestimonials from "../../hooks/useTestimonials";

const Testimonials = () => {
  const { data: testimonials, loading } = useTestimonials();
  const swiperRef = useRef(null);

  if (loading) {
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="h-8 w-64 bg-gray-800 rounded animate-pulse mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-52 bg-gray-800 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials.length) return null;

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Soft ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-900/25 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-900/25 translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="inline-block w-10 h-px bg-amber-500/50" />
              <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">
                What Customers Say
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Customer Testimonials
            </motion.h2>
          </div>

          {/* Custom navigation buttons — no white circle */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-amber-400 hover:border-amber-400/40 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-amber-400 hover:border-amber-400/40 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={testimonials.length >= 3}
          modules={[Autoplay, Pagination]}
          style={{ paddingBottom: "48px" }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t._id} style={{ height: "auto", display: "flex" }}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 h-full w-full transition-colors duration-300 hover:bg-white/[0.08] hover:border-white/20">
                {/* Quote icon */}
                <Quote className="w-7 h-7 text-amber-400/70 flex-shrink-0" />

                {/* Stars */}
                {t.rating && (
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < t.rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-gray-700 text-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Testimonial text */}
                <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.comment}&rdquo;
                </p>

                {/* Customer info */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  {t.customer_image?.url ? (
                    <img
                      src={t.customer_image.url}
                      alt={t.customer_name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-500/30 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-amber-800/50 flex items-center justify-center text-amber-200 font-bold text-sm ring-2 ring-amber-500/20 flex-shrink-0">
                      {t.customer_name?.[0]?.toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm leading-tight truncate">
                      {t.customer_name}
                    </p>
                    <p className="text-amber-400/60 text-xs mt-0.5">Verified Customer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
