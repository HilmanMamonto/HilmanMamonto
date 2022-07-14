import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Button from "components/Button";
import ButtonRounded from "components/ButtonRounded/ButtonRounded";
import { useEffect } from "react";
import { useState } from "react";

const shadows = {
  small: "shadow-sm ",
  medium: "shadow-md ",
  large: "shadow-lg ",
  undefined: " ",
};

const HeaderCategories = ({ className = "", shadow, shadowYShowed }) => {
  const ref = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = (param) => {
    if (param === "next") ref.current.scrollLeft += 200;
    if (param === "prev") ref.current.scrollLeft -= 200;
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
    });
    return () => document.removeEventListener("scroll", () => {});
  }, []);

  const classes = {
    shadow: scrollPos >= shadowYShowed && shadows[shadow],
  };

  return (
    <div className={"header-categories bg-white " + classes.shadow + className}>
      <div className="wrapper container d-flex align-items-center">
        <ButtonRounded
          onClick={() => handleScroll("prev")}
          className="btn-arrow left ms-2"
          variant="prev"
        />
        <ButtonRounded
          onClick={() => handleScroll("next")}
          className="btn-arrow right me-2"
          variant="next"
        />
        <div className="container categories-items d-flex p-0  gap-5" ref={ref}>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="balloon.svg" alt="" />
            <span>ballon</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
          <div className="item">
            <img src="booating.svg" alt="" />
            <span>Booating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderCategories.propTypes = {
  isActive: PropTypes.bool,
};

export default HeaderCategories;
