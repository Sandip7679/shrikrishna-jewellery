// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const JewelleryModal = ({ isOpen, onClose, jewellery }) => {
//   const navigate = useNavigate();

//   if (!jewellery) return null;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Background Overlay */}
//           <motion.div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />

//           {/* Modal Content */}
//           <motion.div
//             className="fixed top-1/2 left-1/2 w-[90%] max-w-lg bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
//             initial={{ opacity: 0, scale: 0.8, y: "-50%", x: "-50%" }}
//             animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center p-4 border-b">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {jewellery.title}
//               </h2>
//               <button
//                 onClick={onClose}
//                 className="text-gray-500 hover:text-gray-800 transition"
//               >
//                 <X size={22} />
//               </button>
//             </div>

//             {/* Content */}
//             <div className="p-5 space-y-4">
//               <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md">
//                 <img
//                   src={jewellery.image}
//                   alt={jewellery.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {jewellery.description ||
//                   "This handcrafted silver jewellery piece blends purity and tradition with elegant modern craftsmanship."}
//               </p>

//               <ul className="text-gray-700 text-sm space-y-1">
//                 <li>• Material: 92.5% Pure Silver</li>
//                 <li>• Finish: Oxidized / Glossy Polish</li>
//                 <li>• Craftsmanship: Handmade by skilled artisans</li>
//               </ul>

//               {/* Buttons */}
//               <div className="flex justify-end gap-3 pt-4 border-t">
//                 <button
//                   onClick={onClose}
//                   className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
//                 >
//                   Close
//                 </button>
//                 <button
//                   onClick={() => {
//                     onClose();
//                     navigate(`/details/${jewellery.id}`);
//                   }}
//                   className="px-5 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition"
//                 >
//                   View Full Details
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default JewelleryModal;





import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JewelleryModal = ({ isOpen, onClose, jewellery }) => {
  const navigate = useNavigate();
  if (!jewellery) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 w-[90%] max-w-md bg-white/95 rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-3 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                {jewellery.title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X size={22} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              {/* Image Section */}
              <motion.div
                className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={jewellery.image}
                  alt={jewellery.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Short Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {jewellery.description ||
                  "An exquisite handcrafted silver piece that embodies purity and tradition in every curve."}
              </p>

              {/* Minimal Details */}
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
                <p>• Material: 92.5% Pure Silver</p>
                <p>• Finish: Oxidized Polish</p>
                <p>• Craftsmanship: Handmade by artisans</p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-3 border-t border-gray-100">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    navigate(`/jewllery-details/${jewellery.id}`);
                  }}
                  className="px-5 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default JewelleryModal;

