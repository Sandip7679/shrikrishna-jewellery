import Hero from '../components/sections/Hero';
import FeaturedCollections from '../components/sections/FeaturedCollections';
import ProductGrid from '../components/products/ProductGrid';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';
import useSiteSettings from '../hooks/useSiteSettings';

const Home = () => {
  const { data: settings } = useSiteSettings();

  return (
    <>
      <Hero />
      <FeaturedCollections />
      <ProductGrid
        params={{ isFeatured: "true", limit: 8 }}
        eyebrow={settings?.featured_eyebrow || "Bestsellers"}
        heading={settings?.featured_heading || "Featured Pieces"}
        subheading={settings?.featured_subheading || "Our most-loved designs — each piece hallmarked and crafted in 92.5% pure silver."}
        showViewAll={true}
      />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;
