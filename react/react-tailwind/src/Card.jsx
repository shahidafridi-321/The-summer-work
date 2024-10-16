// Card.jsx
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <img className="w-full h-48 object-cover" src={image} alt="Card" />

      {/* Card content */}
      <div className="p-4">
        {/* Title */}
        <h5 className="text-lg font-bold tracking-tight text-gray-900">{title}</h5>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600">{description}</p>

        {/* Button */}
        <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
