import Icons from "components/Icons";
import React from "react";

const Amenities = ({ data }) => {
  return (
    <div className="travel-amenities">
      <h4 className="mb-5">Amenities</h4>
      <div className="mb-4 row row-cols-2 row-cols-sm-3 row-cols-md-4">
        {data.map((item, i) => {
          return (
            <div key={i} className="mb-5 d-flex gap-2 align-items-center">
              <Icons variant={item.iconName} size="large" />
              <label>{item.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
