import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const TimePicker = ({
  onChange,
  startDisabled,
  value,
  required,
  className,
}) => {
  const classes = {
    container: "time-picker " + className,
  };

  return (
    <div className={classes.container}>
      <div className="tp-items">
        <div className="tp-left">
          <input
            type="time"
            name="timeStart"
            value={value.timeStart}
            onChange={onChange}
            disabled={startDisabled}
            required={required}
          />
        </div>
        <div className="tp-center">-</div>
        <div className="tp-right">
          <input
            type="time"
            name="timeEnd"
            value={value.timeEnd}
            required={required}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

TimePicker.propTypes = {
  className: PropTypes.string,
  timeStart: PropTypes.string,
};

export default TimePicker;
