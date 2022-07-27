import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useState } from "react";
import SliderCard from "components/DataDisplay/SliderCard/SliderCard";

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
  const [current, setCurrent] = useState(0);

  return (
    <div className={"product-card " + className}>
      <div className="pictures ">
        <SliderCard variant="counter" onChange={(c) => setCurrent(c)} gap={0}>
          {imagesUrl.map((item, i) => {
            return (
              <a key={i} className="picture" href={"/product/" + id}>
                <img src={item.url} alt={item.url}></img>
              </a>
            );
          })}
        </SliderCard>
        <div className="card-dots">
          {imagesUrl.length > 1 &&
            imagesUrl.map((item, i) => {
              const act = i === current ? "active " : "";
              return (
                <span key={"dot " + i} className={"dot bg-white " + act} />
              );
            })}
        </div>
      </div>
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
