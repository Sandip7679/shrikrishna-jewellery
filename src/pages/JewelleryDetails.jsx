
// import React from "react";
// import { motion } from "framer-motion";
// import { Sparkles } from "lucide-react";
// import jewelleryImg from "../assets/images/neckless4.jpeg";
// import craftsmanshipImg from "../assets/images/neckless3.jpeg";

// const JewelleryDetails = () => {
//   return (
//     <div className="overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100">
//       {/* 🌟 Section 1 — Hero Showcase */}
//       <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6">
//         {/* Background shimmer */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-br from-white/60 via-gray-100/40 to-gray-200/50 backdrop-blur-2xl"
//           animate={{ opacity: [0.9, 1, 0.9] }}
//           transition={{ duration: 4, repeat: Infinity }}
//         />

//         {/* Sparkles */}
//         <motion.div
//           className="absolute top-10 right-10 text-gray-400"
//           animate={{ rotate: [0, 360] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
//         >
//           <Sparkles size={40} />
//         </motion.div>

//         {/* Jewellery Image */}
//         <motion.img
//           src={jewelleryImg}
//           alt="Silver Jewellery"
//           className="w-72 md:w-96 rounded-full shadow-2xl object-cover border-4 border-white/70"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.2 }}
//           whileHover={{ rotate: 3, scale: 1.05 }}
//         />

//         {/* Title */}
//         <motion.h1
//           className="mt-8 text-4xl md:text-5xl font-bold text-gray-800"
//           initial={{ y: 40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           Eternal Silver Grace
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-lg text-gray-600 max-w-xl"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//         >
//           A timeless expression of purity, handcrafted to mirror the calm glow
//           of moonlight.
//         </motion.p>
//       </section>

//       {/* 🧠 Section 2 — Craftsmanship Story */}
//       <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ x: -80, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src={craftsmanshipImg}
//             alt="Artisan at work"
//             className="rounded-2xl shadow-xl"
//           />
//         </motion.div>
//         <motion.div
//           initial={{ x: 80, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//             Crafted with Soul
//           </h2>
//           <p className="text-gray-600 leading-relaxed mb-4">
//             Each piece is shaped by hands that have inherited centuries of
//             artistry. No machinery can replicate the gentle rhythm of an artisan
//             perfecting silver — polishing not just metal, but emotion.
//           </p>
//           <p className="text-gray-600 leading-relaxed">
//             Every curve carries whispers of tradition, every gleam tells a
//             story of devotion. It’s not just jewellery — it’s poetry in silver.
//           </p>
//         </motion.div>
//       </section>

//       {/* 💫 Section 3 — Material & Symbolism */}
//       <section className="py-20 bg-gradient-to-br from-white to-gray-50">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <motion.h2
//             className="text-3xl font-semibold text-gray-800 mb-12"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Purity & Symbolism
//           </motion.h2>

//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               {
//                 title: "Metal",
//                 desc: "Pure Silver (92.5%)",
//               },
//               {
//                 title: "Polish",
//                 desc: "Oxidized Matte Finish",
//               },
//               {
//                 title: "Meaning",
//                 desc: "Symbol of purity, moonlight & calm energy",
//               },
//               {
//                 title: "Essence",
//                 desc: "Timeless grace that transcends trend",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-md border border-gray-200"
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 🪶 Section 4 — Reflections / Customer Feelings */}
//       <section className="py-20 text-center bg-gradient-to-b from-gray-50 via-white to-gray-100">
//         <motion.h2
//           className="text-3xl font-semibold text-gray-800 mb-8"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           Reflections from Our Patrons
//         </motion.h2>

//         <div className="flex flex-wrap justify-center gap-8 px-6">
//           {[
//             {
//               name: "Ananya D.",
//               quote:
//                 "Wearing it feels like carrying serenity — a reminder of simplicity and strength.",
//             },
//             {
//               name: "Meera S.",
//               quote:
//                 "It’s not just jewellery. It’s a piece of calm, crafted into form.",
//             },
//           ].map((review, i) => (
//             <motion.div
//               key={i}
//               className="max-w-sm bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.6 }}
//             >
//               <p className="text-gray-600 italic mb-3">“{review.quote}”</p>
//               <p className="text-gray-800 font-medium">— {review.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 🌸 Section 5 — Closing / Visit Store CTA */}
//       <section className="py-24 text-center relative">
//         <motion.div
//           className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8),_rgba(240,240,240,0.4))]"
//           animate={{ opacity: [0.9, 1, 0.9] }}
//           transition={{ duration: 5, repeat: Infinity }}
//         />
//         <div className="relative z-10">
//           <motion.h2
//             className="text-4xl font-semibold text-gray-800 mb-6"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Visit Us to Feel the Aura
//           </motion.h2>
//           <p className="text-gray-600 max-w-xl mx-auto mb-8">
//             Experience the radiance and craftsmanship up close. Each creation
//             awaits your touch, your story, your connection.
//           </p>
//           <motion.a
//             href="/contact"
//             className="inline-block px-8 py-3 text-lg rounded-full bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-md hover:shadow-xl transition"
//             whileHover={{ scale: 1.05 }}
//           >
//             Locate Store
//           </motion.a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default JewelleryDetails;

