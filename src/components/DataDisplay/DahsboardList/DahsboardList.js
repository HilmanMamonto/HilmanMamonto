import Avatar from "components/Avatar/Avatar";
import React from "react";
import "./styles.scss";

const DahsboardList = ({
  src,
  name = "name",
  mid = "mid",
  right = "right",
}) => {
  return (
    <button className="dashboard-list w-100 d-flex align-items-center justify-content-between px-4 py-3 rounded-pill bg-white">
      <div className="d-flex gap-3 align-items-center">
        <Avatar src={src} />
        <span>{name}</span>
      </div>
      <span>{mid}</span>
      <span>{right}</span>
    </button>
  );
};

export default DahsboardList;
