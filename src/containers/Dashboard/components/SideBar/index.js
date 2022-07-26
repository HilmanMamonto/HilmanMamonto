import React from "react";
import "./styles.scss";
import IconButton from "components/IconButton/IconButton";
import Avatar from "components/Avatar/Avatar";
import { useMatch } from "react-router-dom";

const SideBar = ({ className }) => {
  const matchDashboard = useMatch("/dashboard/main/*");
  const matchNotifications = useMatch("/dashboard/notifications");

  const activate = {
    dashboard: matchDashboard ? "active " : "",
    notifications: matchNotifications ? "active " : "",
  };
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
        className="d-flex sb-ic-item d-none d-md-flex "
        variant="home"
        size="large"
      />
      <IconButton
        className={"d-flex sb-ic-item " + activate.dashboard}
        variant="dashboard"
        size="large"
        as="link"
        to="main"
      />
      <IconButton
        className={"d-flex sb-ic-item " + activate.notifications}
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
