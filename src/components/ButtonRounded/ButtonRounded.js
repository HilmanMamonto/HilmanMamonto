import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const sizes = {
  small: "btn-rounded-small ",
  medium: "btn-rounded-medium ",
};

const variants = {
  next: "/icons/arrow-right.svg",
  prev: "/icons/arrow-left.svg",
};

const ButtonRounded = ({
  hidden,
  variant,
  type = "button",
  size,
  className,
  onClick,
}) => {
  const classes = "btn-rounded bg-white border " + sizes[size] + className;
  return (
    <button hidden={hidden} type={type} className={classes} onClick={onClick}>
      <img
        className="btn-rounded-icon"
        src={variants[variant]}
        alt="btn-rounded"
      />
    </button>
  );
};

ButtonRounded.defaultProps = {
  size: "medium",
  variant: "next",
};

ButtonRounded.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonRounded;
