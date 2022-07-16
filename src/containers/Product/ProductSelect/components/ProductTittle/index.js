import React from "react";
import Button from "components/Button";
import "./styles.scss";
import PropTypes from "prop-types";

const ProductTittle = ({
  tourName,
  maxPax,
  rate,
  sumOfReviews,
  locationSrc,
  location,
}) => {
  const handleClick = () => {};
  return (
    <div id="product-tittle">
      <div className="tittle-wraper">
        <div className="product-tittle-head">
          <label className="tittle">{tourName}</label>
          <span className="dot" />
          <label>
            max <span>{maxPax}</span> pax
          </label>
        </div>
        <div className="product-tittle-foot">
          <label>
            <img src="/bold-star.svg" alt="" />
            <Button type="a" href="/" children={rate} hasUnderline textGray />
          </label>
          <label>
            <img src="/person.svg" alt="" />
            <Button
              type="a"
              href="/"
              textGray
              children={"Reviews (" + sumOfReviews + ")"}
              hasUnderline
            />
          </label>
          <label>
            <img src="/location.svg" alt="" />
            <Button
              type="a"
              href={locationSrc}
              textGray
              children={location}
              hasUnderline
            />
          </label>
          <span>Only you and your group</span>
        </div>
      </div>
      <Button
        className="btn-save mt-auto"
        type="button"
        isBgWhite
        children={
          <div>
            <img src="/love-checked.svg" />
            <span>save</span>
          </div>
        }
        onClick={() => handleClick}
      />
    </div>
  );
};

export default ProductTittle;
