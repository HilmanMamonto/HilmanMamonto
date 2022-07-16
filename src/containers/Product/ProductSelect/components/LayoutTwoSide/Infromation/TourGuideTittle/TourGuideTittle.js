import React from "react";
import "./TourGuideTittle.scss";

const TourGuideTittle = ({ tourGuideName, freePickup, tourGuidePhoto }) => {
  return (
    <div id="tour-guide-tittle">
      <div>
        <label className="tittle">
          Travel Package By <span>{tourGuideName}</span>
        </label>
        <div className="sub-tittle">
          <label>1 day</label>
          <span />
          <label>4 places</label>
          <span />
          <label>{freePickup ? "free pick-up services" : ""}</label>
        </div>
      </div>
      <img src={tourGuidePhoto} />
    </div>
  );
};

export default TourGuideTittle;
