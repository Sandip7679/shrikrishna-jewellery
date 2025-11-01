import Hero from '../components/sections/Hero';
import FeaturedCollections from '../components/sections/FeaturedCollections';
import HeroFullBanner from '../components/sections/HeroFullBanner';
import HeroSplit from '../components/sections/HeroSplit';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';
import ProductGrid from '../components/products/ProductGrid';

const Home = () => {
    return (
        <>
            <Hero />

            {/* <HeroFullBanner />  */}
            {/* or */}
            {/* <HeroSplit/> */}

            <FeaturedCollections />
            <Testimonials/>
            <Newsletter/>
            <ProductGrid/>
        </>
    );
};

export default Home;
