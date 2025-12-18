

// //yellow bg

// import React from "react";
// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
// import WhatsAppButton from "../WhatsAppButton";

// const Footer = () => {
//   return (
//     <footer className="bg-amber-50 text-gray-800 border-t border-amber-100">
//       {/* Top Section */}
//       <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {/* Brand Info */}
//         <div>
//           <h2 className="text-2xl font-bold text-amber-700 mb-3">JewelAura</h2>
//           <p className="text-sm text-gray-600">
//             Where timeless craftsmanship meets modern elegance. Discover fine jewellery designed to shine with you.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-amber-700 mb-3">Quick Links</h3>
//           <ul className="space-y-2">
//             <li><Link to="/" className="hover:text-amber-600">Home</Link></li>
//             <li><Link to="/collections" className="hover:text-amber-600">Collections</Link></li>
//             <li><Link to="/gallery" className="hover:text-amber-600">Gallery</Link></li>
//             <li><Link to="/about" className="hover:text-amber-600">About Us</Link></li>
//             <li><Link to="/contact" className="hover:text-amber-600">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold text-amber-700 mb-3">Contact</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="flex items-center gap-2">
//               <Phone size={16} className="text-amber-700" />
//               <span>+91 98765 43210</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <Mail size={16} className="text-amber-700" />
//               <span>support@jewelaura.in</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <MapPin size={16} className="text-amber-700" />
//               <span>Kolkata, West Bengal, India</span>
//             </li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="text-lg font-semibold text-amber-700 mb-3">Follow Us</h3>
//           <div className="flex space-x-4">
//             <a href="#" className="text-gray-600 hover:text-amber-600"><Facebook size={20} /></a>
//             <a href="#" className="text-gray-600 hover:text-amber-600"><Instagram size={20} /></a>
//             <a href="#" className="text-gray-600 hover:text-amber-600"><Twitter size={20} /></a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-amber-100 py-4 text-center text-sm text-gray-600 bg-amber-100">
//         © {new Date().getFullYear()} JewelAura — Crafted with 💛 in India.
//       </div>
     
//      <WhatsAppButton/>

//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter,Youtube, Mail, Phone, MapPin } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import useSiteSettings from "../../hooks/useSiteSettings";

const Footer = () => {
  const { data, loading } = useSiteSettings();

  if (loading || !data) return null; // footer can silently wait

  const {
    siteName,
    site_desc,
    email,
    phone,
    address,
    socialLinks = {},
    copyright,
  } = data;

  return (
    <footer className="bg-amber-50 text-gray-800 border-t border-amber-100">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-amber-700 mb-3">
            {siteName}
          </h2>
          <p className="text-sm text-gray-600">
            {site_desc}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-amber-600">Home</Link></li>
            <li><Link to="/collections" className="hover:text-amber-600">Collections</Link></li>
            <li><Link to="/gallery" className="hover:text-amber-600">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-amber-600">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-amber-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-3">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            {phone && (
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-700" />
                <span>{phone}</span>
              </li>
            )}
            {email && (
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-700" />
                <span>{email}</span>
              </li>
            )}
            {address && (
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-amber-700" />
                <span>{address}</span>
              </li>
            )}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                <Facebook size={20} />
              </a>
            )}
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                <Instagram size={20} />
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
                <Twitter size={20} />
              </a>
            )}
            {socialLinks.youtube && (
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer">
                <Youtube size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-100 py-4 text-center text-sm text-gray-600 bg-amber-100">
        © {new Date().getFullYear()} {siteName} — {copyright}
      </div>

      <WhatsAppButton />
    </footer>
  );
};

export default Footer;
