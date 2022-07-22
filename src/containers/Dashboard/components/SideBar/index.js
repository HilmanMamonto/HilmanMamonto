import DashboardAvatar from "components/DataDisplay/DashboradAvatar/DashboardAvatar";
import WalletInfo from "components/DataDisplay/WalletInfo/WalletInfo";
import Container from "Layout/Container";
import React from "react";

import "./styles.scss";
import SideBarList from "components/DataDisplay/SideBarList/SideBarList";
import NavSideBar from "components/Navigations/NavSideBar/NavSideBar";
import IconButton from "components/IconButton/IconButton";
import Avatar from "components/Avatar/Avatar";

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

const SideBar = ({ className }) => {
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
        className="d-flex sb-ic-item d-none d-md-flex"
        variant="home"
        size="large"
      />
      <IconButton
        className="d-flex sb-ic-item active"
        variant="dashboard"
        size="large"
      />
      <IconButton className="d-flex sb-ic-item" variant="bell" size="large" />
      <IconButton className="d-flex sb-ic-item" variant="bag" size="large" />
      <div className="d-flex justify-content-center">
        <Avatar src={"/andy/andy.jpg"} size="small" />
      </div>
    </div>
  );
};

export default SideBar;
