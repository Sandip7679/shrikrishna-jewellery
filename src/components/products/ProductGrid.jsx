import React from "react";
import ProductCard from "./ProductCard";

import image1 from '../../assets/images/neckless4.jpeg'
import image2 from '../../assets/images/neckless1.jpeg'
import image3 from '../../assets/images/ring1.jpg'
import image5 from '../../assets/images/neckless2.jpeg'
import image4 from '../../assets/images/ring2.jpg'
import image6 from '../../assets/images/neckless3.jpeg'

const sampleProducts = [
  {
    name: "Silver Necklace - Floral Design",
    price: 2499,
    rating: 5,
    image:image1
  },
  {
    name: "Classic Silver Ring",
    price: 1299,
    rating: 4,
    image:image2
  },
  {
    name: "Oxidised Silver Earrings",
    price: 1799,
    rating: 5,
    image:image3
  },
  {
    name: "Minimal Silver Bracelet",
    price: 1999,
    rating: 4,
    image:image4
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Our Silver Collection
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sampleProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
