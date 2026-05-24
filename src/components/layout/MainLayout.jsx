import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import WhatsAppButton from "../WhatsAppButton";
import AnnouncementBanner from "../AnnouncementBanner";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <ScrollToTop />
      <AnnouncementBanner />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;
