import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Icons from "components/Icons";
import Avatar from "components/Avatar/Avatar";

const NavMobile = ({ className }) => {
  return (
    <div
      className={
        "nav-mobile container d-flex justify-content-center align-items-center gap-5 " +
        className
      }
    >
      <button className="d-flex flex-column align-items-center gap-1">
        <Icons variant="search" />
        <span>search</span>
      </button>
      <button className="d-flex flex-column align-items-center gap-1">
        <Icons variant="search" />
        <span>search</span>
      </button>
      <button className="d-flex flex-column align-items-center gap-1">
        <Avatar size="small" />
        <span>Profile</span>
      </button>
    </div>
  );
};

NavMobile.propTypes = {};

export default NavMobile;
