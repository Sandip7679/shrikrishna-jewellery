import { MapPin, Phone, MessageCircle } from "lucide-react";
import MapModal from "./MapModal";
import { useState } from "react";

const ContactActions = () => {
    const [mapOpen, setMapOpen] = useState(false);
    const phoneNumber = "+919876543210";
    const whatsappMessage =
        "Hello! I’d like to know more about your silver jewellery collection.";

    return (
        <div className="pt-6 border-t border-gray-200 space-y-3">
            {/* Address */}
            <p className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5 text-gray-700" />
                Shree Krishna Silver Jewellers, College Road, Midnapore
            </p>

            {/* Phone */}
            <p className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5 text-gray-700" /> +91 98765 43210
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
                {/* Mobile Call */}
                <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all hover:shadow-md"
                >
                    <Phone className="w-4 h-4" /> Call Now
                </a>

                {/* WhatsApp Chat */}
                <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all hover:shadow-md"
                >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>

                {/* Google Maps (Optional) */}
                {/* <a
                    href="https://www.google.com/maps?q=Shree+Krishna+Silver+Jewellers,+College+Road,+Midnapore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-all hover:shadow-md"
                >
                    <MapPin className="w-4 h-4" /> Visit Store
                </a> */}
                <button
                    onClick={() => setMapOpen(true)}
                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-all cursor-pointer hover:shadow-md"
                >
                    <MapPin className="w-4 h-4" /> Visit Store
                </button>
            </div>
            <MapModal isOpen={mapOpen} onClose={() => setMapOpen(false)} />
        </div>
    );
};

export default ContactActions;
