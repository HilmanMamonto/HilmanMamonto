import React, { useState, useRef, useEffect } from "react";
import HeaderBottom from "./components/HeaderBottom";
import HeaderCategories from "./components/Categories";
import NavLeft from "./components/Nav/Left";
import NavRight from "./components/Nav/Right";
import NavMid from "./components/Nav/Mid";
import PropTypes from "prop-types";
import "./styles.scss";

const Header = ({ hasCategories }) => {
  const [isShowed, setIsShowed] = useState(false);
  const refHeader = useRef(null);
  const refInput = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (e) => {
    if (
      refHeader &&
      !refHeader.current.contains(e.target) &&
      !refInput.current.contains(e.target)
    ) {
      setIsShowed(false);
    }
  };

  return (
    <div className="headers">
      <header className="d-flex align-items-center bg-white">
        <nav className="container ">
          <div className="row">
            <div className="col">
              <NavLeft />
            </div>
            <div className="col">
              <NavMid ref={refHeader} onClick={() => setIsShowed(!isShowed)} />
            </div>
            <div className="col">
              <NavRight />
            </div>
          </div>
        </nav>
        <HeaderBottom isActive />
      </header>
      {hasCategories && <HeaderCategories />}
    </div>
  );
};

Header.propTypes = {
  hasCategories: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default Header;
