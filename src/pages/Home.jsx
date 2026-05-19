import Hero from '../components/sections/Hero';
import FeaturedCollections from '../components/sections/FeaturedCollections';
import ProductGrid from '../components/products/ProductGrid';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <ProductGrid
        params={{ isFeatured: "true", limit: 8 }}
        eyebrow="Bestsellers"
        heading="Featured Pieces"
        subheading="Our most-loved designs — each piece hallmarked and crafted in 92.5% pure silver."
        showViewAll={true}
      />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;
