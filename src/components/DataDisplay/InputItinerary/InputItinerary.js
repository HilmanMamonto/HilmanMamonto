import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useEffect } from "react";

const InputItinerary = ({
  data = [],
  onClickReset,
  className,
  numOfTime = 0,
}) => {
  const ref = useRef();

  const items = data
    ? data.map((item, i) => {
        const dotClass =
          i === data.length - 1 ? "iit-dot iit-dot-last" : "iit-dot";
        return (
          <div key={"iit-item" + i} className="iit-item">
            <div className="iit-item-left">
              <div className={dotClass} />
              <label className="iit-desc">
                <label>
                  {item.timeStart} - {item.timeEnd}
                </label>
                {item.schedule}
              </label>
            </div>
          </div>
        );
      })
    : null;

  const classes = {
    container: "input-itinerary " + className,
  };

  return (
    <div className={classes.container}>
      <div className="iit-head">
        <label>
          Itinerary*
          <small className="text-black-50 ms-1">
            (Min and max are 8 hours), current num of time is {numOfTime}
          </small>
        </label>
        <button type="button" className="btn-iit" onClick={onClickReset}>
          Reset
        </button>
      </div>
      <div className="iit-items">{data ? items : "There is no items"}</div>
    </div>
  );
};

InputItinerary.propTypes = {
  data: PropTypes.array,
};

export default InputItinerary;
