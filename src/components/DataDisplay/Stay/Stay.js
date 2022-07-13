import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Stay = ({
  tittle,
  location,
  budget,
  rate,
  reviews,
  value,
  src,
  onChange,
  defaultChecked,
}) => {
  return (
    <div className="stay">
      <div className="st-items">
        <img className="stay-img" src={src} alt={tittle} />
        <div>
          <h5>{tittle}</h5>
          <span className="d-block">{location}</span>
          <label>${budget} / night</label>
          <div className="st-foot">
            <span className="me-2">{rate}</span>
            <span>Reviews({reviews})</span>
          </div>
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          name={tittle}
          value={value}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

Stay.propTypes = {
  tittle: PropTypes.string,
  location: PropTypes.string,
  src: PropTypes.string,
  budget: PropTypes.number,
  reviews: PropTypes.number,
  defaultChecked: PropTypes.bool,
};

export default Stay;
