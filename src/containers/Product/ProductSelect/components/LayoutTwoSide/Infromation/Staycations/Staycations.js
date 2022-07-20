import React from "react";
import TittleSelectedStaycations from "./components/Tittle";
import Desc from "./components/Desc";
import LayoutImg from "./components/LayoutImg";
import Amenities from "./components/Amenities";
import CheckIn from "./components/CheckIn";
import Items from "./components/Items/Items";

const Staycations = () => {
  return (
    <div id="staycations" className="mt-4 pb-5 border-bottom">
      <h5 className="mb-3">Staycations Thats Offers</h5>
      <Items />
      <TittleSelectedStaycations />
      <LayoutImg />
      <Desc />
      <Amenities />
      <CheckIn />
    </div>
  );
};

export default Staycations;
