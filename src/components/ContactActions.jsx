import { MapPin, Phone, MessageCircle, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import MapModal from "./MapModal";
import { useState } from "react";
import useSiteSettings from "../hooks/useSiteSettings";

const PinterestIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const ContactActions = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const { data: settings } = useSiteSettings();

  const phoneNumber = settings?.phone || settings?.whatsapp || "+919876543210";
  const whatsappNumber = settings?.whatsapp || phoneNumber;
  const address = settings?.address || "Shree Krishna Silver Jewellers, College Road, Midnapore";
  const whatsappMessage =
    settings?.whatsapp_message || "Hello! I'd like to know more about your silver jewellery collection.";
  const social = settings?.socialLinks || {};

  const socialIcons = [
    { key: "instagram", icon: <Instagram className="w-4 h-4" />, hover: "hover:text-pink-500 hover:border-pink-300" },
    { key: "facebook",  icon: <Facebook  className="w-4 h-4" />, hover: "hover:text-blue-600 hover:border-blue-300" },
    { key: "youtube",   icon: <Youtube   className="w-4 h-4" />, hover: "hover:text-red-500 hover:border-red-300" },
    { key: "pinterest", icon: <PinterestIcon />,                 hover: "hover:text-red-600 hover:border-red-300" },
    { key: "twitter",   icon: <Twitter   className="w-4 h-4" />, hover: "hover:text-sky-500 hover:border-sky-300" },
  ].filter(({ key }) => social[key]);

  return (
    <div className="pt-6 border-t border-gray-200 space-y-3">
      <p className="flex items-center gap-2 text-gray-700">
        <MapPin className="w-5 h-5 text-gray-700" />
        {address}
      </p>

      <p className="flex items-center gap-2 text-gray-700">
        <Phone className="w-5 h-5 text-gray-700" /> {phoneNumber}
      </p>

      <div className="flex flex-wrap gap-4 pt-4">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all hover:shadow-md"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>

        <a
          href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all hover:shadow-md"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>

        <button
          onClick={() => setMapOpen(true)}
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-all cursor-pointer hover:shadow-md"
        >
          <MapPin className="w-4 h-4" /> Visit Store
        </button>
      </div>
      {socialIcons.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {socialIcons.map(({ key, icon, hover }) => (
            <a
              key={key}
              href={social[key]}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition ${hover}`}
            >
              {icon}
            </a>
          ))}
        </div>
      )}

      <MapModal
        isOpen={mapOpen}
        onClose={() => setMapOpen(false)}
        embedUrl={settings?.mapEmbedUrl}
        directionUrl={settings?.mapDirectionUrl}
      />
    </div>
  );
};

export default ContactActions;
