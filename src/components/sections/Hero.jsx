// import { Link, NavLink } from 'react-router-dom';
// import bannerImage from '../../assets/images/banner.jpg';
// import Button from '../common/Button';
// import Container from '../common/Container';

// const Hero = () => {
//   return (
//     <section className="relative bg-gradient-to-b from-brand-light to-white py-20 overflow-hidden">
//       <div className="container relative z-10 text-center">
//         <h1 className="text-4xl md:text-5xl font-heading text-brand-maroon mb-6">
//           Where Tradition Meets Timeless Beauty
//         </h1>
//         <p className="text-gray-700 max-w-2xl mx-auto mb-8">
//           Discover handcrafted gold, diamond, and silver jewellery inspired by India’s royal heritage.
//         </p>
//         <NavLink to={'/collections'} className="border border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-full text-lg font-medium transition cursor-pointer">
//           Explore Collections
//         </NavLink>
//       </div>

//       <img
//         src={bannerImage}
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover opacity-10"
//       />
//     </section>
//   );
// };

// export default Hero;




import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import bannerImage from '../../assets/images/banner.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-brand-light to-white py-20 overflow-hidden">
      {/* Background Image with subtle zoom animation */}
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        src={bannerImage}
        alt="Luxury Chandi Jewellery"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gradient shimmer */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/50 to-transparent z-0" />

      <div className="container relative z-10 text-center">
        {/* Animated heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-heading text-brand-maroon mb-6"
        >
          Where Tradition Meets Timeless Beauty
        </motion.h1>

        {/* Animated description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="text-gray-700 max-w-2xl mx-auto mb-8"
        >
          Discover handcrafted gold, diamond, and silver jewellery inspired by India’s royal heritage.
        </motion.p>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          <NavLink
            to="/collections"
            className="border border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-full text-lg font-medium transition cursor-pointer shadow-sm hover:shadow-md"
          >
            Explore Collections
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

