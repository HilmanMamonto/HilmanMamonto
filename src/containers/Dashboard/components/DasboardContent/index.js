import AddPackage from "containers/AddPackage";
import React from "react";
import { useMatch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Notifications from "./components/Notifications/Notifications";
import "./styles.scss";

const DashboardContent = ({ className }) => {
  const matchDashboard = useMatch("/dashboard/main/*");
  const matchNotifications = useMatch("/dashboard/notifications");

  const classContent = "dashboard-content py-5 px-2 p-md-5 " + className;

  if (matchDashboard) {
    return (
      <div className={classContent}>
        <Dashboard />
      </div>
    );
  }
  if (matchNotifications) {
    return (
      <div className={classContent}>
        <Notifications />
      </div>
    );
  }
};

export default DashboardContent;
