import Icons from "components/Icons";
import React from "react";
import { useState } from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import { blockInvalidChar } from "./blockInvalidChar";
import { ANIMATE_BOUNCEIN } from "assets/animate/animate";
import { useError } from "components/utility/inputErrorInfo";

const iconStatus = {
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

const types = {
  text: "text",
  number: "number",
  undefined: "text",
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
  const [errInfo, setErrInfo] = useError();

  const handleChange = (e) => {
    setErrInfo(e);
    onChange(e);
  };

  const invalidChar = type === "number" ? blockInvalidChar : null;

  return (
    <div className={"input-control " + className}>
      <label htmlFor={name}>
        {label} {required ? "*" : "(optional)"}
      </label>
      <div className={"wrapper " + focus + " " + errInfo.validity}>
        {leftIcons[leftIcon]}
        <input
          onKeyDown={invalidChar}
          type={types[type]}
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
        {iconStatus[errInfo.validity]}
      </div>
      {errInfo && <small>{errInfo.info}</small>}
    </div>
  );
};

Input.defaultProps = {
  min: 0,
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
