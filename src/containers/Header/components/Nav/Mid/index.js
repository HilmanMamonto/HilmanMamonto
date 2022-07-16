import Icons from "components/Icons";
import React from "react";
import "./styles.scss";

const NavMid = ({ id, className, onClick }) => {
  return (
    <div id={id} className={"nav-mid " + className}>
      <button
        type="button"
        className="btn-search fw-semibold"
        textLightGray
        onClick={onClick}
      >
        Where are you going?
      </button>
      <span />
      <button
        type="button"
        onClick={onClick}
        style={{
          width: "30px",
          height: "30px",
        }}
      >
        <Icons size="md" variant="search" />
      </button>
    </div>
  );
};

export default NavMid;
