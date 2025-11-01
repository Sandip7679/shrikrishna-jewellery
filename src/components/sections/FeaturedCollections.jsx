import { Link } from 'react-router-dom';
import image1 from '../../assets/images/neckless4.jpeg'
import image2 from '../../assets/images/neckless1.jpeg'
import image3 from '../../assets/images/ring1.jpg'
import image5 from '../../assets/images/neckless2.jpeg'
import image4 from '../../assets/images/ring2.jpg'
import image6 from '../../assets/images/neckless3.jpeg'

const collections = [
  {
    id: 1,
    title: 'Gold Collection',
    image: image1,
    link: '/collections/gold',
  },
  {
    id: 2,
    title: 'Diamond Elegance',
    image: image2,
    link: '/collections/diamond',
  },
  {
    id: 3,
    title: 'Silver Grace',
    image: image3,
    link: '/collections/silver',
  },
  {
    id: 4,
    title: 'Bridal Heritage',
    image: image4,
    link: '/collections/bridal',
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container text-center">
        <h2 className="text-3xl font-heading text-brand-maroon mb-10">
          Featured Collections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item) => (
            <Link
              key={item.id}
              // to={item.link}
              to={'/collections'}
              className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
              <h3 className="absolute bottom-6 left-0 right-0 text-center text-xl text-white font-heading">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;




// import React from "react";

// const collections = [
//   {
//     title: "Silver Necklaces",
//     image:
//       "https://images.unsplash.com/photo-1617038220319-3b5a5b8ed9f8?auto=format&fit=crop&w=1000&q=80",
//     link: "/collections/necklaces",
//   },
//   {
//     title: "Silver Earrings",
//     image:
//       "https://images.unsplash.com/photo-1606761568499-6d2451b23c8f?auto=format&fit=crop&w=1000&q=80",
//     link: "/collections/earrings",
//   },
//   {
//     title: "Silver Bangles",
//     image:
//       "https://images.unsplash.com/photo-1617038205949-40e2ffb5e6a4?auto=format&fit=crop&w=1000&q=80",
//     link: "/collections/bangles",
//   },
//   {
//     title: "Silver Rings",
//     image:
//       "https://images.unsplash.com/photo-1603808033192-082d236f7b8b?auto=format&fit=crop&w=1000&q=80",
//     link: "/collections/rings",
//   },
// ];

// const FeaturedCollections = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
//           Explore Our Silver Collections
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {collections.map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               className="group block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
//             >
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
//                 />
//                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
//                 <h3 className="absolute bottom-4 left-0 right-0 text-white text-lg font-semibold z-10">
//                   {item.title}
//                 </h3>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCollections;

