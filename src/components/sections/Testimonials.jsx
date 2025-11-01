// import React from "react";

// const testimonials = [
//   {
//     name: "Priya Sharma",
//     text: "Absolutely love their silver collection! The craftsmanship is amazing and the shine lasts forever.",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
//   {
//     name: "Amit Verma",
//     text: "Bought a silver bracelet for my wife — she’s in love with it! Great quality and elegant packaging.",
//     image: "https://randomuser.me/api/portraits/men/43.jpg",
//   },
//   {
//     name: "Sneha Patel",
//     text: "Elegant, minimal, and pure silver — exactly what I was looking for. Highly recommend JewelAura!",
//     image: "https://randomuser.me/api/portraits/women/75.jpg",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
//           What Our Customers Say
//         </h2>

//         <div className="grid gap-8 md:grid-cols-3">
//           {testimonials.map((t, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//             >
//               <img
//                 src={t.image}
//                 alt={t.name}
//                 className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
//               />
//               <p className="text-gray-600 mb-3 italic">“{t.text}”</p>
//               <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;




// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const testimonials = [
//   {
//     name: "Anita Sharma",
//     text: "Absolutely stunning silver jewellery! The craftsmanship is exquisite, and the shine is unmatched.",
//     img: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
//   {
//     name: "Riya Verma",
//     text: "Their Chandi bangles and earrings are gorgeous — traditional yet modern. Highly recommend!",
//     img: "https://randomuser.me/api/portraits/men/43.jpg",
//   },
//   {
//     name: "Nisha Kapoor",
//     text: "I’ve been buying from them for years. Pure silver and great service every time!",
//     img: "https://randomuser.me/api/portraits/women/75.jpg",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Customer Testimonials</h2>
//         <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//         //   slidesPerView={3}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           navigation={true}
//           loop={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//         >
//           {testimonials.map((t, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white shadow-md rounded-2xl p-8 max-w-2xl mx-auto">
//                 <img
//                   src={t.img}
//                   alt={t.name}
//                   className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <p className="text-gray-600 italic mb-4">“{t.text}”</p>
//                 <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Anita Sharma",
    text: "Absolutely stunning silver jewellery! The craftsmanship is exquisite, and the shine is unmatched.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Riya Verma",
    text: "Their Chandi bangles and earrings are gorgeous — traditional yet modern. Highly recommend!",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Nisha Kapoor",
    text: "I’ve been buying from them for years. Pure silver and great service every time!",
    img: "https://randomuser.me/api/portraits/women/75.jpg",
  },
   {
    name: "Priya Sen",
    text: "Lovely packaging and certified silver. I trust them completely!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Meena Patel",
    text: "The designs are elegant and authentic. Perfect for festive occasions!",
    img: "https://randomuser.me/api/portraits/women/75.jpg",
  },
];

const Testimonials = () => {
  return (
    <section 
    // className="py-5 bg-red-50"
    className="py-16 relative bg-gradient-to-br from-[#f8f8f8] via-[#e6e6e6] to-[#f4f4f4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Customer Testimonials</h2>
        {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Customers Say</h2> */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-80"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-2xl p-8 mx-2 hover:shadow-lg transition h-70">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200"
                />
                <p className="text-gray-600 italic mb-4">“{t.text}”</p>
                <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const testimonials = [
//   {
//     name: "Anita Sharma",
//     text: "Absolutely stunning silver jewellery! The craftsmanship is exquisite, and the shine is unmatched.",
//     img: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
//   {
//     name: "Riya Verma",
//     text: "Their Chandi bangles and earrings are gorgeous — traditional yet modern. Highly recommend!",
//     img: "https://randomuser.me/api/portraits/men/43.jpg",
//   },
//   {
//     name: "Nisha Kapoor",
//     text: "I’ve been buying from them for years. Pure silver and great service every time!",
//     img: "https://randomuser.me/api/portraits/women/75.jpg",
//   },
//   {
//     name: "Meena Patel",
//     text: "The designs are elegant and authentic. Perfect for festive occasions!",
//     img: "https://randomuser.me/api/portraits/women/75.jpg",
//   },
//   {
//     name: "Priya Sen",
//     text: "Lovely packaging and certified silver. I trust them completely!",
//     img: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-16 relative bg-gradient-to-br from-[#f8f8f8] via-[#e6e6e6] to-[#f4f4f4] overflow-hidden">
//       {/* Subtle shimmer overlay */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_70%)] animate-pulse opacity-40"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-4xl font-semibold text-gray-800 tracking-wide mb-10">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b3b3b3] via-[#d9d9d9] to-[#b3b3b3]">
//             What Our Customers Say
//           </span>
//         </h2>

//         <Swiper
//           spaceBetween={30}
//           slidesPerView={3}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           navigation={true}
//           loop={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {testimonials.map((t, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white/70 backdrop-blur-md border border-[#e0e0e0] rounded-2xl p-8 mx-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
//                 <img
//                   src={t.img}
//                   alt={t.name}
//                   className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-[#d0d0d0] shadow-sm"
//                 />
//                 <p className="text-gray-700 italic mb-4 leading-relaxed">
//                   “{t.text}”
//                 </p>
//                 <h4 className="text-lg font-medium text-gray-800">{t.name}</h4>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



