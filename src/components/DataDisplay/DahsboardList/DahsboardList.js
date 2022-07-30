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
        "dashboard-list row row-cols-2 d-flex align-items-center px-4 px-lg-auto py-3 mx-0 rounded-pill bg-white " +
        className
      }
    >
      <div className="d-flex col-5 gap-3 align-items-center">
        <Avatar as="img" src={src} />
        <span className="text-truncate">{name}</span>
      </div>
      <div className="d-flex col-7 justify-content-between">
        <span className="text-truncate">{mid}</span>
        <span className="text-end text-truncate">{right}</span>
      </div>
    </button>
  );
};

export default DahsboardList;
