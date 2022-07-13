import Icons from "components/Icons";
import React from "react";
import { useState } from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import { blockInvalidChar } from "./blockInvalidChar";
import { ANIMATE_BOUNCEIN } from "assets/animate/animate";
import { useInputValidate } from "components/utility/inputErrorInfo";
import { useEffect } from "react";

const iconMessage = {
  valid: <Icons className={ANIMATE_BOUNCEIN} variant="checkmark" />,
  invalid: <Icons className={ANIMATE_BOUNCEIN} variant="warning" />,
};

const leftIcons = {
  budget: (
    <div className="icon-dollar">
      <Icons variant="dollar" />
    </div>
  ),
};

export const Input = ({
  leftIcon,
  className,
  type,
  label,
  name,
  min,
  max,
  minLength,
  maxLength,
  placeholder,
  onChange,
  value,
  required,
}) => {
  const [focus, setFocus] = useState("");
  const [validate, setValidate] = useInputValidate();

  const handleChange = (e) => {
    setValidate(e);
    onChange(e);
  };

  const invalidChar = type === "number" ? blockInvalidChar : null;

  const classes = {
    container: "input-control " + className,
    wrapper:
      "wrapper border d-flex py-2 px-3 align-items-center gap-2 rounded " +
      focus +
      " " +
      validate.validity,
  };

  return (
    <div className={classes.container}>
      <label className="mb-1" htmlFor={name}>
        {label} {required && "*"}
      </label>
      <div className={classes.wrapper}>
        {leftIcons[leftIcon]}
        <input
          onKeyDown={invalidChar}
          onInvalid={(e) => setValidate(e)}
          type={type}
          onFocus={() => setFocus("focus")}
          onBlur={() => setFocus("")}
          name={name}
          value={value}
          minLength={minLength}
          maxLength={maxLength}
          min={min}
          max={max}
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
        />
        {iconMessage[validate.validity]}
      </div>
      {validate && <small>{validate.message}</small>}
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
};
