import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useSiteSettings from "../../hooks/useSiteSettings";
import LanguageSwitcher from "../LanguageSwitcher";
import SearchOverlay from "../SearchOverlay";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { data: settings } = useSiteSettings();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > 80) {
        setHidden(y > lastY.current);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const siteName = settings?.siteName || "Shree Krishna Silver";
  const phone = settings?.phone || "";
  const email = settings?.email || "";

  return (
    <>
      <motion.header
        animate={{ y: menuOpen || searchOpen || !hidden ? 0 : "-100%" }}
        transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
        className={`sticky top-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-amber-100"
            : "bg-white border-b border-gray-100"
        }`}
      >
        {/* Top bar — phone + email */}
        {(phone || email) && (
          <div className="hidden md:flex justify-end items-center bg-amber-900 text-amber-100 text-xs px-6 py-1.5 gap-4">
            {phone && (
              <a href={`tel:${phone}`} className="flex items-center gap-1.5 hover:text-white transition">
                <Phone className="w-3 h-3" />
                {phone}
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-white transition">
                <Mail className="w-3 h-3" />
                {email}
              </a>
            )}
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span
              className="text-xl sm:text-2xl font-bold text-amber-800 tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {siteName}
            </span>
            <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase hidden sm:block">
              Pure Silver Jewellery
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive
                      ? "text-amber-700"
                      : "text-gray-700 hover:text-amber-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-600 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Divider */}
            <div className="h-5 w-px bg-gray-200 mx-2" />

            {/* Search icon */}
            <button
              onClick={() => setSearchOpen(true)}
              title="Search"
              className="p-2 rounded-lg text-gray-600 hover:text-amber-700 hover:bg-amber-50 transition"
            >
              <Search size={18} />
            </button>

            {/* Language */}
            <div className="border-l border-gray-200 pl-3">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile right — search + hamburger */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-lg text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-amber-900">
                <span
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {siteName}
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-white transition"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer nav */}
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          isActive
                            ? "bg-amber-50 text-amber-800 font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-amber-700"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-6 py-5 border-t border-gray-100 bg-gray-50">
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 text-sm text-amber-800 font-medium mb-3"
                  >
                    <Phone className="w-4 h-4" /> {phone}
                  </a>
                )}
                <div className="mb-3">
                  <LanguageSwitcher />
                </div>
                <p className="text-xs text-gray-400">
                  © {new Date().getFullYear()} {siteName}
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
