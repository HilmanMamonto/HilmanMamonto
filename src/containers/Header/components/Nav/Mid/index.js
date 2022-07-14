import React from "react";
import "./styles.scss";

const NavMid = ({ className, onClick }) => {
  return (
    <div className={"nav-mid " + className}>
      <button
        type="button"
        className="btn-search"
        children={"Where are you going?"}
        textLightGray
        onClick={onClick}
      />
      <span />
      <button
        type="button"
        onClick={onClick}
        style={{
          width: "30px",
          height: "30px",
        }}
        children={<img src="search.svg" alt="" />}
      />
    </div>
  );
};

export default React.forwardRef(NavMid);
