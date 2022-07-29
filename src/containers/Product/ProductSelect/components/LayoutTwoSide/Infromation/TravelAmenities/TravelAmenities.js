import React from "react";
import "./styles.scss";
import Icons from "components/Icons";

const TravelAmenities = ({ travelAmenities, travelAmenitiesNot, language }) => {
  return (
    <section id="amenities" className="amenities">
      <h4 className="mb-5">Amenities</h4>
      <div>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
          {travelAmenities.map((item, i) => (
            <div className="mb-4 d-flex gap-3 align-items-center" key={i}>
              <Icons size="large" variant={item.iconName} />
              <span className="fs-6">{item.name}</span>
            </div>
          ))}
        </div>
        <label className="mb-2 fs-5 fw-semibold">Not Include</label>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
          {travelAmenitiesNot.map((item, i) => (
            <div
              className="mb-4 d-flex gap-3 align-items-center"
              key={"amn" + i}
            >
              <Icons size="large" variant={item.iconName} alt="" />
              <span className="text-decoration-line-through fs-6">
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <label className="mb-2 fs-5 fw-semibold">
          Language{language.length > 1 ? "s" : ""}
        </label>
        <div className="items-language">
          {language.map((item, i) => (
            <div key={"aml" + i}>
              <img src={item.iconName} alt="" />
              <span className="fs-6">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelAmenities;
