import IconButton from "components/IconButton/IconButton";
import Icons from "components/Icons";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const HeaderMobile = () => {
  return (
    <header className="ps-header-mobile w-100 d-flex d-md-none align-items-center shadow-sm position-absolute bg-white">
      <div className="container-sm d-flex justify-content-between">
        <Link to="/">
          <Icons variant="arrow-left" size="large" />
        </Link>
        <IconButton variant="heart-fill" size="large" />
      </div>
    </header>
  );
};

export default HeaderMobile;
