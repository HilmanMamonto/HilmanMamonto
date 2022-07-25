import React from "react";

import "./styles.scss";
import IconButton from "components/IconButton/IconButton";
import Avatar from "components/Avatar/Avatar";

const SideBar = ({ className }) => {
  return (
    <div
      className={
        "sidebar d-flex flex justify-content-center flex-md-column gap-5 px-3 border-top py-4 bg-white " +
        className
      }
    >
      <IconButton
        className="d-flex justify-content-center align-items-center"
        as="link"
        to="/"
        variant="logo-secondary"
        size="large"
      />
      <IconButton
        as="link"
        to="/"
        className="d-flex sb-ic-item d-none d-md-flex"
        variant="home"
        size="large"
      />
      <IconButton
        className="d-flex sb-ic-item active"
        variant="dashboard"
        size="large"
        as="link"
        to="/dashboard"
      />
      <IconButton
        className="d-flex sb-ic-item"
        variant="bell"
        as="link"
        to="notifications"
        size="large"
      />
      <IconButton className="d-flex sb-ic-item" variant="bag" size="large" />
      <div className="d-flex justify-content-center">
        <Avatar src={"/andy/andy.jpg"} size="small" />
      </div>
    </div>
  );
};

export default SideBar;
