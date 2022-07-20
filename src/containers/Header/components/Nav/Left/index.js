import Icons from "components/Icons";
import React from "react";
import { Link } from "react-router-dom";

const NavLeft = ({ className }) => {
  return (
    <div className={"nav-left " + className}>
      <Link className="d-flex align-items-center gap-2" to="/">
        <Icons variant="logo-secondary" size="xlarge" />
        <span className="pb-1 text-primary fs-4 fw-semibold">rotate</span>
      </Link>
    </div>
  );
};

export default NavLeft;
