import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RING_SIZES = [
  { indian: "1",  diameter: "13.5", circumference: "42.4" },
  { indian: "2",  diameter: "14.1", circumference: "44.2" },
  { indian: "3",  diameter: "14.5", circumference: "45.5" },
  { indian: "4",  diameter: "14.9", circumference: "46.8" },
  { indian: "5",  diameter: "15.3", circumference: "48.0" },
  { indian: "6",  diameter: "15.7", circumference: "49.3" },
  { indian: "7",  diameter: "16.1", circumference: "50.6" },
  { indian: "8",  diameter: "16.5", circumference: "51.8" },
  { indian: "9",  diameter: "16.9", circumference: "53.1" },
  { indian: "10", diameter: "17.3", circumference: "54.4" },
  { indian: "11", diameter: "17.7", circumference: "55.6" },
  { indian: "12", diameter: "18.1", circumference: "56.9" },
  { indian: "13", diameter: "18.5", circumference: "58.1" },
  { indian: "14", diameter: "18.9", circumference: "59.4" },
  { indian: "15", diameter: "19.3", circumference: "60.6" },
  { indian: "16", diameter: "19.7", circumference: "61.9" },
];

const BANGLE_SIZES = [
  { size: "2/2",  diameter: "52", wrist: "15–16" },
  { size: "2/4",  diameter: "54", wrist: "16–17" },
  { size: "2/6",  diameter: "57", wrist: "17–18" },
  { size: "2/8",  diameter: "59", wrist: "18–19" },
  { size: "2/10", diameter: "62", wrist: "19–20" },
  { size: "2/12", diameter: "64", wrist: "20–21" },
];

const SizeGuideModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={onClose}
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto pointer-events-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                  Size Guide
                </h2>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-6 py-5 space-y-8">
                {/* How to measure */}
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-amber-800">
                  <p className="font-semibold mb-1">How to measure your ring size</p>
                  <p className="text-amber-700 text-xs leading-relaxed">
                    Wrap a thin strip of paper around your finger snugly (not tight). Mark where it overlaps and measure the length in mm — that's your circumference. Use the table below to find your Indian size.
                  </p>
                </div>

                {/* Ring size table */}
                <div>
                  <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    Ring Sizes
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-gray-100">
                    <table className="w-full text-sm">
                      <thead className="bg-amber-900 text-white">
                        <tr>
                          <th className="px-4 py-2.5 text-left text-xs font-semibold tracking-wider">Indian Size</th>
                          <th className="px-4 py-2.5 text-left text-xs font-semibold tracking-wider">Diameter (mm)</th>
                          <th className="px-4 py-2.5 text-left text-xs font-semibold tracking-wider">Circumference (mm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {RING_SIZES.map((row, i) => (
                          <tr key={row.indian} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-4 py-2 font-semibold text-amber-800">{row.indian}</td>
                            <td className="px-4 py-2 text-gray-600">{row.diameter}</td>
                            <td className="px-4 py-2 text-gray-600">{row.circumference}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Bangle size table */}
                <div>
                  <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    Bangle Sizes
                  </h3>
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-xs text-amber-700 mb-3">
                    Measure the widest part of your hand (knuckles) when your fingers are close together. That's your bangle diameter.
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-gray-100">
                    <table className="w-full text-sm">
                      <thead className="bg-amber-900 text-white">
                        <tr>
                          <th className="px-4 py-2.5 text-left text-xs font-semibold tracking-wider">Bangle Size</th>
                          <th className="px-4 py-2.5 text-left text-xs font-semibold tracking-wider">Inner Dia (mm)</th>
                          <th className="px-4 py-2.5 text-left text-xs font-semibold tracking-wider">Wrist (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {BANGLE_SIZES.map((row, i) => (
                          <tr key={row.size} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-4 py-2 font-semibold text-amber-800">{row.size}</td>
                            <td className="px-4 py-2 text-gray-600">{row.diameter}</td>
                            <td className="px-4 py-2 text-gray-600">{row.wrist}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-xs text-gray-400 text-center pb-2">
                  Not sure about your size? Visit our store — we'll help you measure for free.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SizeGuideModal;
