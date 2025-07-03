import React from "react";

const StarButton = ({label = "Click Me" }) => {
  return (
    <button className="star-button">
      {label}
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <div key={num} className={`star-${num}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
          >
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 
                 207.96,29.37 371.12,197.68 392.05,407.74 
                 20.93,-210.06 184.09,-378.37 392.05,-407.74 
                 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>
      ))}
    </button>
  );
};

export default StarButton;