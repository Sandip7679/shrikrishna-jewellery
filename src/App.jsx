import { Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./contexts/WishlistContext";

import Home from "./pages/Home";
import MainLayout from "./components/layout/MainLayout";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetail";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SilverJewelleryDetails from "./pages/SilverJewelleryDetails";
import Wishlist from "./pages/Wishlist";
import CustomOrder from "./pages/CustomOrder";

function App() {
  return (
    <WishlistProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:slug" element={<CollectionDetail />} />
          <Route path="/jewllery-details/:id" element={<SilverJewelleryDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/custom-order" element={<CustomOrder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </WishlistProvider>
  );
}

export default App;
