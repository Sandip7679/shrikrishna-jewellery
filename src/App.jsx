// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>

//     </div>
//   )
// }

// export default App



import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./components/layout/MainLayout";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import JewelleryDetails from "./pages/JewelleryDetails";
import { useEffect } from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
// import Collections from "./pages/Collections";
// import Collection from "./pages/Collection";
// import Product from "./pages/Product";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Gallery from "./pages/Gallery";
// import NotFound from "./pages/NotFound";

function App() {
  // const { pathname } = useLocation();


  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 scroll smoothly to top
  // }, [pathname]);

  return (
    <>
      <LanguageSwitcher />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/jewllery-details" element={<JewelleryDetails />} />
          {/* <Route path="/collections/:slug" element={<Collection />} /> */}
          {/* <Route path="/product/:id" element={<Product />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
