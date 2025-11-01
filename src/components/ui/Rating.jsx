import React from "react";
import { Star } from "lucide-react";

const Rating = ({ value = 0 }) => {
  return (
    <div className="flex justify-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < value ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default Rating;
