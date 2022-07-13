import React from "react";
import PropTypes from "prop-types";

export const InputCheckbox = ({
  label,
  defaultChecked,
  value,
  name,
  onChange,
  className = "",
}) => {
  const classes = {
    wrapper: "input-control-checkbox d-flex gap-2 align-items-center ",
  };

  return (
    <div className={classes.wrapper + className}>
      <label>{label}</label>
      <input
        style={{ cursor: "pointer" }}
        type={"checkbox"}
        onChange={onChange}
        value={value}
        name={name}
        defaultChecked={defaultChecked}
      />
    </div>
  );
};

InputCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
};
