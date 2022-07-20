import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useScrollPos } from "components/utility/scrollPos";
import Slide from "components/DataDisplay/Slide/Slide";
import Icons from "components/Icons";

const HeaderCategories = ({ className = "" }) => {
  const { scrollPos } = useScrollPos();

  const classes = {
    shadow: scrollPos >= 18 ? "shadow-sm " : "",
  };

  const arr = [
    "mountain",
    "pool",
    "beach",
    "dive",
    "watter-fall",
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  return (
    <div className={"header-categories " + classes.shadow + className}>
      <Slide interval="sm" gap={5} className="container categories-items">
        {arr.map((item) => {
          return (
            <a
              href="/"
              className="hc-item d-flex h-100 align-items-center justify-content-center flex-column gap-1"
              key={item}
            >
              <Icons className="hc-icon" variant={item} size="large" />
              <small>{item}</small>
            </a>
          );
        })}
      </Slide>
    </div>
  );
};

HeaderCategories.propTypes = {
  isActive: PropTypes.bool,
};

export default HeaderCategories;
