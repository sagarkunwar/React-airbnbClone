import React from "react";
import "../Style/AdsCards.css";

function AdsCard({ src, title }) {
  return (
    <div className="AdsCard">
      <img src={src} alt="" />
      <h1>{title}</h1>
    </div>
  );
}

export default AdsCard;
