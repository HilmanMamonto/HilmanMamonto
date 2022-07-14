import DashboardAvatar from "components/DataDisplay/DashboradAvatar/DashboardAvatar";
import WalletInfo from "components/DataDisplay/WalletInfo/WalletInfo";
import Container from "Layout/Container";
import React from "react";

import "./styles.scss";
import SideBarList from "components/DataDisplay/SideBarList/SideBarList";
import NavSideBar from "components/Navigations/NavSideBar/NavSideBar";

const packagesItems = [
  { id: "abcdabcd001", name: "Fushimi Inari Taisha" },
  { id: "abcdabcd002", name: "Sibuya" },
  { id: "abcdabcd003", name: "Tokyo" },
  { id: "abcdabcd004", name: "Kyoto" },
];
const orderedItems = [
  { name: "Fushimi Inari Taisha" },
  { name: "Sibuya" },
  { name: "Tokyo" },
  { name: "Kyoto" },
];

const SideBar = () => {
  return (
    <div id="side-bar" className="d-flex flex-column gap-4 px-3">
      <DashboardAvatar
        name="Andy Mahendra"
        imgUrl="/andy/andy.jpg"
        tittle="Tour Guide"
      />
      <WalletInfo className="mx-4" label={10} />
      <NavSideBar />
      <SideBarList data={packagesItems} label="Packages" />
      <SideBarList data={orderedItems} label="Ordered" />
    </div>
  );
};

export default SideBar;
