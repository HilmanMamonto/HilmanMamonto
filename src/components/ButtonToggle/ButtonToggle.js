import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useState } from "react";

const sizes = {
  xsmall: "btn-toggle-xsmall ",
  small: "btn-toggle-small ",
  medium: "btn-toggle-medium ",
  large: "btn-toggle-large ",
};

const ButtonToggle = ({
  defaultValue,
  leftLabel = "leftLabel",
  rightLabel = "rightLabel",
  size,
}) => {
  const [toggle, setToggle] = useState(defaultValue);

  const className = "btn-toggle " + sizes[size];
  return (
    <div className={className}>
      <div className="toggle">
        <button
          className={!toggle ? "active" : ""}
          onClick={() => setToggle(false)}
        >
          {leftLabel}
        </button>
        <button
          className={toggle ? "active" : ""}
          onClick={() => setToggle(true)}
        >
          {rightLabel}
        </button>
      </div>
    </div>
  );
};

ButtonToggle.defaultProps = {
  defaultValue: true,
  size: "medium",
};

ButtonToggle.propTypes = {
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string,
  defaultValue: PropTypes.bool,
  size: PropTypes.string,
};

export default ButtonToggle;
