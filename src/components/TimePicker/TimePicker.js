import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useDifferenceTime } from "components/utility/differenceTime";
import { useEffect } from "react";
import { useState } from "react";
import Icons from "components/Icons";
import { ANIMATE_BOUNCEIN } from "assets/animate/animate";

const icons = {
  valid: <Icons className={ANIMATE_BOUNCEIN} variant="checkmark" />,
  invalid: <Icons className={ANIMATE_BOUNCEIN} variant="warning" />,
};

const TimePicker = ({
  onChange,
  startDisabled,
  value,
  required,
  disabled,
  className,
  onValidate,
}) => {
  const [difTime, setDifTime] = useDifferenceTime();
  const [validate, setValidate] = useState({ validity: "", message: "" });

  const allValidate = {
    toShort: {
      validity: "invalid",
      message:
        "Too short, minimum 30 minutes after last time. Current num of time " +
        difTime,
    },
    toLong: {
      validity: "invalid",
      message:
        "Too long, maximum 3 hours after last time. Current num of time " +
        difTime,
    },
    valid: {
      validity: "valid",
      message:
        "Yuppss!, your time picker is correct. Current num of time " + difTime,
    },
    vallueMissing: {
      validity: "invalid",
      message: "both of input must to fill",
    },
  };

  // input validate checker
  useEffect(() => {
    setDifTime(value.timeStart, value.timeEnd);
    const hours = parseInt(difTime.split(":")[0]);
    const minutes = parseInt(difTime.split(":")[1]);

    if (hours === 0 && minutes < 30) setValidate(allValidate.toShort);

    if (hours < 3 && !(hours === 0 && minutes < 30))
      setValidate(allValidate.valid);

    if (value.timeStart === "" || value.timeEnd === "")
      setValidate(allValidate.vallueMissing);

    if (hours >= 3) setValidate(allValidate.toLong);
  }, [value.timeStart, value.timeEnd, difTime]);

  useEffect(() => {
    onValidate(validate.validity);
  }, [validate]);

  const handleChange = (e) => {
    const { type, name, value } = e.target;
    onChange({
      target: {
        type: type,
        name: name,
        value: value,
        validity: validate.validity,
      },
    });
  };

  return (
    <div className={className}>
      {difTime !== "00:00" && (
        <span className="time-picker-validity mb-2 d-flex justify-content-between align-items-center">
          <small
            className={validate.validity === "invalid" ? "text-danger" : ""}
          >
            {value.timeStart && value.timeEnd && validate.message}
          </small>
          {value.timeStart && value.timeEnd && icons[validate.validity]}
        </span>
      )}
      <div className="time-picker">
        <div className="tp-items">
          <div className="tp-left">
            <input
              type="time"
              name="timeStart"
              value={value.timeStart}
              disabled={startDisabled}
              required={required}
              onChange={handleChange}
            />
          </div>
          <div className="tp-center">-</div>
          <div className="tp-right">
            <input
              type="time"
              name="timeEnd"
              value={value.timeEnd}
              disabled={!value.timeStart || disabled}
              required={required}
              onChange={handleChange}
            />
          </div>
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
