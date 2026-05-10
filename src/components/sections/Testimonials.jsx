import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useTestimonials from "../../hooks/useTestimonials";

const Testimonials = () => {
  const { data: testimonials, loading } = useTestimonials();

  if (loading) {
    return (
      <section className="py-20 bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="h-8 w-64 bg-amber-800 rounded animate-pulse mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-52 bg-amber-800 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials.length) return null;

  return (
    <section className="py-20 bg-amber-900 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-amber-300 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-300 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <span className="inline-block w-10 h-px bg-amber-400/60" />
            <span className="text-amber-300 text-xs font-semibold tracking-[0.2em] uppercase">
              What Customers Say
            </span>
            <span className="inline-block w-10 h-px bg-amber-400/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-white"
          >
            Customer Testimonials
          </motion.h2>
        </div>

        <Swiper
          spaceBetween={24}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop={testimonials.length >= 3}
          modules={[Autoplay, Pagination, Navigation]}
          style={{ paddingBottom: "48px" }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t._id}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex flex-col gap-4 h-full">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-amber-400 opacity-80 flex-shrink-0" />

                {/* Comment */}
                <p className="text-amber-50/90 text-sm leading-relaxed flex-1 italic">
                  "{t.comment}"
                </p>

                {/* Stars */}
                {t.rating && (
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < t.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-amber-700"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Customer */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  {t.customer_image?.url ? (
                    <img
                      src={t.customer_image.url}
                      alt={t.customer_name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-400/40"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm ring-2 ring-amber-400/40">
                      {t.customer_name?.[0]}
                    </div>
                  )}
                  <div>
                    <p className="text-white font-semibold text-sm">{t.customer_name}</p>
                    <p className="text-amber-300/70 text-xs">Verified Customer</p>
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
