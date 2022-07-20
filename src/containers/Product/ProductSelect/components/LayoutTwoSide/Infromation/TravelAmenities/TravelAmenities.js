import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const TravelAmenities = ({ travelAmenities, travelAmenitiesNot, language }) => {
  return (
    <section id="amenities" className="amenities">
      <h4 className="mb-5">Amenities</h4>
      <div className="travel-amenities-items">
        <div className="items">
          {travelAmenities.map((item, i) => (
            <div className="item" key={"am" + i}>
              <img src={item.iconUrl} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <label>Not Include</label>
        <div className="items">
          {travelAmenitiesNot.map((item, i) => (
            <div className="item" key={"amn" + i}>
              <img src={item.iconUrl} alt="" />
              <span className="not-include-tittle">{item.name}</span>
            </div>
          ))}
        </div>
        <label>Language{language.length > 1 ? "s" : ""}</label>
        <div className="items-language">
          {language.map((item, i) => (
            <div key={"aml" + i}>
              <img src={item.iconUrl} alt="" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

TravelAmenities.propTypes = {
  travelAmenities: PropTypes.array.isRequired,
  travelAmenitiesNot: PropTypes.array.isRequired,
  language: PropTypes.array.isRequired,
};

export default TravelAmenities;
