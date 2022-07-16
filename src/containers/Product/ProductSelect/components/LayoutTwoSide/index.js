import React from "react";
import Itinerary from "./Infromation/Itinerary/Itinerary";

import TravelAmenities from "./Infromation/TravelAmenities/TravelAmenities";
import TourGuideTittle from "./Infromation/TourGuideTittle/TourGuideTittle";
import "./styles.scss";
import Staycations from "./Infromation/Staycations";
import BookCard from "./BookCard";
import MoreThings from "./Infromation/MoreThings";

const LayoutTwoSide = (props) => {
  return (
    <div
      id="product-body"
      className="flex-column flex-xl-row gap-5 container mt-5"
    >
      <div className="body-left">
        <TourGuideTittle {...props} />
        <TravelAmenities {...props} />
        <Itinerary {...props} />
        <Staycations />
        <MoreThings />
      </div>
      <div className="body-right d-sm-none d-md-flex">
        <BookCard />
      </div>
    </div>
  );
};

export default LayoutTwoSide;
