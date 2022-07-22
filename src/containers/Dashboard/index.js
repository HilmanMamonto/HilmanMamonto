import React from "react";
import DashboardContent from "./components/DasboardContent";
import SideBar from "./components/SideBar";
import "./styles.scss";

const Dashboard = () => {
  return (
    <div className="dashboard position-relative">
      <SideBar className="bottom-0" />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
