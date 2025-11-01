// import React from "react";
// import aboutImage from '../assets/images/about2.jpg';
// import bannerImage from '../assets/images/banner.jpg';

// const About = () => {
//     return (
//         <div>
//             <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-20 text-center">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8),_rgba(220,220,220,0.3))]" />
//                 <div className="relative z-10 max-w-3xl mx-auto px-6">
//                     <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
//                         About <span className="text-gray-600">JewelAura</span>
//                     </h1>
//                     <p className="mt-4 text-lg text-gray-600">
//                         Handcrafted Silver Jewellery that Reflects Purity and Grace
//                     </p>
//                 </div>
//                 <img
//                     src={bannerImage}
//                     alt=""
//                     className="absolute inset-0 w-full h-full object-cover opacity-10"
//                 />
//             </section>

//             <section className="py-16 bg-white">
//                 <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//                     <div>
//                         <img
//                             src={aboutImage}
//                             alt="Crafting Silver Jewellery"
//                             className="rounded-2xl shadow-lg"
//                         />
//                     </div>
//                     <div>
//                         <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//                             Our Story
//                         </h2>
//                         <p className="text-gray-600 mb-4 leading-relaxed">
//                             JewelAura was founded with a vision to celebrate the timeless
//                             beauty of silver — pure, radiant, and eternal. Each piece is
//                             handcrafted by skilled artisans, merging heritage techniques with
//                             contemporary design.
//                         </p>
//                         <p className="text-gray-600 leading-relaxed">
//                             From intricate bangles to minimalist pendants, every design
//                             reflects dedication, purity, and artistry — inspired by the spirit
//                             of Chandi.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-center">
//                 <div className="max-w-3xl mx-auto px-6">
//                     <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//                         Our Mission
//                     </h2>
//                     <p className="text-gray-600 leading-relaxed">
//                         To revive the charm of handcrafted silver jewellery and bring
//                         timeless artistry into everyday wear — ensuring authenticity,
//                         sustainability, and grace in every creation.
//                     </p>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default About;




import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/about2.jpg";
import bannerImage from "../assets/images/banner.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-20 text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8),_rgba(220,220,220,0.3))]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        />
        <img
          src={bannerImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About <span className="text-gray-600">JewelAura</span>
          </h1>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Handcrafted Silver Jewellery that Reflects Purity and Grace
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImage}
              alt="Crafting Silver Jewellery"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              JewelAura was founded with a vision to celebrate the timeless
              beauty of silver — pure, radiant, and eternal. Each piece is
              handcrafted by skilled artisans, merging heritage techniques with
              contemporary design.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From intricate bangles to minimalist pendants, every design
              reflects dedication, purity, and artistry — inspired by the spirit
              of Chandi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-center">
        <motion.div
          className="max-w-3xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To revive the charm of handcrafted silver jewellery and bring
            timeless artistry into everyday wear — ensuring authenticity,
            sustainability, and grace in every creation.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
