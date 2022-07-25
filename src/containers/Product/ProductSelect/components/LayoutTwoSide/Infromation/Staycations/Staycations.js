import React from "react";
import Tittle from "./components/Tittle";
import Desc from "./components/Desc";
import LayoutImg from "./components/LayoutImg";
import Items from "./components/Items/Items";
import { useState } from "react";
import Amenities from "./components/Amenities/Amenities";
import CheckIn from "./components/CheckIn";

const Staycations = ({ staycations }) => {
  const [id, setId] = useState(staycations[0].id);

  const data = staycations.filter((item) => item.id === id);

  return (
    <div id="staycations" className="mt-4 pb-5 border-bottom">
      <h5 className="mb-3">Staycations Thats Offers</h5>
      <Items
        onChange={(idSelected) => setId(idSelected)}
        staycations={staycations}
      />
      <Tittle data={data} />
      <LayoutImg data={data} />
      <Desc desc={data[0].description} />
      <Amenities data={data[0].amenities} />
      <CheckIn />
    </div>
  );
};

export default Staycations;
