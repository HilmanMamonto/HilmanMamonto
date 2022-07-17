import React from "react";
import PropTypes from "prop-types";
import HeaderCategories from "containers/Header/components/Categories";
import "./styles.scss";
import Icons from "components/Icons";
import Bottom from "./components/Bottom/Bottom";
import { useState } from "react";
import { useEffect } from "react";

const HeaderMobile = ({ className, hasCategories }) => {
  const [active, setActive] = useState(false);

  const body = document.querySelector("body");

  useEffect(() => {
    if (active) body.style = "overflow : hidden";
    if (!active) body.style = "overflow : auto";
  }, [active]);

  return (
    <div className={"header-mobile-wrapper " + className}>
      <div className="container header-mobile">
        <button
          type="button"
          className="d-flex gap-4 items px-4  border shadow-sm"
          onClick={() => setActive(!active)}
        >
          <Icons variant="search" size="large" />
          <div className="d-flex align-items-start flex-column">
            <span>Where are you going?</span>
            <div className="d-flex align-items-center gap-2">
              <small>Anywhere</small>
              <span className="dot"></span>
              <small>Anytime</small>
              <span className="dot"></span>
              <small>Up to 9 people</small>
            </div>
          </div>
        </button>
      </div>
      {hasCategories && <HeaderCategories />}
      <Bottom isActive={active} onClick={() => setActive(false)} />
    </div>
  );
};

HeaderMobile.propTypes = {};

export default HeaderMobile;
