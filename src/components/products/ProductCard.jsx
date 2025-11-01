import React from "react";
import { Star } from "lucide-react";
import PriceTag from "../ui/PriceTag";
import Rating from "../ui/Rating";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { name, price, image, rating } = product;

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <NavLink to={'/jewllery-details'} className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform"
                />
            </NavLink>

            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
                <p className="text-gray-500 mb-2">₹{price.toLocaleString()}</p>
                {/* <PriceTag price={price} /> */}
                {/* Rating stars */}
                <div className="flex justify-center mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                        />
                    ))}
                    {/* <div className="mt-2">
                        <Rating value={rating} />
                    </div> */}
                </div>
                <NavLink to={'/jewllery-details'}>
                    <button className="px-5 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition cursor-pointer">
                        View Details
                    </button>
                </NavLink>
                {/* <NavLink to={'/jewellery-details'} className="px-5 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition">
                    View Details
                </NavLink> */}
            </div>
        </div>
    );
};

export default ProductCard;
