import ButtonToggle from "components/ButtonToggle/ButtonToggle";
import ChartBar from "components/DataDisplay/Charts/ChartBar/ChartBar";
import ChartLine from "components/DataDisplay/Charts/ChartLine/ChartLine";
import WalletInfo from "components/DataDisplay/WalletInfo/WalletInfo";
import Icons from "components/Icons";
import React from "react";
import "./styles.scss";

const Dashboard = () => {
  return (
    <div>
      <div className="d-flex justify-content-between mb-5">
        <h1 className="mb-0">Welcome back, William</h1>
        <ButtonToggle leftLabel="Earn" rightLabel="Views" />
      </div>
      <div className="dashboard-items gap-4">
        <div className="w-100 d-flex flex-column gap-3 col col-sm-2">
          <WalletInfo value={500} className="w-100" />
          <div className="d-flex flex-column gap-4 px-3 py-4 shadow rounded h-100 bg-white">
            <Icons className="mb-2" variant="middle east" size="xlarge" />
            <span>Invite your friends and gets $25 to get gift together!</span>
          </div>
        </div>
        <div className="dahsboard-charts gap-3">
          <ChartLine />
          <ChartBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
