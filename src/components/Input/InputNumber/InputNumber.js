import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { blockInvalidChar } from "./blockInvalidChar";
import { useEffect } from "react";
import { useState } from "react";
import Icons from "components/Icons";

const sizes = {
  small: "inum-small ",
  medium: "inum-medium ",
  large: "inum-large ",
  undefined: "",
};

const iconStatus = {
  success: <Icons className="ml-xs" variant="checkmark" />,
  warning: <Icons className="ml-xs" variant="warning" />,
};

const InputNumber = ({
  onChange,
  label,
  size,
  min,
  max,
  value,
  name,
  required,
}) => {
  const [focus, setFocus] = useState("");
  const [status, setStatus] = useState("");
  const refInput = useRef();
  const classContainer = "input-number " + sizes[size];

  useEffect(() => {
    if (refInput && focus === "focus") {
      refInput.current.focus();
    }
  }, [focus]);

  const handleChange = (e) => {
    onChange(e.target.value);
    validity();
  };

  const validity = () => {
    if (!refInput.current.checkValidity()) setStatus("warning");
    if (refInput.current.checkValidity()) setStatus("success");
  };

  return (
    <div className={classContainer}>
      {label && (
        <label className="inum-label">
          {label}
          {required && <span> * </span>}
        </label>
      )}
      <div className="inum-wrapper">
        <input
          ref={refInput}
          type="number"
          onKeyDown={blockInvalidChar}
          required={required}
          onFocus={() => setFocus("focus")}
          onBlur={() => setFocus("")}
          min={min}
          max={max}
          name={name}
          value={value}
          onSubmit={() => ""}
          onChange={handleChange}
        />
        {iconStatus[status]}
      </div>
    </div>
  );
};

InputNumber.defaultProps = {
  size: "medium",
  min: 1,
};

InputNumber.propTypes = {
  size: PropTypes.string,
  status: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  required: PropTypes.bool,
  status: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default InputNumber;
