import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const PinterestIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);
import useSiteSettings from "../../hooks/useSiteSettings";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "Gallery", path: "/gallery" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  const { data, loading } = useSiteSettings();
  if (loading || !data) return null;

  const { siteName, site_desc, email, phone, address, socialLinks = {}, copyright } = data;

  const socialIcons = [
    { key: "instagram", icon: Instagram, color: "hover:text-pink-400" },
    { key: "facebook", icon: Facebook, color: "hover:text-blue-400" },
    { key: "youtube", icon: Youtube, color: "hover:text-red-400" },
    { key: "pinterest", icon: PinterestIcon, color: "hover:text-red-500" },
    { key: "twitter", icon: Twitter, color: "hover:text-sky-400" },
  ];

  return (
    <>
      <footer className="bg-gray-950 text-gray-400">
        {/* Main footer grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/">
              <h2
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {siteName}
              </h2>
            </Link>
            <div className="w-10 h-0.5 bg-amber-600 mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed mb-6">{site_desc}</p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialIcons.map(({ key, icon: Icon, color }) =>
                socialLinks[key] ? (
                  <a
                    key={key}
                    href={socialLinks[key]}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 ${color} hover:border-white/30 transition`}
                  >
                    <Icon size={15} />
                  </a>
                ) : null
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-gray-500 hover:text-amber-400 transition flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              {phone && (
                <li>
                  <a href={`tel:${phone}`} className="flex items-start gap-3 hover:text-amber-400 transition">
                    <Phone size={14} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>{phone}</span>
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a href={`mailto:${email}`} className="flex items-start gap-3 hover:text-amber-400 transition">
                    <Mail size={14} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>{email}</span>
                  </a>
                </li>
              )}
              {address && (
                <li className="flex items-start gap-3">
                  <MapPin size={14} className="text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{address}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Certifications / trust */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Our Promise
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {(data.promises?.trim()
                ? data.promises.split("\n").filter(Boolean)
                : ["92.5% Pure Silver — Hallmarked", "Handcrafted by Master Artisans", "Authentic & Certified", "Safe & Secure Packaging"]
              ).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
            <p>© {new Date().getFullYear()} {siteName}. {copyright}</p>
            <p>Crafted with ♥ in India</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
