import React from "react";

const DiscountBadge = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-24 h-24 bg-white flex justify-center items-center font-bold text-black rounded-full shadow-md"
        style={{
          clipPath:
            "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
        }}
      >
        25% off
      </div>
    </div>
  );
};

export default DiscountBadge;