import React from "react";
import { motion } from "framer-motion";
import necklaceImg from "../assets/images/neckless4.jpeg";
import artisanImg from "../assets/images/neckless3.jpeg";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const JewelleryDetails = () => {
    return (
        <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
            {/* 🌸 Hero Section */}
            <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-gray-200" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.5),_rgba(230,230,230,0.3))]" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10"
                >
                    <motion.img
                        src={necklaceImg}
                        alt="Silver Necklace"
                        className="w-72 md:w-96 mx-auto rounded-full shadow-2xl border border-white/70 object-cover"
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="mt-8 text-4xl md:text-5xl font-bold text-gray-800"
                    >
                        Moonlight Serenity Necklace
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-lg text-gray-600 max-w-xl mx-auto"
                    >
                        A handcrafted silver necklace inspired by the calm glow of moonlight,
                        symbolizing purity, grace, and timeless femininity.
                    </motion.p>
                </motion.div>
            </section>


            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="w-[85%] md:w-[80%] lg:w-[70%] aspect-[3/2] relative">
                            <img
                                src={artisanImg}
                                alt="Artisan Crafting"
                                className="absolute inset-0 w-full h-full object-fill rounded-2xl shadow-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="max-w-lg mx-auto md:mx-0"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Crafted with Patience and Soul
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Each necklace is hand-shaped by artisans who’ve inherited generations of mastery.
                            The rhythmic hammering, the delicate polishing — all done with mindful devotion.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            This is not just a piece of jewellery, but a mirror of time — blending tradition,
                            emotion, and silver’s eternal calm.
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* 💫 Material & Symbolism */}
            <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-center">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-3xl font-semibold text-gray-800 mb-12"
                >
                    Purity & Symbolism
                </motion.h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
                    {[
                        { title: "Metal", desc: "Pure Silver (92.5%)" },
                        { title: "Finish", desc: "Soft Oxidized Polish" },
                        { title: "Symbolism", desc: "Peace, Purity, and Feminine Strength" },
                        { title: "Essence", desc: "Inspired by the calm glow of moonlight" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-md border border-gray-200"
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 💬 Reflections Section */}
            <section className="py-20 text-center bg-gradient-to-t from-gray-50 to-white">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-3xl font-semibold text-gray-800 mb-8"
                >
                    What People Feel
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-8 px-6">
                    {[
                        {
                            name: "Ankita R.",
                            quote:
                                "Wearing it feels like carrying calmness — as if moonlight rests on my heart.",
                        },
                        {
                            name: "Diya M.",
                            quote:
                                "A necklace that whispers elegance, not shouts it. Pure serenity in silver.",
                        },
                    ].map((review, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="max-w-sm bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
                        >
                            <p className="text-gray-600 italic mb-3">“{review.quote}”</p>
                            <p className="text-gray-800 font-medium">— {review.name}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 🕊️ Visit Section */}
            <section className="py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8),_rgba(240,240,240,0.4))]" />
                <div className="relative z-10">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-4xl font-semibold text-gray-800 mb-6"
                    >
                        Visit Our Store
                    </motion.h2>
                    <p className="text-gray-600 max-w-xl mx-auto mb-8">
                        Feel the beauty, weight, and energy of silver in person.
                        Each piece awaits your story, your aura, your touch.
                    </p>
                    <motion.a
                        href="/contact"
                        className="inline-block px-8 py-3 text-lg rounded-full bg-gradient-to-r from-gray-700 to-gray-500 text-white shadow-md hover:shadow-xl transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        Locate Store
                    </motion.a>
                </div>
            </section>
        </div>
    );
};

export default JewelleryDetails;
