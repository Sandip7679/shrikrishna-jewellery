

//yellow bg

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-50 text-gray-800 border-t border-amber-100">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-amber-700 mb-3">JewelAura</h2>
          <p className="text-sm text-gray-600">
            Where timeless craftsmanship meets modern elegance. Discover fine jewellery designed to shine with you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-3">Quick Links</h3>
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
          <h3 className="text-lg font-semibold text-amber-700 mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-amber-700" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-amber-700" />
              <span>support@jewelaura.in</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-amber-700" />
              <span>Kolkata, West Bengal, India</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-amber-600"><Facebook size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-amber-600"><Instagram size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-amber-600"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-100 py-4 text-center text-sm text-gray-600 bg-amber-100">
        © {new Date().getFullYear()} JewelAura — Crafted with 💛 in India.
      </div>
    </footer>
  );
};

export default Footer;





// // black footer bg

// import React from "react";
// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
//       <div className="container mx-auto px-6 grid gap-10 md:grid-cols-3">
        
//         {/* Brand Section */}
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-3">JewelAura</h2>
//           <p className="text-sm leading-relaxed">
//             Pure. Elegant. Timeless. Discover handcrafted silver and gold jewellery
//             designed to shine forever.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/" className="hover:text-white">Home</Link></li>
//             <li><Link to="/collections" className="hover:text-white">Collections</Link></li>
//             <li><Link to="/about" className="hover:text-white">About</Link></li>
//             <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Contact / Social */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Connect With Us</h3>
//           <ul className="space-y-2 text-sm">
//             <li>Email: support@jewelaura.com</li>
//             <li>Phone: +91 98765 43210</li>
//           </ul>
//           <div className="flex space-x-4 mt-4">
//             <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={20} /></a>
//             <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={20} /></a>
//             <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={20} /></a>
//             <a href="mailto:support@jewelaura.com" aria-label="Mail" className="hover:text-white"><Mail size={20} /></a>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} JewelAura. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
