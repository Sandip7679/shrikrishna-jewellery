// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// const MapModal = ({ isOpen, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Overlay */}
//           <motion.div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />

//           {/* Modal */}
//           <motion.div
//             className="fixed top-1/2 left-1/2 w-[90%] max-w-3xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
//             initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
//             animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center p-4 border-b">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Visit Our Store
//               </h2>
//               <button
//                 onClick={onClose}
//                 className="text-gray-500 hover:text-gray-800 transition cursor-pointer"
//               >
//                 <X size={22} />
//               </button>
//             </div>

//             {/* Embedded Google Map */}
//             <div className="w-full h-[450px]">
//               <iframe
//                 title="Shree Krishna Silver Jewellers Map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54073.70742229961!2d88.34702272271707!3d22.523404603689073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02718d95ab83fb%3A0xdda7d2a25182c08c!2sShree%20Krishna%20Silver%20Jewellers%2C%20College%20Road%2C%20Midnapore!5e0!3m2!1sen!2sin!4v1717321537374!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>

//             {/* Footer */}
//             <div className="p-4 border-t text-right">
//               <a
//                 href="https://www.google.com/maps/dir/?api=1&destination=Shree+Krishna+Silver+Jewellers,+College+Road,+Midnapore"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-5 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition"
//               >
//                 Open in Google Maps
//               </a>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default MapModal;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const MapModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading when modal opens
  useEffect(() => {
    if (isOpen) setIsLoading(true);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 w-[90%] max-w-3xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-800">
                Visit Our Store
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 transition cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Map Container */}
            <div className="relative w-full h-[450px] bg-gray-100 flex items-center justify-center overflow-hidden">
              {/* Loader */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm z-10"
                >
                  <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-700 mt-4 font-medium">
                    Loading map...
                  </p>
                </motion.div>
              )}

              {/* Embedded Google Map */}
              <iframe
                key={isOpen ? "map-open" : "map-closed"}
                title="Shree Krishna Silver Jewellers Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54073.70742229961!2d88.34702272271707!3d22.523404603689073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02718d95ab83fb%3A0xdda7d2a25182c08c!2sShree%20Krishna%20Silver%20Jewellers%2C%20College%20Road%2C%20Midnapore!5e0!3m2!1sen!2sin!4v1717321537374!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>

            {/* Footer Buttons */}
            <div className="p-4 border-t flex flex-wrap justify-end gap-3 bg-gray-50">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition "
              >
                Close
              </button>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Shree+Krishna+Silver+Jewellers,+College+Road,+Midnapore"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MapModal;


