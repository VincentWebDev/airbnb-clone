import React from "react";
import photoGrid from "../assets/images/photo-grid.png";

export default function Hero() {
  return (
    <div>
      <div className="photo-grid">
        <img src={photoGrid} />
      </div>
      <div className="text-content">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
