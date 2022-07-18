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
