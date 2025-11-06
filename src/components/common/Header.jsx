

// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // using lucide-react for clean icons

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Collections", path: "/collections" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className="shadow-sm border-b bg-white sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold tracking-wide text-amber-600"
//         >
//           JewelAura
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `text-gray-700 hover:text-amber-600 transition ${
//                   isActive ? "font-semibold text-amber-600" : ""
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-gray-700 hover:text-amber-600 focus:outline-none"
//           aria-label="Toggle Menu"
//         >
//           {menuOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       <div
//         className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out ${
//           menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
//         }`}
//       >
//         <nav className="flex flex-col p-4 space-y-4">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               onClick={() => setMenuOpen(false)}
//               className={({ isActive }) =>
//                 `block text-gray-700 hover:text-amber-600 transition ${
//                   isActive ? "font-semibold text-amber-600" : ""
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;






import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-amber-600"
        >
          JewelAura
        </Link>

        {/* Desktop Nav */}
        <nav className="flex space-x-6">
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-amber-600 transition ${isActive ? "font-semibold text-amber-600" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
            <LanguageSwitcher />
        </nav>
        {/* <nav className="md:hidden absolute top-20 right-6">
          <LanguageSwitcher />
        </nav> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-amber-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Sidebar Animation (Framer Motion) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar Menu */}
            <motion.aside
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-50 flex flex-col justify-between"
            >
              <div className="p-6">
                {/* Header inside Sidebar */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-amber-600">
                    JewelAura
                  </h2>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-600 hover:text-amber-600"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block text-lg font-medium text-gray-700 hover:text-amber-600 transition ${isActive ? "text-amber-600 font-semibold" : ""
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Footer of Sidebar */}
              <div className="p-6 border-t">
                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} JewelAura
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
