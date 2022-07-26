import React from "react";
import PropTypes from "prop-types";
import Loading from "components/Loading/Loading";
import Icons from "components/Icons";
import "./styles.scss";

const variants = {
  contained: "btn-contained ",
  outline: "btn-outline ",
  text: "btn-text ",
  "": "",
};

const sizes = {
  xsmall: "px-3 py-1 ",
  small: "px-3 py-1 fs-6 ",
  medium: "px-4 py-1 fs-5 ",
  large: "px-4 py-2 fs-5 ",
};

const colors = {
  primary: "btn-primary ",
  secondary: "btn-secondary ",
  gray: "btn-gray ",
  lightGray: "btn-light-gray",
};

const loadingSizes = {
  xsmall: "small",
  small: "small",
  medium: "small",
  large: "medium",
};

const justify = {
  center: "justify-content-center ",
  "space-between": "justify-content-between ",
  "": "",
};

const iconSizes = {
  small: "large",
  medium: "large",
  large: "xlarge",
};

const Button = ({
  className = "",
  variant = "contained",
  label = "button",
  as = "button",
  size = "medium",
  color = "primary",
  type = "button",
  href,
  onClick,
  leftIcon,
  rightIcon,
  disabled,
  fullWidth,
  loading,
  justifyContent = "",
  loadingIndicator,
  hidden,
}) => {
  const styles = {
    width: fullWidth ? "100%" : "",
  };

  const classContainer =
    "btn d-flex align-items-center gap-2 " +
    variants[variant] +
    sizes[size] +
    colors[color] +
    justify[justifyContent] +
    className;

  const rightIcons = {
    "btn-rounded": (
      <Icons size={iconSizes[size]} variant="arrow-right-white-rounded" />
    ),
  };

  const loadings = {
    left: <Loading size={loadingSizes[size]} color="white" />,
    right: <Loading size={loadingSizes[size]} color="white" />,
  };

  const lIcon = <div className="left-icon">{leftIcon}</div>;
  const leftIc = leftIcon && loading ? loadings.left : leftIcon ? lIcon : null;

  const rightIc =
    rightIcon && loading
      ? loadings.left
      : rightIcon
      ? rightIcons[rightIcon]
      : null;
  const labelItem = loading && loadingIndicator ? loadingIndicator : label;
  const itemsClass =
    "d-flex align-items-center gap-2 w-100 " + justify[justifyContent];

  const elements = {
    a: (
      <a
        style={styles}
        className={classContainer}
        href={href}
        onClick={onClick}
        disabled={disabled}
        hidden={hidden}
      >
        <div className={itemsClass}>
          {leftIc}
          <span>{labelItem}</span>
          {rightIc}
        </div>
      </a>
    ),
    button: (
      <button
        type={type}
        style={styles}
        className={classContainer}
        onClick={onClick}
        disabled={disabled}
        hidden={hidden}
      >
        <div className={itemsClass}>
          {leftIc}
          <span>{labelItem}</span>
          {rightIc}
        </div>
      </button>
    ),
  };

  return elements[as];
};

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  as: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  shadow: PropTypes.string,
  loading: PropTypes.bool,
  color: PropTypes.string,
  justifyContent: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  loadingIndicator: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
