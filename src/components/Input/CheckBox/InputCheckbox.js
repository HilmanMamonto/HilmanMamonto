import React from "react";

export const InputCheckbox = ({ label, value, onChange, className = "" }) => {
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
      />
    </div>
  );
};
