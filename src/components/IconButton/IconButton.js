import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Icons from "components/Icons";

const sizes = {
  xs: "btn-ic-xsmall ",
  sm: "btn-ic-small ",
  md: "btn-ic-medium ",
  lg: "btn-ic-large ",
  xl: "btn-ic-xlarge ",
  undefined: "",
};

const IconButton = ({
  type = "button",
  size = "md",
  variant,
  className,
  onClick,
}) => {
  const classContainer = sizes[size] + className;

  return (
    <button type={type} onClick={onClick} className={classContainer}>
      <Icons variant={variant} />
    </button>
  );
};

IconButton.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
