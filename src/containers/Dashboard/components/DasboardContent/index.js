import React from "react";
import { useMatch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import "./styles.scss";

const DashboardContent = ({ className }) => {
  const matchDashboard = useMatch("/dashboard");
  const matchPackages = useMatch("/dashboard/packages/*");

  const classContent = "dashboard-content py-5 px-2 p-md-5 " + className;

  if (matchDashboard) {
    return (
      <div className={classContent}>
        <Dashboard />
      </div>
    );
  }
  if (matchPackages) {
    return <div className={classContent}>{/* <Package /> */}</div>;
  }
};

export default DashboardContent;
