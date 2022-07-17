import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Icons from "components/Icons";

const IconButton = ({
  type = "button",
  size = "medium",
  variant,
  className = "",
  onClick,
  hidden,
  disabled,
}) => {
  return (
    <button
      type={type}
      hidden={hidden}
      disabled={disabled}
      onClick={onClick}
      className={"btn-icon d-inline-block " + className}
    >
      <Icons size={size} variant={variant} />
    </button>
  );
};

IconButton.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
