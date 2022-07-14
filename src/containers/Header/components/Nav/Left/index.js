import Button from "components/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const NavLeft = () => {
  return (
    <div className="nav-left">
      <Link to="/">
        <label>
          Rotate
          <span />
        </label>
      </Link>
    </div>
  );
};

export default NavLeft;
