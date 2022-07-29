import React from "react";
import PropTypes from "prop-types";
import SliderCard from "components/DataDisplay/SliderCard/SliderCard";
import { Link } from "react-router-dom";

const ProductCard = ({
  imagesUrl = [],
  tittle,
  rate,
  date,
  budget,
  location,
  className = "",
  id,
}) => {
  return (
    <div className={"product-card " + className}>
      <SliderCard>
        {imagesUrl.map((item, i) => {
          return (
            <Link
              key={i}
              style={{ minWidth: "100%" }}
              to={"product/?product=" + id}
            >
              <img src={item.url} alt={item.url}></img>
            </Link>
          );
        })}
      </SliderCard>
      <div className="description">
        <div className="d-flex justify-content-between align-items center mt-2">
          <span className="m-0 text-body fw-bold">{tittle}</span>
          <span className="fw-semibold text-body fs-6">{rate}</span>
        </div>
        <span>{location}</span>
        <small className="text-black-50 d-block fw-normal">{date}</small>
        <div className="d-inline-block">
          <span className="fw-semibold">${budget}</span>
          <small> / person</small>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  tittle: PropTypes.string,
};

export default ProductCard;
