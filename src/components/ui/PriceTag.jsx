import React from "react";

const PriceTag = ({ price, originalPrice }) => {
  const isDiscounted = originalPrice && originalPrice > price;

  return (
    <div className="flex items-center justify-center gap-2">
      <span className="text-lg font-semibold text-gray-900">
        ₹{price.toLocaleString()}
      </span>
      {isDiscounted && (
        <>
          <span className="text-sm line-through text-gray-400">
            ₹{originalPrice.toLocaleString()}
          </span>
          <span className="text-sm font-medium text-green-600">
            {Math.round(((originalPrice - price) / originalPrice) * 100)}% off
          </span>
        </>
      )}
    </div>
  );
};

export default PriceTag;
