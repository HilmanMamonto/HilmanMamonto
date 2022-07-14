import React from "react";
import { useMatch } from "react-router-dom";
import Package from "./components/Package";
import Table from "./components/Table/Table";
import "./styles.scss";

const DashboardContent = () => {
  const matchDashboard = useMatch("/dashboard");
  const matchPackages = useMatch("/dashboard/packages/*");

  const content = matchPackages ? <Package /> : <Table />;

  return <div id="dashboard-content">{content}</div>;
};

export default DashboardContent;
