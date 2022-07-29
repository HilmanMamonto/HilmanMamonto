import { ANIMATE_FADEINDOWN, ANIMATE_FADEINUP } from "assets/animate/animate";
import ChartBar from "components/DataDisplay/Charts/ChartBar/ChartBar";
import ChartLine from "components/DataDisplay/Charts/ChartLine/ChartLine";
import DahsboardList from "components/DataDisplay/DahsboardList/DahsboardList";
import WalletInfo from "components/DataDisplay/WalletInfo/WalletInfo";
import Icons from "components/Icons";
import Button from "components/NewButton/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Dashboard = () => {
  const arr = [
    {
      name: "Dubai",
      trafic: "high",
      value: "+ 52.2%",
      imageUrl: "/product-list/dubai.jpg",
    },
    {
      name: "Giza",
      trafic: "low",
      value: "- 52.2%",
      imageUrl: "/product-list/giza.jpg",
    },
    {
      name: "Petra",
      trafic: "high",
      value: "+ 52.2%",
      imageUrl: "/product-list/petra.jpg",
    },
  ];

  return (
    <div>
      <div className="d-flex flex-column px-4 px-sm-0  flex-lg-row gap-3 justify-content-between mb-5">
        <h1 className={"mb-0 " + ANIMATE_FADEINDOWN}>Welcome back, William</h1>
        <Link to={"main/add-package"}>
          <Button fullWidth label="add a package" color="secondary" />
        </Link>
      </div>
      <div className="dashboard-items px-4 px-sm-0 gap-4 mb-5 mb-lg-0">
        <div className="w-100 mb-4 mb-lg-0 d-flex flex-column gap-3 col col-sm-2">
          <WalletInfo className={"w-100 " + ANIMATE_FADEINUP} value={500} />
          <div
            className={
              "db-item-wrapper db-item-left d-flex flex-column gap-2 px-3 py-3 h-100 bg-white " +
              ANIMATE_FADEINUP
            }
            style={{ animationDelay: "0.3s" }}
          >
            <img
              className="db-illustration"
              src="/illustrations/illustration-hands.svg"
              alt=""
            />
            <span className="text-primary mx-auto mx-lg-0">
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
            {arr.map((item, i) => {
              const trafic =
                item.trafic === "high"
                  ? "text-success"
                  : item.trafic === "low"
                  ? "text-danger"
                  : "";
              return (
                <DahsboardList
                  key={i}
                  name={item.name}
                  src={item.imageUrl}
                  style={{ animationDelay: i * 0.3 + "s" }}
                  className={ANIMATE_FADEINUP}
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
