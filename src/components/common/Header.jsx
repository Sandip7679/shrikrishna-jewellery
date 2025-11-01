// import React from "react";
// import { Link, NavLink } from "react-router-dom";

// const Header = () => {
//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Collections", path: "/collections" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className="shadow-sm border-b bg-white">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo / Brand */}
//         <Link
//           to="/"
//           className="text-2xl font-bold tracking-wide text-amber-600"
//         >
//           JewelAura
//         </Link>

//         {/* Navigation */}
//         <nav className="space-x-6">
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
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // using lucide-react for clean icons

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
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-amber-600 transition ${
                  isActive ? "font-semibold text-amber-600" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-amber-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-gray-700 hover:text-amber-600 transition ${
                  isActive ? "font-semibold text-amber-600" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

