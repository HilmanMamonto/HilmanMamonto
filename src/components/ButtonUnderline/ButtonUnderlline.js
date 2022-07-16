import React from "react";
import "./styles.scss";

const ButtonUnderlline = ({
  label = "label",
  onClick,
  isActive,
  className,
}) => {
  const classes = {
    activate: isActive ? "active " : "",
  };

  return (
    <button
      type="button"
      className={"btn-has-underline pb-1 " + classes.activate + className}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonUnderlline;
