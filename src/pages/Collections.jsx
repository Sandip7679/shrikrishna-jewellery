import React from "react";
// import MainLayout from "../layout/MainLayout";
// import Seo from "../components/common/Seo";
import ProductGrid from "../components/products/ProductGrid";
// import MainLayout from "../components/layout/MainLayout";
import bannerImage from '../assets/images/banner.jpg';



const Collections = () => {
  return (
    <div>
      {/* <Seo
        title="Silver Jewellery Collections | JewelAura"
        description="Discover premium handcrafted silver jewellery collections — necklaces, bangles, earrings, and more. Pure Chandi craftsmanship from JewelAura."
      /> */}

      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white text-center py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.8),_rgba(200,200,200,0.2))]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Our Silver Jewellery Collections
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Explore our exclusive handcrafted Chandi designs that redefine
            elegance and purity.
          </p>
        </div>
        <img
          src={bannerImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </section>

      {/* Product Section */}
      <section className="py-16 bg-gradient-to-t from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <ProductGrid />
        </div>
      </section>
    </div>
  );
};

export default Collections;
