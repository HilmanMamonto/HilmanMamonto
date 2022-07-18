import React from "react";
import PropTypes from "prop-types";

const Amenities = ({}) => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div>
      <h4 className="mb-5">Amenities</h4>
      <div className="mb-5 row row-cols-3 row-cols-md-4">
        {arr.map((item) => {
          return (
            <div key={item} className="mb-4">
              <img />
              <label>1</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
