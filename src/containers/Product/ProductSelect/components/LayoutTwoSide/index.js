import React from "react";
import Itinerary from "./Infromation/Itinerary/Itinerary";

import TravelAmenities from "./Infromation/TravelAmenities/TravelAmenities";
import TourGuideTittle from "./Infromation/TourGuideTittle/TourGuideTittle";
import "./styles.scss";
import Staycations from "./Infromation/Staycations/Staycations";
import BookCard from "./BookCard";
import MoreThings from "./Infromation/MoreThings";

const LayoutTwoSide = (props) => {
  return (
    <div className="product-body flex-column flex-xl-row gap-lg-5 gap-sm-0 mt-5">
      <div className="body-left">
        <TourGuideTittle {...props} />
        <TravelAmenities {...props} />
        <Itinerary {...props} />
        <Staycations {...props} />
        <MoreThings />
      </div>
      <div className="body-right d-sm-none d-md-flex">
        <BookCard className="d-none d-lg-block" />
      </div>
    </div>
  );
};

export default LayoutTwoSide;
