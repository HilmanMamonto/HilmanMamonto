import { ANIMATE_FADEINDOWN } from "assets/animate/animate";
import ButtonToggle from "components/ButtonToggle/ButtonToggle";
import ChartBar from "components/DataDisplay/Charts/ChartBar/ChartBar";
import ChartLine from "components/DataDisplay/Charts/ChartLine/ChartLine";
import DahsboardList from "components/DataDisplay/DahsboardList/DahsboardList";
import WalletInfo from "components/DataDisplay/WalletInfo/WalletInfo";
import Icons from "components/Icons";
import React from "react";
import "./styles.scss";

const Dashboard = () => {
  const arr = [
    { name: "Fushimi inari taisha", trafic: "high", value: "+ 52.2%" },
    { name: "Fushimi inari taisha", trafic: "low", value: "+ 52.2%" },
    { name: "Fushimi inari taisha", trafic: "high", value: "+ 52.2%" },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between mb-5">
        <h1 className={"mb-0 " + ANIMATE_FADEINDOWN}>Welcome back, William</h1>
        <ButtonToggle leftLabel="Earn" rightLabel="Views" />
      </div>
      <div className="dashboard-items gap-4">
        <div className="w-100 d-flex flex-column gap-3 col col-sm-2">
          <WalletInfo value={500} className="w-100" />
          <div className="db-item-wrapper db-item-left d-flex flex-column gap-2 px-3 py-3 h-100 bg-white">
            {/* <Icons className="mb-2" variant="middle east" size="xlarge" /> */}
            <img src="/illustrations/illustration-hands.svg" alt="" />
            <span className="text-primary">
              Invite your friends and gets
              <span className="fw-semibold fs-5"> $25</span> to get gift
              together!
            </span>
          </div>
        </div>
        <div>
          <div className="dahsboard-charts gap-3 mb-3">
            <ChartLine className="db-item-wrapper" />
            <ChartBar className="db-item-wrapper" />
          </div>
          <div className="d-flex gap-3 flex-column">
            {arr.map((item) => {
              const trafic =
                item.trafic === "high"
                  ? "text-success"
                  : item.trafic === "low"
                  ? "text-danger"
                  : "";
              return (
                <DahsboardList
                  key={item}
                  name={item.name}
                  src="andy/andy.jpg"
                  mid={
                    <span className="d-flex align-items-center gap-2">
                      <Icons
                        className="opacity-50"
                        variant="eye"
                        size="large"
                      />
                      <span className="fw-semibold">230</span>
                    </span>
                  }
                  right={
                    <span className={"fw-semibold " + trafic}>
                      {item.value}
                    </span>
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
