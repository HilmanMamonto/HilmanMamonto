import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Link } from "react-router-dom";

const variants = {
  image: "avatar-image ",
  text: "avatar-text ",
};

const shadows = {
  small: "shadow-s ",
  medium: "shadow-m ",
  large: "shadow-l ",
  "": "",
};

const sizes = {
  small: "avatar-small ",
  medium: "avatar-medium ",
  large: "avatar-large ",
  xlarge: "avatar-xlarge ",
  undefined: "",
};

const Avatar = ({
  onClick,
  shadow = "",
  src,
  className,
  variant = "image",
  size = "medium",
  as = "button",
  alt = "",
  text = "",
  href = "/",
  style,
}) => {
  const classes =
    "avatar " + variants[variant] + sizes[size] + shadows[shadow] + className;

  const item =
    variant === "image" ? (
      <img src={src} alt={alt} />
    ) : variant === "text" ? (
      text
    ) : (
      ""
    );

  const elements = {
    a: (
      <a onClick={onClick} style={style} className={classes} href={href}>
        {item}
      </a>
    ),
    button: (
      <button className={classes} style={style} onClick={onClick}>
        {item}
      </button>
    ),
    link: (
      <Link className={classes} style={style} to={href}>
        {item}
      </Link>
    ),
  };

  return elements[as];
};

Avatar.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  as: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  shadow: PropTypes.string,
};

export default Avatar;
