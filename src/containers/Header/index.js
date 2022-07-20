import React from "react";
import HeaderBottom from "./components/HeaderBottom/HeaderBottom";
import HeaderCategories from "./components/Categories";
import NavLeft from "./components/Nav/Left";
import NavRight from "./components/Nav/Right";
import NavMid from "./components/Nav/Mid";
import PropTypes from "prop-types";
import "./styles.scss";
import HeaderMobile from "containers/HeaderMobile/HeaderMobile";
import { useClickOutside } from "components/utility/clickOutside";

const Header = ({ hasCategories, className, hidden }) => {
  const { show, ref, onToggle } = useClickOutside();

  const classes = {
    navLeft: "d-flex col-sm-1 col-md-2 col-lg align-items-center",
    navMid: "d-flex col-sm-3 col-md-5 col-lg align-items-center",
    navRight: "col-sm-5 col-lg-4",
  };

  return (
    <div hidden={hidden}>
      <div className={"headers " + className}>
        <header
          ref={ref}
          className="d-none d-sm-none d-md-flex align-items-center bg-white"
        >
          <nav className="container ">
            <div className="row row-cols-3">
              <NavLeft className={classes.navLeft} />
              <NavMid
                hidden={show}
                className={classes.navMid}
                onClick={onToggle}
              />
              <NavRight className={classes.navRight} />
            </div>
          </nav>
          <HeaderBottom isActive={show} />
        </header>
        <HeaderMobile className="d-sm-flex d-md-none" />
        {hasCategories && <HeaderCategories />}
        {show && <div className="bg-black-transparent" />}
      </div>
    </div>
  );
};

Header.propTypes = {
  hasCategories: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default Header;
