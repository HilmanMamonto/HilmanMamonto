import React, { useState, useRef, useEffect } from "react";
import HeaderBottom from "./components/HeaderBottom";
import HeaderCategories from "./components/Categories";
import NavLeft from "./components/Nav/Left";
import NavRight from "./components/Nav/Right";
import NavMid from "./components/Nav/Mid";
import PropTypes from "prop-types";
import "./styles.scss";

const Header = ({ hasCategories, className }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (e) => {
    const { className } = e.target;

    if (className === "bg-black-transparent") {
      setShow(false);
    }
  };

  const classes = {
    activate: show ? "active " : "",
    navLeft: "col d-flex col-sm-1 col-md-2 col-lg align-items-center",
    navMid: "col-mid  col d-flex justify-content-center align-items-center ",
  };

  return (
    <div ref={ref} className={"headers " + className}>
      <header className="d-flex align-items-center bg-white">
        <nav className="container ">
          <div className="row">
            <div className={classes.navLeft}>
              <NavLeft />
            </div>
            <div className={classes.navMid + classes.activate}>
              <NavMid
                className={"mid " + classes.activate}
                onClick={() => setShow(!show)}
              />
            </div>
            <div className="col">
              <NavRight />
            </div>
          </div>
        </nav>
        <HeaderBottom isActive={show} />
      </header>
      {hasCategories && <HeaderCategories />}
      {show && <div className="bg-black-transparent" />}
    </div>
  );
};

Header.propTypes = {
  hasCategories: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default Header;
