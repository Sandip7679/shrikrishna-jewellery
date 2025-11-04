
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../../assets/images/neckless4.jpeg";
import image2 from "../../assets/images/neckless1.jpeg";
import image3 from "../../assets/images/ring1.jpg";
import image4 from "../../assets/images/ring2.jpg";
import JewelleryModal from "../JewelleryModal";
import { useState } from "react";

const collections = [
  {
    id: 1,
    title: "Gold Collection",
    image: image1,
    link: "/collections/gold",
  },
  {
    id: 2,
    title: "Diamond Elegance",
    image: image2,
    link: "/collections/diamond",
  },
  {
    id: 3,
    title: "Silver Grace",
    image: image3,
    link: "/collections/silver",
  },
  {
    id: 4,
    title: "Bridal Heritage",
    image: image4,
    link: "/collections/bridal",
  },
  {
    id: 5,
    title: "Diamond Elegance",
    image: image2,
    link: "/collections/diamond",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FeaturedCollections = () => {

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(200,200,200,0.15),transparent_60%)]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-14"
        >
          Featured Collections
        </motion.h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: false, // always forward
          }}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
          // className="pb-16"
          style={{ paddingBottom: '37px' }}
        >
          {collections.map((item, index) => (
            <SwiperSlide key={item.id} onClick={() => openModal(item)}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Link
                  // to={item.link}
                  className="group block relative overflow-hidden rounded-3xl 
                    bg-white/10 backdrop-blur-md border border-white/30 
                    shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_40px_rgba(0,0,0,0.15)] 
                    transition-all duration-500"
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      whileHover={{ rotate: 1 }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/30 transition duration-500" />
                    <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 group-hover:left-[125%] transition-all duration-1000 ease-in-out"></div>

                    <h3 className="absolute bottom-6 left-0 right-0 text-center text-xl text-white font-semibold tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <JewelleryModal
          isOpen={modalOpen}
          onClose={closeModal}
          jewellery={selectedItem}
        />
      </div>
    </section>
  );
};

export default FeaturedCollections;


