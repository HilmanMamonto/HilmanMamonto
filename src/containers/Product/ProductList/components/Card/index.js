import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Button from "components/Button";
import ButtonRounded from "components/ButtonRounded/ButtonRounded";
import { Link } from "react-router-dom";

const ProductCard = ({
  imagesUrl = [],
  tittle,
  id,
  rate,
  date,
  budget,
  location,
}) => {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(1);
  const [toggleBtn, setToggleBtn] = useState(false);

  const handlePrev = () => {
    if (current > 1) {
      scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
      setCurrent(current - 1);
    }
  };

  const handleNext = () => {
    if (current < imagesUrl.length) {
      scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
      setCurrent(current + 1);
    }
  };

  const btnActivate = toggleBtn ? "active" : "";

  return (
    <div id="product-card">
      <div
        className="pictures"
        onMouseOver={() => setToggleBtn(true)}
        onMouseOut={() => setToggleBtn(false)}
      >
        <ButtonRounded
          hidden={imagesUrl.length === 1}
          onClick={handlePrev}
          className={"btn-prev " + btnActivate}
          variant="prev"
        />
        <ButtonRounded
          hidden={imagesUrl.length === 1}
          onClick={handleNext}
          className={"btn-next " + btnActivate}
          variant="next"
        />
        <Link to={"product/" + id}>
          <div className="images" ref={scrollRef}>
            <img src={imagesUrl[0].url} alt="" />
            <img src={imagesUrl[0].url} alt="" />
            <img src={imagesUrl[0].url} alt="" />
            <img src={imagesUrl[0].url} alt="" />
          </div>
        </Link>
        <div className="card-dots">
          {imagesUrl.length > 1 &&
            imagesUrl.map((item, i) => {
              const act = current === i + 1 ? "active" : "";
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
