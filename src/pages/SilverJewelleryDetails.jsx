import { Phone, MapPin, BadgeCheck, Gem } from "lucide-react";
// import WhatsAppButton from "../common/WhatsAppButton"; // your WhatsApp component
import { motion } from "framer-motion";
// import necklaceImg from "../../assets/images/neckless4.jpeg";
import necklaceImg from "../assets/images/neckless4.jpeg"
import ZoomOnHoverImage from "../components/common/ZoomOnHoverImage";
import ContactActions from "../components/ContactActions";
// import ZoomOnHoverImage from "../components/common/ZoomOnHoverImage";
// import MyReactImageMagnify from "../components/common/MyReactImageMagnify";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const SilverJewelleryDetails = () => {
    return (
        <section className="pt-5 pb-16 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="w-[90%] md:w-[80%] lg:w-[75%] aspect-square relative">
                        {/* <img
                            src={necklaceImg}
                            alt="Handcrafted Silver Necklace"
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border border-gray-200"
                        /> */}
                        <ZoomOnHoverImage src={necklaceImg} />
                        {/* <MyReactImageMagnify/> */}
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-5"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                        Traditional Silver Necklace
                    </h2>

                    <div className="flex flex-wrap gap-4 text-gray-600">
                        <span className="flex items-center gap-2">
                            <Gem className="w-5 h-5 text-gray-700" /> 92.5% Pure Silver
                        </span>
                        <span className="flex items-center gap-2">
                            <BadgeCheck className="w-5 h-5 text-gray-700" /> Hallmarked
                        </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        This handcrafted silver necklace is inspired by traditional Bengali
                        artistry. Every curve and engraving reflects patience, devotion, and
                        timeless elegance. Perfect for festive occasions or spiritual
                        ceremonies.
                    </p>

                    <ul className="text-gray-700 space-y-2">
                        <li>• Material: Pure Silver (Chandi 92.5%)</li>
                        <li>• Weight: Approx. 28 grams</li>
                        <li>• Finish: Antique Oxidized Polish</li>
                        <li>• Craftsmanship: Handmade by skilled artisans</li>
                    </ul>

                    {/* Care Tips */}
                    <div className="bg-gray-100 p-4 rounded-xl mt-4">
                        <h4 className="font-medium text-gray-700 mb-2">Care Tips:</h4>
                        <p className="text-gray-600 text-sm">
                            Keep away from perfume and moisture. Clean with a soft dry cloth
                            after use to maintain shine.
                        </p>
                    </div>

                    {/* Contact / Visit Info */}
                    {/* <div className="pt-6 border-t border-gray-200 space-y-3">
                        <p className="flex items-center gap-2 text-gray-700">
                            <MapPin className="w-5 h-5 text-gray-700" />
                            Shree Krishna Silver Jewellers, College Road, Midnapore
                        </p>
                        <p className="flex items-center gap-2 text-gray-700">
                            <Phone className="w-5 h-5 text-gray-700" /> +91 98765 43210
                        </p>

                        <div className="flex gap-4 pt-4">
                            <a
                                href="tel:+919876543210"
                                className="px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all"
                            >
                                Call Now
                            </a>
                            <WhatsAppButton
                                phoneNumber="+919876543210"
                                message="Hello, I’d like to know more about the silver necklace."
                            />
                        </div>
                    </div> */}
                            <ContactActions />
                </motion.div>
            </div>

            {/* Related Section */}
            <div className="container mx-auto px-6 mt-20 text-center">
                <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-2xl font-semibold text-gray-800 mb-8"
                >
                    You May Also Like
                </motion.h3>

                <div className="flex justify-center gap-6 flex-wrap">
                    <div className="w-48">
                        <img
                            src={necklaceImg}
                            alt="Similar Product"
                            className="w-full h-48 object-cover rounded-lg shadow"
                        />
                        <p className="mt-2 text-gray-700 text-sm">Oxidized Earrings</p>
                    </div>
                    <div className="w-48">
                        <img
                            src={necklaceImg}
                            alt="Similar Product"
                            className="w-full h-48 object-cover rounded-lg shadow"
                        />
                        <p className="mt-2 text-gray-700 text-sm">Temple Design Pendant</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SilverJewelleryDetails;
