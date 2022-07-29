import React from "react";
import "./styles.scss";
import Icons from "components/Icons";
import { Link } from "react-router-dom";

const NavMobile = ({ className = "" }) => {
  return (
    <div className={"nav-mobile mx-0 px-4 w-100 row row-cols-3 " + className}>
      <button className="d-flex flex-column justify-content-center align-items-center gap-1">
        <Icons size="large" variant="logo-secondary" />
        <span>Home</span>
      </button>
      <Link
        to="/tour-guide"
        className="d-flex flex-column justify-content-center align-items-center gap-1"
      >
        <Icons size="large" variant="camera" />
        <span className="text-nowrap">Tour Guide</span>
      </Link>
      <Link
        className="d-flex flex-column justify-content-center align-items-center gap-1"
        to="/dashboard/main"
      >
        <Icons variant="dashboard" size="large" />
        <span>Dashboard</span>
      </Link>
    </div>
  );
};

NavMobile.propTypes = {};

export default NavMobile;
