import React from "react";
import "../styles/shimmer.css";

const ShimmerUI = () => {
  return (
    <div className="shimmer-container">
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-effect"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
