import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const InputItinerary = ({ data, onClickReset, className }) => {
  const items = data
    ? data.map((item, i) => {
        const dotClass =
          i === data.length - 1 ? "iit-dot iit-dot-last" : "iit-dot";
        return (
          <div key={"iit-item" + i} className="iit-item">
            <div className="iit-item-left">
              <div className={dotClass} />
              <label className="iit-desc">
                <label>{item.time}</label>
                {item.desc}
              </label>
            </div>
          </div>
        );
      })
    : null;

  return (
    <div className={"input-itinerary " + className}>
      <div className="iit-head">
        <label>Itinerary</label>
        <button className="btn-iit" onClick={onClickReset}>
          Reset
        </button>
      </div>
      <div className="iit-items">{data ? items : "There is no items"}</div>
    </div>
  );
};

InputItinerary.propTypes = {};

export default InputItinerary;
