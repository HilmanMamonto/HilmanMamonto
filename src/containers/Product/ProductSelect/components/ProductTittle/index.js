import React from "react";
import "./styles.scss";
import Icons from "components/Icons";
import Reviewer from "../Reviews/components/Reviewer/Reviewer";
import Reviews from "../Reviews";

const ProductTittle = ({
  tourName,
  maxPax,
  rate,
  locationSrc,
  location,
  id = "",
  reviews,
}) => {
  return (
    <div id={id} className="d-none d-md-flex product-tittle mb-4">
      <div className="tittle-wraper">
        <div className="mb-2 d-inline-flex gap-2">
          <h4 className="mb-0">{tourName}</h4>
          <span className="dot mt-1" />
          <span className="align-self-end">
            max <span>{maxPax}</span> pax
          </span>
        </div>
        <div className="gap-2 product-tittle-foot">
          <label>
            <img src="/bold-star.svg" alt="" />
            <a href="#reviews">{rate}</a>
          </label>
          <label>
            <img src="/person.svg" alt="" />
            <a href="#reviews">Reviews ( {reviews.length} )</a>
          </label>
          <label>
            <img src="/location.svg" alt="" />
            <a href={locationSrc}>{location}</a>
          </label>
          <span>Only you and your group</span>
        </div>
      </div>
      <button
        className="d-flex align-items-center btn-save px-2 py-1 mt-auto"
        onClick={() => ""}
      >
        <Icons variant="heart-fill" />
        <small className="ms-2">save</small>
      </button>
    </div>
  );
};

export default ProductTittle;
