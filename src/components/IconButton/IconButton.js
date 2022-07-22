import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Icons from "components/Icons";
import { Link } from "react-router-dom";

const IconButton = ({
  type = "button",
  size = "medium",
  variant,
  className = "",
  onClick,
  hidden,
  disabled,
  as = "button",
  to = "/",
}) => {
  if (as === "button") {
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
  }

  if (as === "link") {
    return (
      <Link className={className} to={to}>
        <Icons size={size} variant={variant} />
      </Link>
    );
  }
};

IconButton.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
