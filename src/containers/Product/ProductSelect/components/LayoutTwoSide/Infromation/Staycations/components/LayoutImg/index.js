import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const LayoutImg = ({ data }) => {
  const imgLeft = data[0].imagesUrl[0];
  const imgRight = data[0].imagesUrl[1];

  return (
    <figure className="img-staycation-choosed">
      <div className="left">
        <img src={imgLeft} alt={imgLeft} />
      </div>
      <div className="right">
        <img src={imgRight} alt={imgRight} />
      </div>
    </figure>
  );
};

LayoutImg.propTypes = {};

export default LayoutImg;
