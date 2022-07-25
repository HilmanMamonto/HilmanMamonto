import Avatar from "components/Avatar/Avatar";
import React from "react";
import "./styles.scss";

const DahsboardList = ({
  src,
  name = "name",
  mid = "mid",
  right = "right",
  className = "",
  style = {},
}) => {
  return (
    <button
      style={style}
      className={
        "dashboard-list row row-cols-2 d-flex align-items-center px-4 py-3 mx-0 rounded-pill bg-white " +
        className
      }
    >
      <div className="d-flex gap-3 align-items-center">
        <Avatar src={src} />
        <span className="text-truncate">{name}</span>
      </div>
      <div className="d-flex justify-content-between">
        <span>{mid}</span>
        <span className="text-end">{right}</span>
      </div>
    </button>
  );
};

export default DahsboardList;
