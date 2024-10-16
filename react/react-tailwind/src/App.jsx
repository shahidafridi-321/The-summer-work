// App.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure Tailwind CSS is included
import Card from "./Card"; // Import the Card component

export const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Example cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Beautiful Landscape"
          description="Explore the beauty of nature with this stunning landscape."
          image="https://via.placeholder.com/300x200.png"
        />
        <Card
          title="Adventure Awaits"
          description="Take your adventures to the next level with our travel guide."
          image="https://via.placeholder.com/300x200.png"
        />
        <Card
          title="City Lights"
          description="Discover the vibrant life of the city after dark."
          image="https://via.placeholder.com/300x200.png"
        />
      </div>
    </div>
  );
};


