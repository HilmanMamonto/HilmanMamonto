import Button from "components/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const NavLeft = ({ className }) => {
  return (
    <div className={"nav-left " + className}>
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
