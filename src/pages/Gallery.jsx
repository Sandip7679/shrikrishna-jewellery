// src/pages/Gallery.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Container from "../components/ui/Container";
import image1 from '../assets/images/neckless4.jpeg'
// import image1 from '../assets/images/chandi-neckless1.jpg'
import image2 from '../assets/images/neckless1.jpeg'
import image3 from '../assets/images/ring1.jpg'
import image5 from '../assets/images/neckless2.jpeg'
import image4 from '../assets/images/ring2.jpg'
import image6 from '../assets/images/neckless3.jpeg'



const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
];

export default function Gallery() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="py-16 text-center bg-gradient-to-b from-white via-gray-50 to-gray-100">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-serif text-gray-800 mb-8"
            >
                Our Silver Creations
            </motion.h1>

            {/* Gallery Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 },
                    },
                }}
            >
                {images.map((src, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelected(src)}
                        className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl bg-white/90 border border-gray-200 backdrop-blur-sm"
                    >
                        <motion.img
                            src={src}
                            alt={`Gallery item ${i + 1}`}
                            className="w-full h-64 object-fill"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Lightbox Preview */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        onClick={() => setSelected(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.img
                            src={selected}
                            alt="Preview"
                            className="max-w-3xl w-full max-h-[90vh] rounded-lg shadow-2xl border border-gray-300"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

