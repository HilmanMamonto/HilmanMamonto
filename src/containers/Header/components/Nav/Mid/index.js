import IconButton from "components/IconButton/IconButton";
import Icons from "components/Icons";
import React from "react";
import "./styles.scss";

const NavMid = ({ className, hidden, onClick }) => {
  return (
    <div hidden={hidden} className={"nav-mid " + className}>
      <button
        type="button"
        className="btn-search fw-semibold"
        onClick={onClick}
      >
        Where are you going?
      </button>
      <span />
      <IconButton onClick={onClick} size="large" variant="search" />
    </div>
  );
};

export default NavMid;
