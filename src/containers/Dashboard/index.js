import AddPackage from "containers/AddPackage";
import React from "react";
import { useState } from "react";
import { useMatch } from "react-router-dom";
import DashboardContent from "./components/DasboardContent";
import SideBar from "./components/SideBar";
import "./styles.scss";

const Dashboard = () => {
  const matchAddPackage = useMatch("/dashboard/main/add-package");

  return (
    <div className="dashboard position-relative">
      <SideBar className="bottom-0" />
      <DashboardContent />
      {matchAddPackage && <AddPackage />}
    </div>
  );
};

export default Dashboard;
